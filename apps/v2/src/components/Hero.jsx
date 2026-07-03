import { copy } from '../content';
import { siteConfig } from '../config/site.config';
import { openWhatsapp } from '../utils/whatsapp';
import { trackEvent } from '../utils/tracking';

export function Hero() {
  return (
    <section
      id="topo"
      className="hero"
      style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
    >
      <div className="container">
        <div className="hero__content">
          <span className="hero__kicker">{copy.hero.kicker}</span>
          <h1 className="hero__title">{copy.hero.title}</h1>
          <p className="hero__subtitle">{copy.hero.subtitle}</p>

          <ul className="hero__badges">
            {copy.hero.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>

          <div className="hero__ctas">
            <button
              className="btn btn--whatsapp"
              onClick={() => openWhatsapp('consumer', 'hero')}
            >
              {copy.hero.ctaPrimary}
            </button>
            <a
              href="#agencias"
              className="btn btn--outline"
              onClick={() => trackEvent('agency_click', { source: 'hero' })}
            >
              {copy.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
