import { copy } from '../content';
import { siteConfig } from '../config/site.config';
import { SectionHeader } from './SectionHeader';
import { openWhatsapp } from '../utils/whatsapp';
import { useReveal } from '../hooks/useReveal';

export function Experiences() {
  const ref = useReveal();

  return (
    <section id="experiencias" className="section section--sand">
      <div className="container" ref={ref}>
        <SectionHeader
          kicker={copy.experiences.kicker}
          title={copy.experiences.title}
          subtitle={copy.experiences.subtitle}
          center
        />

        <div className="exp-grid">
          {copy.experiences.items.map((item) => (
            <article className="exp-card" key={item.title}>
              <img
                src={siteConfig.images[item.imageKey]}
                alt={item.title}
                loading="lazy"
              />
              <div className="exp-card__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="exp-official-note">{copy.experiences.officialNote}</p>

        <div className="center" style={{ marginTop: '2rem' }}>
          <button
            className="btn btn--primary"
            onClick={() => openWhatsapp('consumer', 'experiences')}
          >
            {copy.experiences.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
