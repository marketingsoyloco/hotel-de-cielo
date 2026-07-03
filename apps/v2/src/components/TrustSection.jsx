import { copy } from '../content';
import { SectionHeader } from './SectionHeader';
import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';

export function TrustSection() {
  const ref = useReveal();

  return (
    <section className="section section--sand">
      <div className="container" ref={ref}>
        <SectionHeader title={copy.trust.title} subtitle={copy.trust.text} center />
        <div className="cards-grid">
          {copy.trust.cards.map((card) => (
            <article className="info-card info-card--dark" key={card.title}>
              <div className="info-card__icon">
                <Icon name={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
