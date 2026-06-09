// ServicesGrid.jsx — 6 service tiles, matching the live site IA
const SERVICES = [
  { id: 'viz',     icon: 'bar-chart-3',   title: 'Data Visualization',
    body: 'Transform complex databases into actionable insights and easy-to-use dashboards.' },
  { id: 'insight', icon: 'lightbulb',     title: 'Data-Driven Insights & Consulting',
    body: 'Focused on Marketing and Sales, we analyze your database and answer the questions behind your decisions.' },
  { id: 'auto',    icon: 'cpu',           title: 'Process Automation',
    body: 'Save time and energy by automating simple and repetitive processes — focus on your core business.' },
  { id: 'web',     icon: 'globe',         title: 'Website Performance Analysis',
    body: 'Improve your website performance and visitor experience with concrete recommendations.' },
  { id: 'compete', icon: 'search',        title: 'Online Competitor Analysis',
    body: 'Let us dive into the competition online to support and sharpen your decisions.' },
  { id: 'train',   icon: 'graduation-cap',title: 'Power BI Training',
    body: 'Train your team to use Power BI so they can create reports and deep-dive analyses themselves.' },
];

const ServicesGrid = ({ onSelect }) => (
  <section className="dl-services" id="services">
    <div className="dl-section-head">
      <span className="dl-eyebrow">— What we do</span>
      <h2 className="dl-section-title">Our Services</h2>
      <p className="dl-section-lede">
        Learn how we can help you and your business access, visualize and read your data. If you need
        anything that is not covered here, reach out to us.
      </p>
    </div>
    <div className="dl-services__grid">
      {SERVICES.map((s, i) => (
        <ServiceCard key={s.id} {...s} onClick={() => onSelect?.(s.id)} />
      ))}
    </div>
  </section>
);

const ServiceCard = ({ icon, title, body, onClick }) => (
  <button className="dl-service-card" onClick={onClick}>
    <span className="dl-service-card__stripe" />
    <span className="dl-service-card__icon">
      <i data-lucide={icon} style={{ width: 22, height: 22 }} />
    </span>
    <span className="dl-service-card__title">{title}</span>
    <span className="dl-service-card__body">{body}</span>
    <span className="dl-service-card__arrow">
      Learn more <i data-lucide="arrow-right" style={{ width: 14, height: 14 }} />
    </span>
  </button>
);

window.ServicesGrid = ServicesGrid;
window.SERVICES = SERVICES;
