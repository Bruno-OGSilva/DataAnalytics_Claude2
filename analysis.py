#!/usr/bin/env python3
"""E-commerce analytics — gera KPI CSVs e relatorio.html."""

import json
import re
from pathlib import Path

import pandas as pd

DATA = Path("data")

# ── formatters ────────────────────────────────────────────────────────────────

def brl(v: float) -> str:
    s = f"{v:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    return f"R$ {s}"


def fmt_int(v: int) -> str:
    """Integer with Brazilian thousands separator (period)."""
    return f"{v:,}".replace(",", ".")


def pct(v: float) -> str:
    sign = "+" if v >= 0 else ""
    return f"{sign}{v:.1f}%"


# ── load ──────────────────────────────────────────────────────────────────────

def load_data() -> dict:
    return {
        "clientes":   pd.read_csv(DATA / "clientes.csv"),
        "produtos":   pd.read_csv(DATA / "produtos.csv"),
        "vendas":     pd.read_csv(DATA / "vendas.csv"),
        "preco_comp": pd.read_csv(DATA / "preco_competidores.csv"),
        "prod_sujo":  pd.read_csv(DATA / "produtos_sujo.csv"),
    }


# ── compute KPIs ──────────────────────────────────────────────────────────────

def compute_kpis(dfs: dict) -> dict:
    clientes   = dfs["clientes"]
    produtos   = dfs["produtos"]
    vendas     = dfs["vendas"].copy()
    preco_comp = dfs["preco_comp"]
    prod_sujo  = dfs["prod_sujo"]

    vendas["receita"]    = vendas["quantidade"] * vendas["preco_unitario"]
    vendas["data_venda"] = pd.to_datetime(vendas["data_venda"])
    vendas["data"]       = vendas["data_venda"].dt.date

    v_p   = vendas.merge(produtos[["id_produto", "nome_produto", "categoria"]], on="id_produto", how="left")
    v_p_c = v_p.merge(clientes[["id_cliente", "estado"]], on="id_cliente", how="left")

    # 1. Resumo geral
    resumo = {
        "receita_total":           vendas["receita"].sum(),
        "total_pedidos":           len(vendas),
        "ticket_medio":            vendas["receita"].mean(),
        "data_inicio":             vendas["data"].min().strftime("%d/%m/%Y"),
        "data_fim":                vendas["data"].max().strftime("%d/%m/%Y"),
        "total_clientes":          vendas["id_cliente"].nunique(),
        "total_produtos_vendidos": vendas["id_produto"].nunique(),
    }
    pd.DataFrame([resumo]).to_csv(DATA / "kpi_resumo_geral.csv", index=False)
    print("  [ok] kpi_resumo_geral.csv")

    # 2. Por canal
    por_canal = (
        v_p.groupby("canal_venda")
        .agg(receita=("receita", "sum"), pedidos=("id_venda", "count"), unidades=("quantidade", "sum"))
        .reset_index()
        .sort_values("receita", ascending=False)
    )
    por_canal.to_csv(DATA / "kpi_vendas_por_canal.csv", index=False)
    print("  [ok] kpi_vendas_por_canal.csv")

    # 3. Por dia
    por_dia = (
        vendas.groupby("data")
        .agg(receita=("receita", "sum"), pedidos=("id_venda", "count"))
        .reset_index()
    )
    por_dia["data"] = por_dia["data"].astype(str)
    por_dia.to_csv(DATA / "kpi_vendas_por_dia.csv", index=False)
    print("  [ok] kpi_vendas_por_dia.csv")

    # 4. Categorias
    top_cat = (
        v_p.groupby("categoria")
        .agg(receita=("receita", "sum"), unidades=("quantidade", "sum"), pedidos=("id_venda", "count"))
        .reset_index()
        .sort_values("receita", ascending=False)
    )
    top_cat.to_csv(DATA / "kpi_top_categorias.csv", index=False)
    print("  [ok] kpi_top_categorias.csv")

    # 5. Top 10 produtos
    top_prod = (
        v_p.groupby(["id_produto", "nome_produto", "categoria"])
        .agg(receita=("receita", "sum"), unidades=("quantidade", "sum"))
        .reset_index()
        .sort_values("receita", ascending=False)
        .head(10)
        .reset_index(drop=True)
    )
    top_prod.to_csv(DATA / "kpi_top_produtos.csv", index=False)
    print("  [ok] kpi_top_produtos.csv")

    # 6. Por estado
    por_estado = (
        v_p_c.groupby("estado")
        .agg(receita=("receita", "sum"), pedidos=("id_venda", "count"))
        .reset_index()
        .sort_values("receita", ascending=False)
    )
    por_estado.to_csv(DATA / "kpi_vendas_por_estado.csv", index=False)
    print("  [ok] kpi_vendas_por_estado.csv")

    # 7. Preço vs concorrentes
    pivot = (
        preco_comp.groupby(["id_produto", "nome_concorrente"])["preco_concorrente"]
        .mean()
        .unstack("nome_concorrente")
        .reset_index()
    )
    ap = produtos[["id_produto", "nome_produto", "categoria", "preco_atual"]].merge(pivot, on="id_produto", how="inner")
    comps = [c for c in ["Amazon", "Magalu", "Mercado Livre", "Shopee"] if c in ap.columns]
    ap["media_concorrentes"] = ap[comps].mean(axis=1)
    ap["diferenca_pct"] = ((ap["preco_atual"] - ap["media_concorrentes"]) / ap["media_concorrentes"] * 100).round(1)
    ap.to_csv(DATA / "kpi_analise_preco.csv", index=False)
    print("  [ok] kpi_analise_preco.csv")

    # 8. Qualidade de dados (produtos_sujo)
    col_data  = prod_sujo.columns[5]
    col_cat   = prod_sujo.columns[2]
    col_preco = prod_sujo.columns[4]
    col_marca = prod_sujo.columns[3]

    date_bad  = sum(1 for v in prod_sujo[col_data].astype(str)
                    if v not in ("nan", "N/A", "") and not re.match(r"^\d{4}-\d{2}-\d{2}", v))
    price_bad = sum(1 for v in prod_sujo[col_preco].astype(str)
                    if "R$" in v or v.count(".") > 1)
    null_bad  = sum(1 for v in prod_sujo[col_marca].astype(str)
                    if v.strip() in ("nan", "NULL", "", "N/A"))
    dup_bad   = int(prod_sujo.duplicated("id_produto").sum())
    cat_bad   = sum(1 for v in prod_sujo[col_cat].dropna().unique()
                    if v != v.strip().title() and v not in {"Eletrônicos", "Tênis", "Acessórios", "Áudio"})

    qual = pd.DataFrame([
        {"tipo": "Formato de data inválido",       "ocorrencias": date_bad},
        {"tipo": "Formato de preço inconsistente", "ocorrencias": price_bad},
        {"tipo": "Campos nulos/ausentes (marca)",  "ocorrencias": null_bad},
        {"tipo": "Produtos duplicados",            "ocorrencias": dup_bad},
        {"tipo": "Categoria com grafia incorreta", "ocorrencias": cat_bad},
        {"tipo": "Nomes de colunas divergentes",   "ocorrencias": 1},
    ])
    qual.to_csv(DATA / "kpi_qualidade_dados.csv", index=False)
    print("  [ok] kpi_qualidade_dados.csv")

    return dict(resumo=resumo, por_canal=por_canal, por_dia=por_dia,
                top_cat=top_cat, top_prod=top_prod, por_estado=por_estado,
                ap=ap, comps=comps, qual=qual)


