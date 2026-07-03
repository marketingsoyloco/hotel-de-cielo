import { copy } from '../content';
import { siteConfig } from '../config/site.config';
import { openWhatsapp } from '../utils/whatsapp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img
              src={siteConfig.images.logoLight}
              alt="Hotel de Cielo"
              className="footer__logo"
              loading="lazy"
            />
            <p className="footer__tagline">“{copy.footer.tagline}”</p>
            <p>{copy.footer.representation}</p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              {copy.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsapp('consumer', 'footer');
                  }}
                >
                  WhatsApp — cotações e reservas
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contacts.commercialEmail}`}>
                  {siteConfig.contacts.commercialEmail}
                </a>
              </li>
              <li>{copy.footer.unitLine}</li>
              <li>
                <a href={siteConfig.official.instagram} target="_blank" rel="noreferrer">
                  Instagram @hoteldecielo
                </a>
              </li>
              <li>
                <a href={siteConfig.official.site} target="_blank" rel="noreferrer">
                  Site oficial do hotel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {siteConfig.brand}. {copy.footer.rights}
          </span>
          <span>{siteConfig.precisionNotice}</span>
        </div>
      </div>
    </footer>
  );
}
