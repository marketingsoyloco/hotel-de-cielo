import { copy } from '../content';
import { openWhatsapp } from '../utils/whatsapp';
import { goToContactForm } from '../utils/contactMode';
import { useReveal } from '../hooks/useReveal';

export function Agencies() {
  const ref = useReveal();

  return (
    <section id="agencias" className="section section--dark">
      <div className="container agency__wrap" ref={ref}>
        <div>
          <span className="kicker">{copy.agencies.kicker}</span>
          <h2 className="section-title">{copy.agencies.title}</h2>
          <p className="section-sub">{copy.agencies.text}</p>
          <p className="agency__quote">{copy.agencies.quote}</p>
        </div>

        <div className="agency__panel">
          <h3>Como funciona a parceria</h3>
          <ul className="agency__list">
            {copy.agencies.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
          <div className="agency__ctas">
            <button
              className="btn btn--primary"
              onClick={() => goToContactForm('agency', 'agency_section')}
            >
              {copy.agencies.cta}
            </button>
            <button
              className="btn btn--whatsapp"
              onClick={() => openWhatsapp('agency', 'agency_section')}
            >
              Falar com o comercial pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
