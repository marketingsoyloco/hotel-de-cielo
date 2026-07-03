import { useEffect, useState } from 'react';
import { copy } from '../content';
import { siteConfig } from '../config/site.config';
import { openWhatsapp } from '../utils/whatsapp';

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${solid || open ? ' navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#topo" className="navbar__brand">
          <img src={siteConfig.images.logoLight} alt="Hotel de Cielo" className="navbar__logo" />
          <span className="navbar__representation">
            <span>Representação Comercial</span>
            <strong>Brasil</strong>
          </span>
        </a>

        <ul className="navbar__links">
          {copy.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="btn btn--primary navbar__cta"
          onClick={() => openWhatsapp('consumer', 'navbar')}
        >
          {copy.nav.ctaLabel}
        </button>

        <button
          className="navbar__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          <div className="container">
            <ul>
              {copy.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn--primary btn--block"
              onClick={() => {
                setOpen(false);
                openWhatsapp('consumer', 'navbar_mobile');
              }}
            >
              {copy.nav.ctaLabel}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
