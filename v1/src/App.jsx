import React, { useState } from 'react';
import {
  agencyInterests,
  audienceBlocks,
  experiences,
  hero,
  hotelHighlights,
  leadHelpOptions,
  lofts,
  siteConfig,
  trustCards,
  units
} from './content/siteContent';
import { submitLead } from './utils/leads';
import { buildWhatsappUrl, handleWhatsappClick } from './utils/whatsapp';
import { trackEvent } from './utils/tracking';

const successMessage =
  'Obrigado! Recebemos sua solicitação. Nossa equipe comercial no Brasil entrará em contato para ajudar com sua experiência Hotel de Cielo.';

function WhatsappLink({ children, messageKey = 'consumer', source, className = 'button primary' }) {
  return (
    <a
      className={className}
      href={buildWhatsappUrl(messageKey)}
      target="_blank"
      rel="noreferrer"
      onClick={() => handleWhatsappClick(messageKey, source)}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Hotel de Cielo Brasil">
        <span className="brand-symbol" aria-hidden="true">
          <img src={siteConfig.logoPath} alt="" />
        </span>
        <span className="brand-copy">
          <strong>Hotel de Cielo</strong>
          <small>Representação comercial no Brasil</small>
        </span>
      </a>
      <nav className="nav" aria-label="Navegação principal">
        {siteConfig.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <WhatsappLink source="header" className="button compact">
        Solicitar cotação
      </WhatsappLink>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="hero"
      style={{ '--hero-image': `url(${siteConfig.images.hero})` }}
    >
      <div className="hero-content">
        <p className="eyebrow">Consultoria e reservas para brasileiros</p>
        <h1>{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <div className="badge-row">
          {hero.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <div className="hero-actions">
          <WhatsappLink source="hero_primary">Solicitar cotação pelo WhatsApp</WhatsappLink>
          <a
            className="button secondary"
            href="#agencias"
            onClick={() => trackEvent('agency_click', { source: 'hero_secondary' })}
          >
            Sou agência de viagens
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Resumo comercial">
        <span>Sky Hotel - Vale do Uco</span>
        <strong>Durma perto das montanhas. Acorde diante do Cordón del Plata.</strong>
        <p>Consultoria e reservas para brasileiros, com atendimento a cliente final e agências.</p>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, text }) {
  return (
    <div className="section-header">
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function TrustSection() {
  return (
    <section className="section band" aria-labelledby="trust-title">
      <SectionHeader
        kicker="Representação comercial no Brasil"
        title="Atendimento comercial no Brasil para facilitar sua reserva"
        text="Agora clientes brasileiros e agências de viagens contam com suporte comercial em português para conhecer, cotar e reservar experiências no Hotel de Cielo, em Mendoza, Argentina."
      />
      <div className="feature-grid">
        {trustCards.map((card) => (
          <article className="feature-card" key={card}>
            <span className="feature-icon" aria-hidden="true" />
            <h3>{card}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutHotel() {
  return (
    <section className="section split" id="hotel">
      <div className="split-copy">
        <SectionHeader
          kicker="Hotel de Cielo Mendoza / Valle de Uco"
          title="Um refúgio entre campo, montanha e céu"
          text="Hotel de Cielo está situado no Valle de Uco, em La Carrera, e combina campo e montanha com comodidades para uma estadia inspiradora. A experiência olha para o Cordón del Plata e aproxima o viajante do silêncio, da paisagem e das bodegas da região."
        />
        <p className="quote-line">
          Mendoza além do vinho: céu, silêncio, Cordilheira dos Andes e hospitalidade.
        </p>
        <div className="pill-grid">
          {hotelHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <figure className="image-feature">
        <img src={siteConfig.images.hotel} alt="Paisagem de montanha usada como placeholder premium" />
        <figcaption>{siteConfig.images.note}</figcaption>
      </figure>
    </section>
  );
}

function Experiences() {
  return (
    <section className="section" id="experiencias">
      <SectionHeader
        kicker="Experiências"
        title="Mais que hospedagem: uma viagem para sentir"
        text="Convidamos você a viver momentos cercados por um ambiente incomparável, entre a Cordilheira dos Andes, produtos locais, vinho e natureza."
      />
      <div className="experience-grid">
        {experiences.map((item) => (
          <article className="experience-card" key={item.title}>
            <img src={item.image} alt="" loading="lazy" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="center-actions">
        <WhatsappLink source="experiences" className="button primary">
          Quero montar minha experiência
        </WhatsappLink>
      </div>
    </section>
  );
}

function Lofts() {
  return (
    <section className="section split reverse" id="lofts">
      <figure className="image-feature">
        <img src={siteConfig.images.loft} alt="Interior de loft usado como placeholder premium" loading="lazy" />
        <figcaption>{siteConfig.precisionNotice}</figcaption>
      </figure>
      <div className="split-copy">
        <SectionHeader
          kicker="Sky Lofts"
          title="Sky Lofts: conforto com vista para a natureza"
          text="Os Sky Lofts foram pensados para quem deseja privacidade, conforto e uma experiência diferente de hospedagem em Mendoza. Com opções para 2 e 4 pessoas, são ideais para casais, famílias pequenas e viajantes que procuram algo especial."
        />
        <div className="loft-grid">
          {lofts.map((item) => (
            <article key={item}>
              <h3>{item}</h3>
              <p>Informações detalhadas podem ser ajustadas pela equipe comercial.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Units() {
  return (
    <section className="section band" id="unidades">
      <SectionHeader
        kicker="Unidades e expansão"
        title="Hotel de Cielo: uma marca em expansão"
        text="A unidade Mendoza / Valle de Uco está em operação. As demais unidades aparecem como projetos futuros e podem ser ativadas no conteúdo editável quando houver confirmação oficial."
      />
      <div className="unit-grid">
        {units.map((unit) => (
          <article className={`unit-card ${unit.state}`} key={unit.name}>
            <span>{unit.status}</span>
            <h3>{unit.name}</h3>
            <p>{unit.description}</p>
            {unit.state !== 'active' && <small>{siteConfig.precisionNotice}</small>}
          </article>
        ))}
      </div>
      <div className="center-actions">
        <WhatsappLink
          messageKey="futureUnits"
          source="future_units"
          className="button secondary dark"
        >
          Receber novidades das próximas unidades
        </WhatsappLink>
      </div>
    </section>
  );
}

function ConsumerSection() {
  return (
    <section className="section" id="cliente-final">
      <SectionHeader
        kicker="Cliente final"
        title="Para quem é o Hotel de Cielo?"
        text="Para brasileiros que desejam viver a Argentina de um jeito mais exclusivo."
      />
      <div className="audience-grid">
        {audienceBlocks.map((item) => (
          <article key={item}>
            <span aria-hidden="true" />
            <h3>{item}</h3>
          </article>
        ))}
      </div>
      <div className="center-actions">
        <a
          href="#contato"
          className="button primary"
          onClick={() => trackEvent('consumer_click', { source: 'consumer_section' })}
        >
          Quero uma cotação personalizada
        </a>
      </div>
    </section>
  );
}

function Agencies() {
  return (
    <section className="section agency-section" id="agencias">
      <div className="split-copy">
        <SectionHeader
          kicker="B2B Brasil"
          title="Área para agências de viagens"
          text="Agências brasileiras podem contar com atendimento comercial dedicado para consultar disponibilidade, solicitar tarifas, montar roteiros personalizados e vender Hotel de Cielo como parte de experiências na Argentina."
        />
        <p className="quote-line">
          Para agências que desejam oferecer uma experiência diferenciada em Mendoza.
        </p>
        <div className="hero-actions">
          <a
            className="button primary"
            href="#contato"
            onClick={() => trackEvent('agency_click', { source: 'agency_section_form_cta' })}
          >
            Solicitar contato comercial
          </a>
          <WhatsappLink messageKey="agency" source="agency_section" className="button secondary">
            Falar com atendimento B2B
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, type = 'text', required = false, value, onChange, children }) {
  return (
    <label className="form-field">
      <span>
        {label}
        {required && <em>*</em>}
      </span>
      {children || (
        <input name={name} type={type} required={required} value={value} onChange={onChange} />
      )}
    </label>
  );
}

function LeadForm() {
  const [form, setForm] = useState({
    profile: 'traveler',
    helpType: leadHelpOptions[0],
    name: '',
    whatsapp: '',
    email: '',
    cityState: '',
    travelDate: '',
    people: '',
    agencyName: '',
    cnpj: '',
    interest: agencyInterests[0],
    message: ''
  });
  const [status, setStatus] = useState('');

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function setProfile(profile) {
    setForm((current) => ({
      ...current,
      profile,
      helpType: profile === 'agency' ? 'Sou agência de viagens' : current.helpType
    }));
    trackEvent(profile === 'agency' ? 'agency_click' : 'consumer_click', {
      source: 'lead_form_profile'
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      ...form,
      formType: form.profile === 'agency' ? 'agency_lead' : 'traveler_lead',
      profileLabel: form.profile === 'agency' ? 'Agência de viagens' : 'Viajante'
    };

    await submitLead(payload);
    if (form.helpType === 'Quero informações sobre futuras unidades') {
      trackEvent('future_unit_interest', { source: 'main_form' });
    }
    setStatus(successMessage);
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="profile-toggle" aria-label="Escolha seu perfil">
        <button
          className={form.profile === 'traveler' ? 'active' : ''}
          type="button"
          onClick={() => setProfile('traveler')}
        >
          Sou viajante
        </button>
        <button
          className={form.profile === 'agency' ? 'active' : ''}
          type="button"
          onClick={() => setProfile('agency')}
        >
          Sou agência
        </button>
      </div>

      {form.profile === 'traveler' ? (
        <FormField label="Como podemos ajudar?" name="helpType" required>
          <select name="helpType" required value={form.helpType} onChange={updateField}>
            {leadHelpOptions
              .filter((option) => option !== 'Sou agência de viagens')
              .map((option) => (
                <option key={option}>{option}</option>
              ))}
          </select>
        </FormField>
      ) : (
        <FormField label="Interesse comercial" name="interest" required>
          <select name="interest" required value={form.interest} onChange={updateField}>
            {agencyInterests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </FormField>
      )}

      <div className="form-grid">
        <FormField
          label={form.profile === 'agency' ? 'Nome do consultor' : 'Nome'}
          name="name"
          required
          value={form.name}
          onChange={updateField}
        />
        <FormField
          label="WhatsApp"
          name="whatsapp"
          required
          value={form.whatsapp}
          onChange={updateField}
        />
        <FormField
          label="E-mail"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={updateField}
        />
        <FormField
          label={form.profile === 'agency' ? 'Cidade/Estado da agência' : 'Cidade/Estado'}
          name="cityState"
          value={form.cityState}
          onChange={updateField}
        />
        {form.profile === 'traveler' ? (
          <>
            <FormField
              label="Data prevista da viagem"
              name="travelDate"
              type="date"
              value={form.travelDate}
              onChange={updateField}
            />
            <FormField
              label="Número de pessoas"
              name="people"
              type="number"
              value={form.people}
              onChange={updateField}
            />
          </>
        ) : (
          <>
            <FormField
              label="Nome da agência"
              name="agencyName"
              required
              value={form.agencyName}
              onChange={updateField}
            />
            <FormField
              label="CNPJ, opcional"
              name="cnpj"
              value={form.cnpj}
              onChange={updateField}
            />
          </>
        )}
      </div>
      <FormField label="Mensagem" name="message">
        <textarea name="message" rows="4" value={form.message} onChange={updateField} />
      </FormField>
      <button className="button primary" type="submit">
        {form.profile === 'agency' ? 'Solicitar contato comercial' : 'Enviar solicitação'}
      </button>
      {status && <p className="success-message">{status}</p>}
    </form>
  );
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <SectionHeader
        kicker="Contato"
        title="Solicite sua cotação ou fale com nossa equipe comercial"
        text="Atendimento para cliente final e agências de viagens. A partir da sua solicitação, a equipe comercial no Brasil orienta os próximos passos."
      />
      <LeadForm />
    </section>
  );
}

function PrecisionNotice() {
  return (
    <section className="section notice-section" aria-label="Aviso de precisão">
      <h2>Informações sempre atualizadas pela equipe comercial</h2>
      <p>
        Não exibimos avaliações, preços, disponibilidade, quantidade exata de quartos, políticas
        de cancelamento ou datas de abertura de futuras unidades sem confirmação cadastrada.
        {` ${siteConfig.precisionNotice}`}
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Hotel de Cielo Brasil</strong>
        <p>Representação comercial no Brasil. Consultoria e reservas para brasileiros.</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</a>
        <a href={`mailto:${siteConfig.contacts.commercialEmail}`}>
          {siteConfig.contacts.commercialEmail}
        </a>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <WhatsappLink source="floating_button" className="floating-whatsapp">
      <span className="whatsapp-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false">
          <path d="M16.02 4.2A11.72 11.72 0 0 0 5.94 21.9L4.4 27.8l6.04-1.5A11.75 11.75 0 1 0 16.02 4.2Zm0 2.2a9.55 9.55 0 0 1 8.08 14.63 9.57 9.57 0 0 1-12.98 3.03l-.43-.26-3.2.8.82-3.12-.29-.46A9.52 9.52 0 0 1 16.02 6.4Zm-3.27 4.54c-.22-.52-.45-.53-.66-.54h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.35 5.18 4.57 2.56 1.02 3.08.82 3.64.77.56-.05 1.8-.73 2.06-1.44.25-.71.25-1.32.18-1.45-.08-.12-.28-.2-.58-.35-.3-.15-1.8-.89-2.08-.99-.28-.1-.49-.15-.7.15-.2.3-.8.99-.98 1.19-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.47.13-.62.14-.14.3-.36.45-.54.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.6-.93-2.19Z" />
        </svg>
      </span>
      <span className="whatsapp-label">Falar no WhatsApp</span>
    </WhatsappLink>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <AboutHotel />
        <Experiences />
        <Lofts />
        <Units />
        <ConsumerSection />
        <Agencies />
        <ContactSection />
        <PrecisionNotice />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
