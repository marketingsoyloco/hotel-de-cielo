import { copy } from '../content';
import { siteConfig } from '../config/site.config';
import { useReveal } from '../hooks/useReveal';

export function About() {
  const ref = useReveal();

  return (
    <section id="hotel" className="section">
      <div className="container about__grid" ref={ref}>
        <div className="about__image">
          <img
            src={siteConfig.images.hotel}
            alt="Paisagem de campo e montanha no Valle de Uco, Mendoza"
            loading="lazy"
          />
          <p className="about__quote">“{copy.about.quote}”</p>
        </div>

        <div>
          <span className="kicker">{copy.about.kicker}</span>
          <h2 className="section-title">{copy.about.title}</h2>
          <p className="about__text">{copy.about.text}</p>

          <ul className="about__highlights">
            {copy.about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="about__lounge">
            <h4>{copy.about.loungeTitle}</h4>
            <p>{copy.about.loungeText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
