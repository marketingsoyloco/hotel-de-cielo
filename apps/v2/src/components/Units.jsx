import { useState } from 'react';
import { copy } from '../content';
import { siteConfig, UNIT_STATUS_LABELS } from '../config/site.config';
import { SectionHeader } from './SectionHeader';
import { submitLead } from '../utils/leads';
import { useReveal } from '../hooks/useReveal';

export function Units() {
  const ref = useReveal();
  const visibleUnits = siteConfig.units.filter((unit) => unit.enabled);

  return (
    <section id="unidades" className="section">
      <div className="container" ref={ref}>
        <SectionHeader
          kicker={copy.units.kicker}
          title={copy.units.title}
          subtitle={copy.units.subtitle}
          center
        />

        <div className="units-grid">
          {visibleUnits.map((unit) => (
            <article
              key={unit.id}
              className={`unit-card${unit.status !== 'active' ? ' unit-card--soon' : ''}`}
            >
              <div className="unit-card__media">
                <img src={unit.image} alt={unit.name} loading="lazy" />
                <span className={`unit-card__status unit-card__status--${unit.status}`}>
                  {UNIT_STATUS_LABELS[unit.status] || unit.status}
                </span>
              </div>
              <div className="unit-card__body">
                <span className="unit-card__location">{unit.location}</span>
                <h3>{unit.name}</h3>
                <p>{unit.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="precision-note precision-note--light center" style={{ marginTop: '1.4rem' }}>
          {siteConfig.precisionNotice}
        </p>

        <NewsletterBox />
      </div>
    </section>
  );
}

function NewsletterBox() {
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [form, setForm] = useState({ name: '', email: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    try {
      await submitLead('newsletter', form);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="newsletter" id="novidades">
      <h3>{copy.units.newsletterTitle}</h3>
      <p>{copy.units.newsletterText}</p>

      {status === 'done' ? (
        <div className="form-success" style={{ maxWidth: 620, margin: '1.5rem auto 0' }}>
          {copy.units.newsletterSuccess}
        </div>
      ) : (
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-label="Seu nome"
            />
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-label="Seu melhor e-mail"
            />
          </div>
          <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : copy.units.newsletterButton}
          </button>
          {status === 'error' && (
            <div className="form-error" style={{ gridColumn: '1 / -1' }}>
              {copy.leadForm.error}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
