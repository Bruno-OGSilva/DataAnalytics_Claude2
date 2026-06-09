// ContactForm.jsx — Contact page
const ContactForm = ({ onSubmit }) => {
  const [state, setState] = React.useState({
    name: '', email: '', company: '', message: '', service: 'viz', sent: false,
  });
  const set = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));
  const send = (e) => { e.preventDefault(); setState(s => ({ ...s, sent: true })); onSubmit?.(state); };

  return (
    <section className="dl-contact" id="contact">
      <div className="dl-contact__inner">
        <div className="dl-contact__copy">
          <span className="dl-eyebrow">— Reach out</span>
          <h2 className="dl-section-title">Let's talk about your data.</h2>
          <p>
            Tell us a bit about your project — the rough shape of what you'd like to measure, where the
            data lives today, and any deadlines you're working against. We'll respond within one business
            day with next steps.
          </p>
          <ul className="dl-contact__list">
            <li><i data-lucide="mail" style={{ width: 18, height: 18 }} /> hello@dashboardlabs.ca</li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.67H5.67v8.67h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.75c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.32V9.67h-2.65c.04.75 0 8.67 0 8.67h2.65v-4.84c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.79v4.67h2.66z"/>
              </svg> /company/dashboardlabs
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg> @dashboard_labs
            </li>
            <li><i data-lucide="map-pin" style={{ width: 18, height: 18 }} /> Ontario, Canada · serving North America</li>
          </ul>
        </div>
        <form className="dl-contact__form" onSubmit={send}>
          {state.sent ? (
            <div className="dl-contact__sent">
              <i data-lucide="check-circle" style={{ width: 32, height: 32, color: 'var(--dl-green-600)' }} />
              <h3>Thanks {state.name.split(' ')[0] || 'there'}, we'll be in touch.</h3>
              <p>We try to respond within one business day.</p>
            </div>
          ) : (
            <>
              <div className="dl-row">
                <Field label="Full name"  value={state.name}    onChange={set('name')} placeholder="Sara Khoury"/>
                <Field label="Email"      value={state.email}   onChange={set('email')} placeholder="sara@maplefoods.ca" type="email"/>
              </div>
              <Field label="Company"      value={state.company} onChange={set('company')} placeholder="Maple Foods Co."/>
              <div className="dl-field">
                <label>What would you like help with?</label>
                <select value={state.service} onChange={set('service')}>
                  <option value="viz">Data Visualization</option>
                  <option value="insight">Data-Driven Insights &amp; Consulting</option>
                  <option value="auto">Process Automation</option>
                  <option value="web">Website Performance Analysis</option>
                  <option value="compete">Competitor Analysis</option>
                  <option value="train">Power BI Training</option>
                </select>
              </div>
              <div className="dl-field">
                <label>Tell us about your project</label>
                <textarea rows="4" value={state.message} onChange={set('message')}
                          placeholder="Briefly describe what you'd like to track and where the data lives today…" />
              </div>
              <button type="submit" className="dl-btn dl-btn--primary dl-btn--lg dl-btn--block">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, ...rest }) => (
  <div className="dl-field">
    <label>{label}</label>
    <input {...rest} />
  </div>
);

window.ContactForm = ContactForm;
