import { copy } from '../content';
import { siteConfig } from '../config/site.config';
import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';

export function Lofts() {
  const ref = useReveal();

  return (
    <section className="section section--dark">
      <div className="container lofts__grid" ref={ref}>
        <div>
          <span className="kicker">{copy.lofts.kicker}</span>
          <h2 className="section-title">{copy.lofts.title}</h2>
          <p className="section-sub">{copy.lofts.text}</p>

          <div className="lofts__cards">
            {copy.lofts.cards.map((card) => (
              <div className="loft-chip" key={card.title}>
                <span className="loft-chip__icon">
                  <Icon name={card.icon} />
                </span>
                {card.title}
              </div>
            ))}
          </div>

          <p className="precision-note">{siteConfig.precisionNotice}</p>
        </div>

        <div className="about__image">
          <img
            src={siteConfig.images.loft}
            alt="Sky Loft com arquitetura boutique e vista para a natureza"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
