import { siteConfig } from '../config/site.config';
import { SectionHeader } from './SectionHeader';

// Só renderiza quando houver depoimentos reais cadastrados no site.config.js —
// nunca exibe avaliações inventadas.
export function Testimonials() {
  if (!siteConfig.testimonials.length) return null;

  return (
    <section className="section section--sand">
      <div className="container">
        <SectionHeader kicker="Depoimentos" title="Quem já viveu a experiência" center />
        <div className="cards-grid">
          {siteConfig.testimonials.map((t) => (
            <blockquote className="info-card" key={t.author}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.8rem' }}>“{t.quote}”</p>
              <footer>
                <strong>{t.author}</strong>
                {t.origin && <span style={{ color: 'var(--gray)' }}> · {t.origin}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
