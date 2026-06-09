# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Goal

E-commerce data analytics project for Dashboard Labs. The workflow is:
1. Join and analyze the CSV tables in `data/`
2. Compute KPIs and write smaller focused output files (do not feed all raw data to the LLM at once)
3. Build an HTML presentation from those KPI files using the `_design_system`

## Data Tables (`data/`)

| File | Key columns | Notes |
|---|---|---|
| `clientes.csv` | `id_cliente`, `nome_cliente`, `estado`, `pais`, `data_cadastro` | Customer master |
| `produtos.csv` | `id_produto`, `nome_produto`, `categoria`, `marca`, `preco_atual` | Clean product master |
| `produtos_sujo.csv` | same schema | Dirty version — inconsistent casing, date formats; use for data quality analysis |
| `vendas.csv` | `id_venda`, `data_venda`, `id_cliente`, `id_produto`, `canal_venda`, `quantidade`, `preco_unitario` | Fact table |
| `preco_competidores.csv` | `id_produto`, `nome_concorrente`, `preco_concorrente`, `data_coleta` | Competitor pricing |

**Key joins:**
- `vendas.id_cliente` → `clientes.id_cliente`
- `vendas.id_produto` → `produtos.id_produto`
- `preco_competidores.id_produto` → `produtos.id_produto`

## KPI Analysis Workflow

When computing KPIs, write intermediate output files (e.g., `data/kpi_vendas_por_canal.csv`, `data/kpi_top_produtos.csv`) so that each subsequent analysis step can load a small, focused file rather than the full raw tables. This pattern keeps LLM context small and allows deeper analysis per topic.

## Design System (`_design_system/`)

All HTML output must use the Dashboard Labs design system:

- **CSS tokens**: link `_design_system/colors_and_type.css` for colors, typography, spacing, shadows, and motion variables
- **Fonts**: Montserrat (display/headings), Manrope (body), JetBrains Mono (numbers/code)
- **Brand gradient**: navy → blue → teal → green (`#0E2747` → `#137FA3` → `#29C99B` → `#1F9F66`) — use once per surface as a top-of-card strip or accent
- **Primary CTA color**: `--dl-green-600` (`#1F9F66`); headings: `--dl-navy-900` (`#0E2747`); section tint: `--dl-mint-200` (`#EAF6F1`)
- **Icons**: Lucide via CDN (`unpkg.com/lucide@latest`), stroke weight 1.75–2px
- **Existing components**: reuse from `_design_system/ui_kits/marketing-site/` (Header, Hero, Footer, etc.) rather than reinventing
- **Preview specimens**: `_design_system/preview/` has small HTML cards demonstrating colors, type, spacing, and components

Brand voice: warm and practical, no emoji, no startup hyperbole. See `_design_system/README.md` for full copy guidelines.

## Skill

Use `/dashboard-labs-design` (the `_design_system/SKILL.md` skill) when building or designing on-brand HTML artifacts for this project.