# ── HTML helpers ──────────────────────────────────────────────────────────────

def kpi_card(label: str, value: str, inverse: bool = False, delta: str = "", delta_up: bool = True) -> str:
    mod = " dl-kpi--inverse" if inverse else ""
    delta_html = ""
    if delta:
        cls = "is-up" if delta_up else "is-down"
        arrow = "&#x2191;" if delta_up else "&#x2193;"
        delta_html = f'<div class="dl-kpi__delta {cls}">{arrow} {delta}</div>'
    return (
        f'<div class="dl-kpi{mod}">'
        f'<div class="dl-kpi__label">{label}</div>'
        f'<div class="dl-kpi__value">{value}</div>'
        f'{delta_html}'
        f'</div>'
    )


def section_head(eyebrow: str, title: str, lede: str = "") -> str:
    lede_html = f'<p class="dl-section-lede">{lede}</p>' if lede else ""
    return (
        f'<div class="dl-section-head">'
        f'<span class="dl-eyebrow">{eyebrow}</span>'
        f'<h2 class="dl-section-title">{title}</h2>'
        f'{lede_html}'
        f'</div>'
    )


# ── HTML generation ───────────────────────────────────────────────────────────

EXTRA_CSS = """\
  *{box-sizing:border-box}
  .sec{padding:80px 28px}
  .sec--muted{background:var(--bg-brand-soft)}
  .sec--dark{background:var(--dl-navy-900)}
  .wrap{max-width:1200px;margin:0 auto}
  .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  .dl-kpi{padding:20px 22px}
  .dl-kpi .dl-kpi__label{font-size:11px}
  .dl-kpi .dl-kpi__value{font-size:26px}
  .chart-box{position:relative;height:320px}
  .chart-box--tall{height:400px}
  table.t{width:100%;border-collapse:collapse;font-size:14px;background:white;
    border-radius:12px;overflow:hidden;border:1px solid var(--border)}
  table.t th{font-family:var(--font-display);font-size:11px;letter-spacing:.08em;
    text-transform:uppercase;color:var(--fg3);font-weight:700;padding:12px 14px;
    border-bottom:2px solid var(--border);text-align:left;background:var(--bg-muted)}
  table.t td{padding:13px 14px;border-bottom:1px solid var(--divider);color:var(--fg2)}
  table.t tr:last-child td{border-bottom:none}
  table.t td.n{font-family:var(--font-mono);color:var(--fg1);font-weight:600}
  table.t td.rk{font-family:var(--font-mono);font-size:12px;color:var(--fg3);
    font-weight:700;width:32px}
  .badge{display:inline-block;font-family:var(--font-display);font-weight:700;
    font-size:11px;padding:3px 9px;border-radius:999px;letter-spacing:.04em}
  .badge-up{background:#E5F6EF;color:var(--dl-green-600)}
  .badge-dn{background:#FDEAEA;color:var(--danger)}
  .badge-eq{background:var(--bg-subtle);color:var(--fg3)}
  .hero-wrap{background:var(--dl-navy-900);padding:80px 28px 60px;text-align:center}
  .hero-wrap h1{color:white;font-size:52px;margin:10px 0 8px}
  .hero-wrap .lede{color:rgba(255,255,255,.65);font-size:18px;margin:0 0 40px}
  .qcard{background:white;border:1px solid var(--border);border-radius:14px;
    padding:28px;position:relative;overflow:hidden}
  .qcard__stripe{position:absolute;top:0;left:0;right:0;height:3px;
    background:var(--gradient-brand)}
  .qcard__n{font-family:var(--font-mono);font-weight:800;font-size:42px;
    color:var(--danger);line-height:1;margin:8px 0 6px}
  .qcard__lbl{font-family:var(--font-display);font-size:15px;font-weight:600;
    color:var(--fg-brand)}
  .icon-box{width:46px;height:46px;border-radius:10px;background:var(--bg-brand-soft);
    display:inline-flex;align-items:center;justify-content:center;color:var(--dl-green-600)}
  @media(max-width:900px){
    .grid4{grid-template-columns:1fr 1fr}
    .grid2{grid-template-columns:1fr}
    .grid3{grid-template-columns:1fr 1fr}
    .hero-wrap h1{font-size:36px}
  }"""


