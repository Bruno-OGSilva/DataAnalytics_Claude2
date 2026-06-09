// Hero.jsx — hero block used on Home
const Hero = ({ onPrimary, onSecondary }) => (
  <section className="dl-hero">
    <div className="dl-hero__copy">
      <span className="dl-eyebrow">— Business analytics, made accessible</span>
      <h1 className="dl-hero__title">
        Turn your data into <span className="dl-grad">insights</span>.
      </h1>
      <p className="dl-hero__lede">
        Dashboard Labs is a business analytics consulting firm that helps you analyze and interpret your data
        for better business decisions. Whether you need data visualization, reporting, or consulting projects,
        we have the expertise and tools to help you grow your business.
      </p>
      <div className="dl-hero__cta">
        <button className="dl-btn dl-btn--primary dl-btn--lg" onClick={onPrimary}>
          See our services
        </button>
        <button className="dl-btn dl-btn--ghost dl-btn--lg" onClick={onSecondary}>
          View portfolio
          <i data-lucide="arrow-right" style={{ width: 16, height: 16 }} />
        </button>
      </div>
      <div className="dl-hero__proof">
        <span className="dl-chip">
          <i data-lucide="award" style={{ width: 14, height: 14 }} />
          Power BI Certified Partner
        </span>
        <span className="dl-chip">
          <i data-lucide="map-pin" style={{ width: 14, height: 14 }} />
          Based in Canada · Serving North America
        </span>
      </div>
    </div>
    <div className="dl-hero__visual">
      <HeroDashboard />
    </div>
  </section>
);

const HeroDashboard = () => (
  <div className="dl-mockup">
    <div className="dl-mockup__chrome">
      <span /><span /><span />
      <div className="dl-mockup__url">app.dashboardlabs.ca/grocery-pos</div>
    </div>
    <div className="dl-mockup__body">
      <div className="dl-mockup__row">
        <MockKpi label="Net sales"    value="$1.28M" delta="+12.4%" up />
        <MockKpi label="Avg basket"   value="$42.10" delta="−1.8%"  />
        <MockKpi label="Loyalty"      value="8,412"  delta="+22.1%" up inverse />
      </div>
      <div className="dl-mockup__chart">
        <svg viewBox="0 0 460 130" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          {[40,55,28,72,18].map((y,i) => (
            <rect key={i} x={20 + i*88} y={y} width={50} height={130-y} rx={4}
                  fill={['#4FB8D9','#137FA3','#C3F1DD','#29C99B','#1F9F66'][i]} />
          ))}
          <polyline points="45,55 133,70 221,42 309,86 397,28" fill="none"
                    stroke="#0E2747" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          {[[45,55],[133,70],[221,42],[309,86],[397,28]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={3.5} fill="white" stroke="#0E2747" strokeWidth={2}/>
          ))}
        </svg>
      </div>
    </div>
  </div>
);

const MockKpi = ({ label, value, delta, up, inverse }) => (
  <div className={`dl-kpi ${inverse ? 'dl-kpi--inverse' : ''}`}>
    <div className="dl-kpi__label">{label}</div>
    <div className="dl-kpi__value">{value}</div>
    <div className={`dl-kpi__delta ${up ? 'is-up' : 'is-down'}`}>
      <i data-lucide={up ? 'trending-up' : 'trending-down'} style={{ width: 12, height: 12 }} />
      {delta}
    </div>
  </div>
);

window.Hero = Hero;
