// Header.jsx — sticky top nav for the marketing site
const Header = ({ active = 'home', onNav }) => {
  const items = [
    { id: 'home',      label: 'Home' },
    { id: 'services',  label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'embedded',  label: 'Power Embedded' },
    { id: 'blog',      label: 'Blog' },
  ];
  return (
    <header className="dl-header">
      <div className="dl-header__inner">
        <a className="dl-brand" href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}>
          <img src="../../assets/logo-dark.png" alt="Dashboard Labs" className="dl-brand__mark" />
          <span className="dl-brand__word">
            DASHBOARD
            <em>LABS</em>
          </span>
        </a>
        <nav className="dl-nav">
          {items.map(it => (
            <a key={it.id}
               href={`#${it.id}`}
               className={`dl-nav__item ${active === it.id ? 'is-active' : ''}`}
               onClick={(e) => { e.preventDefault(); onNav(it.id); }}>
              {it.label}
            </a>
          ))}
        </nav>
        <div className="dl-header__cta">
          <a className="dl-btn dl-btn--ghost" href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>
            <i data-lucide="phone" style={{ width: 14, height: 14 }} />
            Contact
          </a>
          <a className="dl-btn dl-btn--primary" href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
