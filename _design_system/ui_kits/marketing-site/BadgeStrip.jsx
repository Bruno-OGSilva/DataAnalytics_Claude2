// BadgeStrip.jsx — partner / certification row
const BadgeStrip = () => (
  <section className="dl-badges">
    <div className="dl-badges__inner">
      <div className="dl-badges__title">Our team is Power BI Certified</div>
      <div className="dl-badges__row">
        <Badge icon="award"      label="Power BI Certified" />
        <Badge icon="bar-chart-3"label="Microsoft Partner" />
        <Badge icon="shield-check"label="GDPR Compliant" />
        <Badge icon="map-pin"    label="Made in Canada" />
        <Badge icon="globe"      label="Remote-First" />
      </div>
    </div>
  </section>
);

const Badge = ({ icon, label }) => (
  <div className="dl-badge">
    <i data-lucide={icon} style={{ width: 18, height: 18 }} />
    <span>{label}</span>
  </div>
);

window.BadgeStrip = BadgeStrip;
