// Footer.jsx — dark footer
const Footer = () => (
  <footer className="dl-footer">
    <div className="dl-footer__inner">
      <div className="dl-footer__brand">
        <img src="../../assets/logo-light.png" alt="Dashboard Labs" />
        <p>Turn your data into insights — accessible, affordable business analytics consulting.</p>
      </div>
      <div className="dl-footer__cols">
        <div>
          <h4>Services</h4>
          <a>Data Visualization</a>
          <a>Insights &amp; Consulting</a>
          <a>Process Automation</a>
          <a>Power BI Training</a>
        </div>
        <div>
          <h4>Company</h4>
          <a>About</a>
          <a>Portfolio</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
        <div>
          <h4>Follow</h4>
          <a>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.75c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32V9.67h-2.65c.04.75 0 8.67 0 8.67h2.65v-4.84c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.79v4.67h2.66z"/>
            </svg> LinkedIn
          </a>
          <a>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg> Instagram
          </a>
          <a><i data-lucide="mail" style={{ width: 14, height: 14 }} /> hello@dashboardlabs.ca</a>
        </div>
      </div>
    </div>
    <div className="dl-footer__bar">
      <span>© 2026 Dashboard Labs · Ontario, Canada</span>
      <span>Privacy · Terms</span>
    </div>
  </footer>
);
window.Footer = Footer;
