import { copy } from '../content';
import { SectionHeader } from './SectionHeader';
import { Icon } from './Icon';
import { openWhatsapp } from '../utils/whatsapp';
import { useReveal } from '../hooks/useReveal';

export function Audience() {
  const ref = useReveal();

  return (
    <section id="cliente-final" className="section section--sand">
      <div className="container" ref={ref}>
        <SectionHeader
          kicker={copy.audience.kicker}
          title={copy.audience.title}
          subtitle={copy.audience.subtitle}
          center
        />

        <div className="cards-grid">
          {copy.audience.blocks.map((block) => (
            <article className="info-card info-card--dark" key={block.title}>
              <div className="info-card__icon">
                <Icon name={block.icon} />
              </div>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>

        <div className="center" style={{ marginTop: '2.4rem' }}>
          <button
            className="btn btn--whatsapp"
            onClick={() => openWhatsapp('consumer', 'audience')}
          >
            {copy.audience.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