def build_html(kpis: dict) -> None:
    r         = kpis["resumo"]
    por_canal = kpis["por_canal"]
    por_dia   = kpis["por_dia"]
    top_cat   = kpis["top_cat"]
    top_prod  = kpis["top_prod"]
    por_estado = kpis["por_estado"]
    ap        = kpis["ap"]
    comps     = kpis["comps"]
    qual      = kpis["qual"]

    # ── scalar KPIs
    receita_total  = r["receita_total"]
    total_pedidos  = int(r["total_pedidos"])
    ticket_medio   = r["ticket_medio"]
    data_inicio    = r["data_inicio"]
    data_fim       = r["data_fim"]
    total_clientes = int(r["total_clientes"])

    # ── canal breakdown
    canal_map = {"ecommerce": "E-commerce", "loja_fisica": "Loja Física"}
    canal_labels_js = json.dumps([canal_map.get(c, c) for c in por_canal["canal_venda"].tolist()])
    canal_data_js   = json.dumps([round(float(v), 2) for v in por_canal["receita"].tolist()])
    canal_dict      = dict(zip(por_canal["canal_venda"], por_canal["receita"]))
    eco_receita     = canal_dict.get("ecommerce", 0)
    loja_receita    = canal_dict.get("loja_fisica", 0)
    eco_pct         = eco_receita / receita_total * 100 if receita_total else 0
    loja_pct        = 100 - eco_pct
    canal_pedidos   = dict(zip(por_canal["canal_venda"], por_canal["pedidos"]))

    # ── tendência diária
    dias_labels_js  = json.dumps([d[5:].replace("-", "/") for d in por_dia["data"].tolist()])
    dias_receita_js = json.dumps([round(float(v), 2) for v in por_dia["receita"].tolist()])

    # ── categorias
    cat_labels_js  = json.dumps(top_cat["categoria"].tolist())
    cat_receita_js = json.dumps([round(float(v), 2) for v in top_cat["receita"].tolist()])

    # ── competitor table (sorted by abs diferenca)
    ap_disp = ap.assign(abs_diff=ap["diferenca_pct"].abs()).sort_values("abs_diff", ascending=False).head(20)

    # ── qual icons
    qual_icons = {
        "Formato de data inválido":       "calendar-x",
        "Formato de preço inconsistente": "circle-dollar-sign",
        "Campos nulos/ausentes (marca)":  "alert-triangle",
        "Produtos duplicados":            "copy",
        "Categoria com grafia incorreta": "type",
        "Nomes de colunas divergentes":   "table-2",
    }

    # ── chart palette hex (CSS vars don't work in Chart.js)
    C1, C2, C3, C4, C5, C6 = "#4FB8D9", "#137FA3", "#8FE5C8", "#29C99B", "#1F9F66", "#0E2747"
    CATS_COLORS = [C1, C2, C3, C4, C5, C6, "#2A9BC0", "#3DD9AC", "#1B3A6B", "#C3F1DD", "#178A53"]

    # ── build sections ────────────────────────────────────────────────────────

    # HERO
    hero_kpis = (
        kpi_card("Receita Total",  brl(receita_total),  inverse=True) +
        kpi_card("Total de Pedidos", f"{total_pedidos:,}".replace(",", "."), inverse=True) +
        kpi_card("Ticket Médio",   brl(ticket_medio),   inverse=True) +
        kpi_card("Clientes Ativos", str(total_clientes), inverse=True)
    )

    hero = f"""
<section class="hero-wrap">
  <div class="wrap">
    <img src="_design_system/assets/logo-light.png" style="height:52px;margin:0 auto 20px" alt="Dashboard Labs">
    <span class="dl-eyebrow" style="color:#3DD9AC">Análise de E-commerce</span>
    <h1>Relatório de Performance</h1>
    <p class="lede">{data_inicio} &ndash; {data_fim} &middot; Dados reais de operação</p>
    <div class="grid4" style="max-width:960px;margin:0 auto">{hero_kpis}</div>
  </div>
</section>"""

    # CANAL
    canal_kpis = (
        kpi_card("E-commerce",  brl(eco_receita),  delta=f"{eco_pct:.1f}% da receita",  delta_up=True) +
        kpi_card("Loja Física", brl(loja_receita), delta=f"{loja_pct:.1f}% da receita", delta_up=True) +
        kpi_card("Pedidos E-commerce",  str(int(canal_pedidos.get("ecommerce", 0)))) +
        kpi_card("Pedidos Loja Física", str(int(canal_pedidos.get("loja_fisica", 0))))
    )

    canal = f"""
<section class="sec">
  <div class="wrap">
    {section_head("Canais de Venda", "Performance por Canal",
                  "Comparativo de receita e volume entre e-commerce e loja física.")}
    <div class="grid2">
      <div class="chart-box"><canvas id="chartCanal"></canvas></div>
      <div class="grid2" style="gap:16px">{canal_kpis}</div>
    </div>
  </div>
</section>"""

    # TENDÊNCIA
    tendencia = f"""
<section class="sec sec--muted">
  <div class="wrap">
    {section_head("Tendência", "Receita Diária",
                  "Evolução da receita ao longo do período analisado.")}
    <div class="chart-box chart-box--tall"><canvas id="chartTend"></canvas></div>
  </div>
</section>"""

    # CATEGORIAS
    categorias = f"""
<section class="sec">
  <div class="wrap">
    {section_head("Produtos", "Receita por Categoria",
                  "Desempenho de cada categoria do catálogo no período.")}
    <div class="grid2">
      <div class="chart-box chart-box--tall"><canvas id="chartCat"></canvas></div>
      <div>
        <table class="t">
          <thead><tr><th>Categoria</th><th>Receita</th><th>Unidades</th><th>Pedidos</th></tr></thead>
          <tbody>
            {''.join(
              (f'<tr>'
               f'<td>{row["categoria"]}</td>'
               f'<td class="n">{brl(row["receita"])}</td>'
               f'<td class="n">{fmt_int(int(row["unidades"]))}</td>'
               f'<td class="n">{int(row["pedidos"])}</td>'
               f'</tr>')
              for _, row in top_cat.iterrows()
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>"""

    # TOP PRODUTOS
    top_rows = "".join(
        f'<tr>'
        f'<td class="rk">{i+1}</td>'
        f'<td>{row["nome_produto"]}</td>'
        f'<td><span class="dl-tag">{row["categoria"]}</span></td>'
        f'<td class="n">{brl(row["receita"])}</td>'
        f'<td class="n">{int(row["unidades"])}</td>'
        f'</tr>'
        for i, (_, row) in enumerate(top_prod.iterrows())
    )

    top_produtos = f"""
<section class="sec sec--muted">
  <div class="wrap">
    {section_head("Ranking", "Top 10 Produtos",
                  "Produtos com maior receita gerada no período.")}
    <table class="t">
      <thead><tr><th>#</th><th>Produto</th><th>Categoria</th><th>Receita</th><th>Unidades</th></tr></thead>
      <tbody>{top_rows}</tbody>
    </table>
  </div>
</section>"""

    # GEOGRÁFICO
    estado_rows = "".join(
        f'<tr>'
        f'<td class="rk">{i+1}</td>'
        f'<td><strong>{row["estado"]}</strong></td>'
        f'<td class="n">{brl(row["receita"])}</td>'
        f'<td class="n">{int(row["pedidos"])}</td>'
        f'<td class="n">{brl(row["receita"] / int(row["pedidos"]))}</td>'
        f'</tr>'
        for i, (_, row) in enumerate(por_estado.head(10).iterrows())
    )

    geografico = f"""
<section class="sec">
  <div class="wrap">
    {section_head("Distribuição", "Análise Geográfica",
                  "Top 10 estados por receita gerada (de {len(por_estado)} estados ativos).")}
    <table class="t">
      <thead><tr><th>#</th><th>Estado</th><th>Receita</th><th>Pedidos</th><th>Ticket Médio</th></tr></thead>
      <tbody>{estado_rows}</tbody>
    </table>
  </div>
</section>"""

    # PREÇOS
    def preco_badge(v: float) -> str:
        if v <= -5:
            return '<span class="badge badge-up">Mais barato</span>'
        if v >= 5:
            return '<span class="badge badge-dn">Mais caro</span>'
        return '<span class="badge badge-eq">Em linha</span>'

    def fmt_comp(row, col):
        if col not in row or pd.isna(row[col]):
            return "–"
        return brl(float(row[col]))

    preco_rows = "".join(
        f'<tr>'
        f'<td>{row["nome_produto"]}</td>'
        f'<td class="n">{brl(float(row["preco_atual"]))}</td>'
        + "".join(f'<td class="n">{fmt_comp(row, c)}</td>' for c in comps) +
        f'<td class="n">{pct(float(row["diferenca_pct"]))}</td>'
        f'<td>{preco_badge(float(row["diferenca_pct"]))}</td>'
        f'</tr>'
        for _, row in ap_disp.iterrows()
    )

    comp_headers = "".join(f"<th>{c}</th>" for c in comps)

    precos = f"""
<section class="sec sec--muted">
  <div class="wrap">
    {section_head("Competitividade", "Preços vs Concorrentes",
                  "Comparativo entre nosso preço e a média de cada concorrente (top 20 maior diferença).")}
    <table class="t">
      <thead><tr><th>Produto</th><th>Nosso Preço</th>{comp_headers}<th>Dif. %</th><th>Posição</th></tr></thead>
      <tbody>{preco_rows}</tbody>
    </table>
  </div>
</section>"""

    # QUALIDADE
    qual_cards = "".join(
        f'<div class="qcard">'
        f'<div class="qcard__stripe"></div>'
        f'<div class="icon-box" style="margin-bottom:12px"><i data-lucide="{qual_icons.get(row["tipo"], "alert-circle")}" size="22"></i></div>'
        f'<div class="qcard__n">{int(row["ocorrencias"])}</div>'
        f'<div class="qcard__lbl">{row["tipo"]}</div>'
        f'</div>'
        for _, row in qual.iterrows()
    )

    qualidade = f"""
<section class="sec">
  <div class="wrap">
    {section_head("Qualidade de Dados", "Problemas em produtos_sujo.csv",
                  "Inconsistências detectadas na tabela de produtos com dados brutos.")}
    <div class="grid3">{qual_cards}</div>
  </div>
</section>"""

    # FOOTER
    footer = """
<footer class="dl-footer">
  <div class="dl-footer__inner">
    <div class="dl-footer__brand">
      <img src="_design_system/assets/logo-light.png" alt="Dashboard Labs">
      <p>Turn your data into insights.<br>dashboardlabs.ca</p>
    </div>
    <div class="dl-footer__cols">
      <div>
        <h4>Análise</h4>
        <a href="#canal">Canais de Venda</a>
        <a href="#tendencia">Tendência</a>
        <a href="#categorias">Categorias</a>
      </div>
      <div>
        <h4>Produtos</h4>
        <a href="#top10">Top 10 Produtos</a>
        <a href="#precos">Preços vs Concorrentes</a>
      </div>
      <div>
        <h4>Dados</h4>
        <a href="#geo">Distribuição Geográfica</a>
        <a href="#qualidade">Qualidade de Dados</a>
      </div>
    </div>
  </div>
  <div class="dl-footer__bar">
    <span>Dashboard Labs &copy; 2026</span>
    <span>Gerado por analysis.py</span>
  </div>
</footer>"""

    # ── assemble ──────────────────────────────────────────────────────────────

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Relatório E-commerce &ndash; Dashboard Labs</title>
  <link rel="stylesheet" href="_design_system/ui_kits/marketing-site/site.css">
  <style>{EXTRA_CSS}</style>
