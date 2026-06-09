/* @ds-bundle: {"format":3,"namespace":"DashboardLabsDesignSystem_3767c3","components":[],"sourceHashes":{"ui_kits/marketing-site/BadgeStrip.jsx":"645ba8b7d4a6","ui_kits/marketing-site/ContactForm.jsx":"967b32c12953","ui_kits/marketing-site/Footer.jsx":"71d8320b183e","ui_kits/marketing-site/Header.jsx":"8dbd826fc074","ui_kits/marketing-site/Hero.jsx":"60fe7d63d2f8","ui_kits/marketing-site/PortfolioStrip.jsx":"af74a9f212ef","ui_kits/marketing-site/ServicesGrid.jsx":"8b45319da8e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DashboardLabsDesignSystem_3767c3 = window.DashboardLabsDesignSystem_3767c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/marketing-site/BadgeStrip.jsx
try { (() => {
// BadgeStrip.jsx — partner / certification row
const BadgeStrip = () => /*#__PURE__*/React.createElement("section", {
  className: "dl-badges"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-badges__inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-badges__title"
}, "Our team is Power BI Certified"), /*#__PURE__*/React.createElement("div", {
  className: "dl-badges__row"
}, /*#__PURE__*/React.createElement(Badge, {
  icon: "award",
  label: "Power BI Certified"
}), /*#__PURE__*/React.createElement(Badge, {
  icon: "bar-chart-3",
  label: "Microsoft Partner"
}), /*#__PURE__*/React.createElement(Badge, {
  icon: "shield-check",
  label: "GDPR Compliant"
}), /*#__PURE__*/React.createElement(Badge, {
  icon: "map-pin",
  label: "Made in Canada"
}), /*#__PURE__*/React.createElement(Badge, {
  icon: "globe",
  label: "Remote-First"
}))));
const Badge = ({
  icon,
  label
}) => /*#__PURE__*/React.createElement("div", {
  className: "dl-badge"
}, /*#__PURE__*/React.createElement("i", {
  "data-lucide": icon,
  style: {
    width: 18,
    height: 18
  }
}), /*#__PURE__*/React.createElement("span", null, label));
window.BadgeStrip = BadgeStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/BadgeStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactForm.jsx
try { (() => {
// ContactForm.jsx — Contact page
const ContactForm = ({
  onSubmit
}) => {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'viz',
    sent: false
  });
  const set = k => e => setState(s => ({
    ...s,
    [k]: e.target.value
  }));
  const send = e => {
    e.preventDefault();
    setState(s => ({
      ...s,
      sent: true
    }));
    onSubmit?.(state);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "dl-contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dl-contact__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dl-contact__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dl-eyebrow"
  }, "\u2014 Reach out"), /*#__PURE__*/React.createElement("h2", {
    className: "dl-section-title"
  }, "Let's talk about your data."), /*#__PURE__*/React.createElement("p", null, "Tell us a bit about your project \u2014 the rough shape of what you'd like to measure, where the data lives today, and any deadlines you're working against. We'll respond within one business day with next steps."), /*#__PURE__*/React.createElement("ul", {
    className: "dl-contact__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 18,
      height: 18
    }
  }), " hello@dashboardlabs.ca"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.75c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32V9.67h-2.65c.04.75 0 8.67 0 8.67h2.65v-4.84c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.79v4.67h2.66z"
  })), " /company/dashboardlabs"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })), " @dashboard_labs"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 18,
      height: 18
    }
  }), " Ontario, Canada \xB7 serving North America"))), /*#__PURE__*/React.createElement("form", {
    className: "dl-contact__form",
    onSubmit: send
  }, state.sent ? /*#__PURE__*/React.createElement("div", {
    className: "dl-contact__sent"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 32,
      height: 32,
      color: 'var(--dl-green-600)'
    }
  }), /*#__PURE__*/React.createElement("h3", null, "Thanks ", state.name.split(' ')[0] || 'there', ", we'll be in touch."), /*#__PURE__*/React.createElement("p", null, "We try to respond within one business day.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "dl-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    value: state.name,
    onChange: set('name'),
    placeholder: "Sara Khoury"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    value: state.email,
    onChange: set('email'),
    placeholder: "sara@maplefoods.ca",
    type: "email"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    value: state.company,
    onChange: set('company'),
    placeholder: "Maple Foods Co."
  }), /*#__PURE__*/React.createElement("div", {
    className: "dl-field"
  }, /*#__PURE__*/React.createElement("label", null, "What would you like help with?"), /*#__PURE__*/React.createElement("select", {
    value: state.service,
    onChange: set('service')
  }, /*#__PURE__*/React.createElement("option", {
    value: "viz"
  }, "Data Visualization"), /*#__PURE__*/React.createElement("option", {
    value: "insight"
  }, "Data-Driven Insights & Consulting"), /*#__PURE__*/React.createElement("option", {
    value: "auto"
  }, "Process Automation"), /*#__PURE__*/React.createElement("option", {
    value: "web"
  }, "Website Performance Analysis"), /*#__PURE__*/React.createElement("option", {
    value: "compete"
  }, "Competitor Analysis"), /*#__PURE__*/React.createElement("option", {
    value: "train"
  }, "Power BI Training"))), /*#__PURE__*/React.createElement("div", {
    className: "dl-field"
  }, /*#__PURE__*/React.createElement("label", null, "Tell us about your project"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    value: state.message,
    onChange: set('message'),
    placeholder: "Briefly describe what you'd like to track and where the data lives today\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "dl-btn dl-btn--primary dl-btn--lg dl-btn--block"
  }, "Send message")))));
};
const Field = ({
  label,
  ...rest
}) => /*#__PURE__*/React.createElement("div", {
  className: "dl-field"
}, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("input", rest));
window.ContactForm = ContactForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
// Footer.jsx — dark footer
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "dl-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-footer__inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-footer__brand"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo-light.png",
  alt: "Dashboard Labs"
}), /*#__PURE__*/React.createElement("p", null, "Turn your data into insights \u2014 accessible, affordable business analytics consulting.")), /*#__PURE__*/React.createElement("div", {
  className: "dl-footer__cols"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("a", null, "Data Visualization"), /*#__PURE__*/React.createElement("a", null, "Insights & Consulting"), /*#__PURE__*/React.createElement("a", null, "Process Automation"), /*#__PURE__*/React.createElement("a", null, "Power BI Training")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("a", null, "About"), /*#__PURE__*/React.createElement("a", null, "Portfolio"), /*#__PURE__*/React.createElement("a", null, "Blog"), /*#__PURE__*/React.createElement("a", null, "Contact")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Follow"), /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.75c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32V9.67h-2.65c.04.75 0 8.67 0 8.67h2.65v-4.84c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.79v4.67h2.66z"
})), " LinkedIn"), /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "6.5",
  r: "1",
  fill: "currentColor",
  stroke: "none"
})), " Instagram"), /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement("i", {
  "data-lucide": "mail",
  style: {
    width: 14,
    height: 14
  }
}), " hello@dashboardlabs.ca")))), /*#__PURE__*/React.createElement("div", {
  className: "dl-footer__bar"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Dashboard Labs \xB7 Ontario, Canada"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
// Header.jsx — sticky top nav for the marketing site
const Header = ({
  active = 'home',
  onNav
}) => {
  const items = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'portfolio',
    label: 'Portfolio'
  }, {
    id: 'embedded',
    label: 'Power Embedded'
  }, {
    id: 'blog',
    label: 'Blog'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "dl-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dl-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dl-brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-dark.png",
    alt: "Dashboard Labs",
    className: "dl-brand__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dl-brand__word"
  }, "DASHBOARD", /*#__PURE__*/React.createElement("em", null, "LABS"))), /*#__PURE__*/React.createElement("nav", {
    className: "dl-nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: `#${it.id}`,
    className: `dl-nav__item ${active === it.id ? 'is-active' : ''}`,
    onClick: e => {
      e.preventDefault();
      onNav(it.id);
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "dl-header__cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dl-btn dl-btn--ghost",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('contact');
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 14,
      height: 14
    }
  }), "Contact"), /*#__PURE__*/React.createElement("a", {
    className: "dl-btn dl-btn--primary",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('contact');
    }
  }, "Get a quote"))));
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
// Hero.jsx — hero block used on Home
const Hero = ({
  onPrimary,
  onSecondary
}) => /*#__PURE__*/React.createElement("section", {
  className: "dl-hero"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-hero__copy"
}, /*#__PURE__*/React.createElement("span", {
  className: "dl-eyebrow"
}, "\u2014 Business analytics, made accessible"), /*#__PURE__*/React.createElement("h1", {
  className: "dl-hero__title"
}, "Turn your data into ", /*#__PURE__*/React.createElement("span", {
  className: "dl-grad"
}, "insights"), "."), /*#__PURE__*/React.createElement("p", {
  className: "dl-hero__lede"
}, "Dashboard Labs is a business analytics consulting firm that helps you analyze and interpret your data for better business decisions. Whether you need data visualization, reporting, or consulting projects, we have the expertise and tools to help you grow your business."), /*#__PURE__*/React.createElement("div", {
  className: "dl-hero__cta"
}, /*#__PURE__*/React.createElement("button", {
  className: "dl-btn dl-btn--primary dl-btn--lg",
  onClick: onPrimary
}, "See our services"), /*#__PURE__*/React.createElement("button", {
  className: "dl-btn dl-btn--ghost dl-btn--lg",
  onClick: onSecondary
}, "View portfolio", /*#__PURE__*/React.createElement("i", {
  "data-lucide": "arrow-right",
  style: {
    width: 16,
    height: 16
  }
}))), /*#__PURE__*/React.createElement("div", {
  className: "dl-hero__proof"
}, /*#__PURE__*/React.createElement("span", {
  className: "dl-chip"
}, /*#__PURE__*/React.createElement("i", {
  "data-lucide": "award",
  style: {
    width: 14,
    height: 14
  }
}), "Power BI Certified Partner"), /*#__PURE__*/React.createElement("span", {
  className: "dl-chip"
}, /*#__PURE__*/React.createElement("i", {
  "data-lucide": "map-pin",
  style: {
    width: 14,
    height: 14
  }
}), "Based in Canada \xB7 Serving North America"))), /*#__PURE__*/React.createElement("div", {
  className: "dl-hero__visual"
}, /*#__PURE__*/React.createElement(HeroDashboard, null)));
const HeroDashboard = () => /*#__PURE__*/React.createElement("div", {
  className: "dl-mockup"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-mockup__chrome"
}, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("div", {
  className: "dl-mockup__url"
}, "app.dashboardlabs.ca/grocery-pos")), /*#__PURE__*/React.createElement("div", {
  className: "dl-mockup__body"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-mockup__row"
}, /*#__PURE__*/React.createElement(MockKpi, {
  label: "Net sales",
  value: "$1.28M",
  delta: "+12.4%",
  up: true
}), /*#__PURE__*/React.createElement(MockKpi, {
  label: "Avg basket",
  value: "$42.10",
  delta: "\u22121.8%"
}), /*#__PURE__*/React.createElement(MockKpi, {
  label: "Loyalty",
  value: "8,412",
  delta: "+22.1%",
  up: true,
  inverse: true
})), /*#__PURE__*/React.createElement("div", {
  className: "dl-mockup__chart"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 460 130",
  preserveAspectRatio: "none",
  style: {
    width: '100%',
    height: '100%'
  }
}, [40, 55, 28, 72, 18].map((y, i) => /*#__PURE__*/React.createElement("rect", {
  key: i,
  x: 20 + i * 88,
  y: y,
  width: 50,
  height: 130 - y,
  rx: 4,
  fill: ['#4FB8D9', '#137FA3', '#C3F1DD', '#29C99B', '#1F9F66'][i]
})), /*#__PURE__*/React.createElement("polyline", {
  points: "45,55 133,70 221,42 309,86 397,28",
  fill: "none",
  stroke: "#0E2747",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), [[45, 55], [133, 70], [221, 42], [309, 86], [397, 28]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
  key: i,
  cx: x,
  cy: y,
  r: 3.5,
  fill: "white",
  stroke: "#0E2747",
  strokeWidth: 2
}))))));
const MockKpi = ({
  label,
  value,
  delta,
  up,
  inverse
}) => /*#__PURE__*/React.createElement("div", {
  className: `dl-kpi ${inverse ? 'dl-kpi--inverse' : ''}`
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-kpi__label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "dl-kpi__value"
}, value), /*#__PURE__*/React.createElement("div", {
  className: `dl-kpi__delta ${up ? 'is-up' : 'is-down'}`
}, /*#__PURE__*/React.createElement("i", {
  "data-lucide": up ? 'trending-up' : 'trending-down',
  style: {
    width: 12,
    height: 12
  }
}), delta));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PortfolioStrip.jsx
try { (() => {
// PortfolioStrip.jsx — three portfolio reports from the live site
const PORTFOLIO = [{
  id: 'pos',
  title: 'Grocery POS Overview Report',
  tag: 'Retail · CPG',
  body: 'A user-friendly Power BI report that ensures swift navigation for daily data needs. Dive deep into sales performance by category and subcategory — tailored to your data granularity.',
  accent: 'mint'
}, {
  id: 'car',
  title: 'Car Sales Report',
  tag: 'Automotive',
  body: 'Equips car-dealership stakeholders with actionable intelligence to optimize sales performance and budget allocation across regions and product lines.',
  accent: 'blue'
}, {
  id: 'loyal',
  title: 'The Loyalty Program Report',
  tag: 'Retail',
  body: 'Designed for small and medium retail chains to enhance day-to-day decision-making — track members, redemption, and incremental sales.',
  accent: 'green'
}];
const PortfolioStrip = () => /*#__PURE__*/React.createElement("section", {
  className: "dl-portfolio",
  id: "portfolio"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-section-head"
}, /*#__PURE__*/React.createElement("span", {
  className: "dl-eyebrow"
}, "\u2014 Selected work"), /*#__PURE__*/React.createElement("h2", {
  className: "dl-section-title"
}, "Our Portfolio"), /*#__PURE__*/React.createElement("p", {
  className: "dl-section-lede"
}, "A few of our most-loved dashboards. Each is a starting framework you can adapt to your own data.")), /*#__PURE__*/React.createElement("div", {
  className: "dl-portfolio__list"
}, PORTFOLIO.map((p, i) => /*#__PURE__*/React.createElement("article", {
  key: p.id,
  className: `dl-portfolio__item ${i % 2 ? 'is-flipped' : ''}`
}, /*#__PURE__*/React.createElement("div", {
  className: `dl-portfolio__visual dl-portfolio__visual--${p.accent}`
}, /*#__PURE__*/React.createElement(ReportThumb, {
  accent: p.accent
})), /*#__PURE__*/React.createElement("div", {
  className: "dl-portfolio__copy"
}, /*#__PURE__*/React.createElement("span", {
  className: "dl-tag"
}, p.tag), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.body), /*#__PURE__*/React.createElement("button", {
  className: "dl-btn dl-btn--ghost"
}, "Learn more ", /*#__PURE__*/React.createElement("i", {
  "data-lucide": "arrow-right",
  style: {
    width: 14,
    height: 14
  }
})))))));
const ReportThumb = ({
  accent
}) => {
  const palettes = {
    mint: ['#4FB8D9', '#137FA3', '#C3F1DD', '#29C99B', '#1F9F66'],
    blue: ['#137FA3', '#4FB8D9', '#1B3A6B', '#29C99B', '#0E2747'],
    green: ['#1F9F66', '#29C99B', '#8FE5C8', '#137FA3', '#0E2747']
  }[accent];
  return /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb__title"
  }, "Weekly summary"), /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb__pill"
  }, "+12.4%")), /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb__kpis"
  }, ['$1.28M', '$42.10', '8,412', '67%'].map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dl-thumb__kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb__kpi-label"
  }, "KPI ", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "dl-thumb__kpi-value"
  }, v)))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 100",
    preserveAspectRatio: "none",
    className: "dl-thumb__chart"
  }, palettes.map((c, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: 20 + i * 68,
    y: [55, 30, 70, 18, 40][i],
    width: 42,
    height: 100 - [55, 30, 70, 18, 40][i],
    rx: 3,
    fill: c
  }))));
};
window.PortfolioStrip = PortfolioStrip;
window.PORTFOLIO = PORTFOLIO;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PortfolioStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ServicesGrid.jsx — 6 service tiles, matching the live site IA
const SERVICES = [{
  id: 'viz',
  icon: 'bar-chart-3',
  title: 'Data Visualization',
  body: 'Transform complex databases into actionable insights and easy-to-use dashboards.'
}, {
  id: 'insight',
  icon: 'lightbulb',
  title: 'Data-Driven Insights & Consulting',
  body: 'Focused on Marketing and Sales, we analyze your database and answer the questions behind your decisions.'
}, {
  id: 'auto',
  icon: 'cpu',
  title: 'Process Automation',
  body: 'Save time and energy by automating simple and repetitive processes — focus on your core business.'
}, {
  id: 'web',
  icon: 'globe',
  title: 'Website Performance Analysis',
  body: 'Improve your website performance and visitor experience with concrete recommendations.'
}, {
  id: 'compete',
  icon: 'search',
  title: 'Online Competitor Analysis',
  body: 'Let us dive into the competition online to support and sharpen your decisions.'
}, {
  id: 'train',
  icon: 'graduation-cap',
  title: 'Power BI Training',
  body: 'Train your team to use Power BI so they can create reports and deep-dive analyses themselves.'
}];
const ServicesGrid = ({
  onSelect
}) => /*#__PURE__*/React.createElement("section", {
  className: "dl-services",
  id: "services"
}, /*#__PURE__*/React.createElement("div", {
  className: "dl-section-head"
}, /*#__PURE__*/React.createElement("span", {
  className: "dl-eyebrow"
}, "\u2014 What we do"), /*#__PURE__*/React.createElement("h2", {
  className: "dl-section-title"
}, "Our Services"), /*#__PURE__*/React.createElement("p", {
  className: "dl-section-lede"
}, "Learn how we can help you and your business access, visualize and read your data. If you need anything that is not covered here, reach out to us.")), /*#__PURE__*/React.createElement("div", {
  className: "dl-services__grid"
}, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
  key: s.id
}, s, {
  onClick: () => onSelect?.(s.id)
})))));
const ServiceCard = ({
  icon,
  title,
  body,
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  className: "dl-service-card",
  onClick: onClick
}, /*#__PURE__*/React.createElement("span", {
  className: "dl-service-card__stripe"
}), /*#__PURE__*/React.createElement("span", {
  className: "dl-service-card__icon"
}, /*#__PURE__*/React.createElement("i", {
  "data-lucide": icon,
  style: {
    width: 22,
    height: 22
  }
})), /*#__PURE__*/React.createElement("span", {
  className: "dl-service-card__title"
}, title), /*#__PURE__*/React.createElement("span", {
  className: "dl-service-card__body"
}, body), /*#__PURE__*/React.createElement("span", {
  className: "dl-service-card__arrow"
}, "Learn more ", /*#__PURE__*/React.createElement("i", {
  "data-lucide": "arrow-right",
  style: {
    width: 14,
    height: 14
  }
})));
window.ServicesGrid = ServicesGrid;
window.SERVICES = SERVICES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesGrid.jsx", error: String((e && e.message) || e) }); }

})();
