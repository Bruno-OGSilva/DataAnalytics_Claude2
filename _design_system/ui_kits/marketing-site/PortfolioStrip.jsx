// PortfolioStrip.jsx — three portfolio reports from the live site
const PORTFOLIO = [
  { id: 'pos',    title: 'Grocery POS Overview Report',
    tag: 'Retail · CPG',
    body: 'A user-friendly Power BI report that ensures swift navigation for daily data needs. Dive deep into sales performance by category and subcategory — tailored to your data granularity.',
    accent: 'mint' },
  { id: 'car',    title: 'Car Sales Report',
    tag: 'Automotive',
    body: 'Equips car-dealership stakeholders with actionable intelligence to optimize sales performance and budget allocation across regions and product lines.',
    accent: 'blue' },
  { id: 'loyal',  title: 'The Loyalty Program Report',
    tag: 'Retail',
    body: 'Designed for small and medium retail chains to enhance day-to-day decision-making — track members, redemption, and incremental sales.',
    accent: 'green' },
];

const PortfolioStrip = () => (
  <section className="dl-portfolio" id="portfolio">
    <div className="dl-section-head">
      <span className="dl-eyebrow">— Selected work</span>
      <h2 className="dl-section-title">Our Portfolio</h2>
      <p className="dl-section-lede">
        A few of our most-loved dashboards. Each is a starting framework you can adapt to your own data.
      </p>
    </div>
    <div className="dl-portfolio__list">
      {PORTFOLIO.map((p, i) => (
        <article key={p.id} className={`dl-portfolio__item ${i % 2 ? 'is-flipped' : ''}`}>
          <div className={`dl-portfolio__visual dl-portfolio__visual--${p.accent}`}>
            <ReportThumb accent={p.accent} />
          </div>
          <div className="dl-portfolio__copy">
            <span className="dl-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <button className="dl-btn dl-btn--ghost">
              Learn more <i data-lucide="arrow-right" style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const ReportThumb = ({ accent }) => {
  const palettes = {
    mint:  ['#4FB8D9','#137FA3','#C3F1DD','#29C99B','#1F9F66'],
    blue:  ['#137FA3','#4FB8D9','#1B3A6B','#29C99B','#0E2747'],
    green: ['#1F9F66','#29C99B','#8FE5C8','#137FA3','#0E2747'],
  }[accent];
  return (
    <div className="dl-thumb">
      <div className="dl-thumb__head">
        <div className="dl-thumb__title">Weekly summary</div>
        <div className="dl-thumb__pill">+12.4%</div>
      </div>
      <div className="dl-thumb__kpis">
        {['$1.28M','$42.10','8,412','67%'].map((v,i) => (
          <div key={i} className="dl-thumb__kpi">
            <div className="dl-thumb__kpi-label">KPI {i+1}</div>
            <div className="dl-thumb__kpi-value">{v}</div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 360 100" preserveAspectRatio="none" className="dl-thumb__chart">
        {palettes.map((c,i) => (
          <rect key={i} x={20 + i*68} y={[55,30,70,18,40][i]} width={42}
                height={100-[55,30,70,18,40][i]} rx={3} fill={c}/>
        ))}
      </svg>
    </div>
  );
};

window.PortfolioStrip = PortfolioStrip;
window.PORTFOLIO = PORTFOLIO;