</head>
<body>

<nav>
  <div class="nav-inner wrap" style="max-width:1200px;margin:0 auto;padding:14px 28px;display:flex;align-items:center;gap:32px">
    <img src="_design_system/assets/logo-dark.png" style="height:36px" alt="Dashboard Labs">
    <span style="font-family:var(--font-display);font-size:13px;font-weight:700;color:var(--dl-navy-900)">
      DASHBOARD LABS &nbsp;<em style="color:var(--dl-green-600);font-style:normal">ANALYTICS</em>
    </span>
    <span style="margin-left:auto;font-family:var(--font-display);font-size:12px;color:var(--fg3)">
      {data_inicio} &ndash; {data_fim}
    </span>
  </div>
</nav>

{hero}

<div id="canal">{canal}</div>
<div id="tendencia">{tendencia}</div>
<div id="categorias">{categorias}</div>
<div id="top10">{top_produtos}</div>
<div id="geo">{geografico}</div>
<div id="precos">{precos}</div>
<div id="qualidade">{qualidade}</div>

{footer}

<script src="https://unpkg.com/chart.js@4/dist/chart.umd.min.js"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<script>
lucide.createIcons();

const COLORS = ["{C1}","{C2}","{C3}","{C4}","{C5}","{C6}"];
Chart.defaults.font.family = "'Manrope', 'Helvetica Neue', sans-serif";
Chart.defaults.color = "#485874";

// Canal donut
new Chart(document.getElementById("chartCanal"), {{
  type: "doughnut",
  data: {{
    labels: {canal_labels_js},
    datasets: [{{ data: {canal_data_js}, backgroundColor: ["{C4}", "{C6}"],
      borderWidth: 0, hoverOffset: 6 }}]
  }},
  options: {{
    responsive: true, maintainAspectRatio: false,
    plugins: {{
      legend: {{ position: "bottom", labels: {{ font: {{ family: "'Manrope'", size: 13 }}, padding: 16 }} }},
      tooltip: {{ callbacks: {{ label: ctx => " R$ " + ctx.parsed.toLocaleString("pt-BR", {{minimumFractionDigits:2}}) }} }}
    }}
  }}
}});

// Tendência linha
new Chart(document.getElementById("chartTend"), {{
  type: "line",
  data: {{
    labels: {dias_labels_js},
    datasets: [{{
      label: "Receita Diária (R$)",
      data: {dias_receita_js},
      borderColor: "{C5}", backgroundColor: "{C5}22",
      borderWidth: 2.5, pointRadius: 3, fill: true, tension: 0.3
    }}]
  }},
  options: {{
    responsive: true, maintainAspectRatio: false,
    plugins: {{ legend: {{ display: false }} }},
    scales: {{
      x: {{ grid: {{ display: false }}, ticks: {{ maxTicksLimit: 10 }} }},
      y: {{ grid: {{ color: "#ECEEF3" }},
        ticks: {{ callback: v => "R$ " + (v/1000).toFixed(0) + "k" }} }}
    }}
  }}
}});

// Categorias bar horizontal
new Chart(document.getElementById("chartCat"), {{
  type: "bar",
  data: {{
    labels: {cat_labels_js},
    datasets: [{{
      label: "Receita (R$)",
      data: {cat_receita_js},
      backgroundColor: {json.dumps(CATS_COLORS[:len(top_cat)])},
      borderRadius: 6, borderSkipped: false
    }}]
  }},
  options: {{
    indexAxis: "y",
    responsive: true, maintainAspectRatio: false,
    plugins: {{ legend: {{ display: false }} }},
    scales: {{
      x: {{ grid: {{ color: "#ECEEF3" }},
        ticks: {{ callback: v => "R$ " + (v/1000).toFixed(0) + "k" }} }},
      y: {{ grid: {{ display: false }} }}
    }}
  }}
}});
</script>
</body>
</html>"""

    Path("relatorio.html").write_text(html, encoding="utf-8")
    print("  [ok] relatorio.html")


# ── main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    print("Carregando dados...")
    dfs = load_data()

    print("Computando KPIs...")
    kpis = compute_kpis(dfs)

    print("Gerando HTML...")
    build_html(kpis)

    print("\nConcluido! Abra relatorio.html no navegador.")


if __name__ == "__main__":
    main()
