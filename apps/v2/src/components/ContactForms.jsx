import { useEffect, useState } from 'react';
import { copy } from '../content';
import { SectionHeader } from './SectionHeader';
import { submitLead } from '../utils/leads';
import { trackEvent } from '../utils/tracking';
import { CONTACT_MODE_EVENT } from '../utils/contactMode';

// Formulário único de captação: o seletor "Quero viajar" / "Sou agência de
// viagens" troca os campos exibidos, sem pedir informação repetida.
export function ContactForms() {
  const [mode, setMode] = useState('consumer'); // 'consumer' | 'agency'

  useEffect(() => {
    const onModeChange = (event) => setMode(event.detail);
    window.addEventListener(CONTACT_MODE_EVENT, onModeChange);
    return () => window.removeEventListener(CONTACT_MODE_EVENT, onModeChange);
  }, []);

  function selectMode(next) {
    setMode(next);
    trackEvent(next === 'agency' ? 'agency_click' : 'consumer_click', {
      source: 'contact_toggle'
    });
  }

  return (
    <section id="contato" className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <SectionHeader
          kicker={copy.leadForm.kicker}
          title={copy.leadForm.title}
          subtitle={copy.leadForm.subtitle}
          center
        />

        <div className="mode-toggle" role="tablist" aria-label="Tipo de contato">
          <button
            role="tab"
            aria-selected={mode === 'consumer'}
            className={`mode-toggle__btn${mode === 'consumer' ? ' mode-toggle__btn--on' : ''}`}
            onClick={() => selectMode('consumer')}
          >
            {copy.leadForm.modeConsumer}
          </button>
          <button
            role="tab"
            aria-selected={mode === 'agency'}
            className={`mode-toggle__btn${mode === 'agency' ? ' mode-toggle__btn--on' : ''}`}
            onClick={() => selectMode('agency')}
          >
            {copy.leadForm.modeAgency}
          </button>
        </div>

        {mode === 'consumer' ? <ConsumerForm /> : <AgencyForm />}
      </div>
    </section>
  );
}

function ConsumerForm() {
  const [form, setForm] = useState({
    helpOption: '',
    name: '',
    whatsapp: '',
    email: '',
    travelDate: '',
    people: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const labels = copy.leadForm.fields;
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    try {
      await submitLead('lead', { ...form, profile: 'Cliente final' });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="form-success" style={{ marginTop: '2rem' }}>
        {copy.leadForm.success}
      </div>
    );
  }

  return (
    <form className="form-grid form-grid--2" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
      <div className="field field--full">
        <label htmlFor="lead-help">{copy.leadForm.helpLabel}</label>
        <select id="lead-help" required value={form.helpOption} onChange={set('helpOption')}>
          <option value="" disabled>
            Selecione uma opção…
          </option>
          {copy.leadForm.helpOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="lead-name">{labels.name}</label>
        <input id="lead-name" required value={form.name} onChange={set('name')} />
      </div>
      <div className="field">
        <label htmlFor="lead-whats">{labels.whatsapp}</label>
        <input
          id="lead-whats"
          type="tel"
          required
          placeholder="(11) 99999-9999"
          value={form.whatsapp}
          onChange={set('whatsapp')}
        />
      </div>
      <div className="field">
        <label htmlFor="lead-email">{labels.email}</label>
        <input id="lead-email" type="email" required value={form.email} onChange={set('email')} />
      </div>
      <div className="field">
        <label htmlFor="lead-date">{labels.travelDate}</label>
        <input id="lead-date" type="month" value={form.travelDate} onChange={set('travelDate')} />
      </div>
      <div className="field">
        <label htmlFor="lead-people">{labels.people}</label>
        <input id="lead-people" type="number" min="1" value={form.people} onChange={set('people')} />
      </div>
      <div className="field">
        <label htmlFor="lead-message">{labels.message}</label>
        <input id="lead-message" value={form.message} onChange={set('message')} />
      </div>

      {status === 'error' && <div className="form-error field--full">{copy.leadForm.error}</div>}

      <div className="field--full">
        <button className="btn btn--primary btn--block" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : copy.leadForm.submit}
        </button>
      </div>
    </form>
  );
}

function AgencyForm() {
  const [form, setForm] = useState({
    agencyName: '',
    consultantName: '',
    cityState: '',
    whatsapp: '',
    email: '',
    cnpj: '',
    interests: [],
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const labels = copy.agencies.form;
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function toggleInterest(interest) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    try {
      await submitLead('agency', { ...form, interests: form.interests.join(', ') });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="form-success" style={{ marginTop: '2rem' }}>
        {copy.leadForm.success}
      </div>
    );
  }

  return (
    <form className="form-grid form-grid--2" style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="ag-name">{labels.agencyName}</label>
        <input id="ag-name" required value={form.agencyName} onChange={set('agencyName')} />
      </div>
      <div className="field">
        <label htmlFor="ag-consultant">{labels.consultantName}</label>
        <input
          id="ag-consultant"
          required
          value={form.consultantName}
          onChange={set('consultantName')}
        />
      </div>
      <div className="field">
        <label htmlFor="ag-city">{labels.cityState}</label>
        <input id="ag-city" required value={form.cityState} onChange={set('cityState')} />
      </div>
      <div className="field">
        <label htmlFor="ag-whats">{labels.whatsapp}</label>
        <input
          id="ag-whats"
          type="tel"
          required
          placeholder="(11) 99999-9999"
          value={form.whatsapp}
          onChange={set('whatsapp')}
        />
      </div>
      <div className="field">
        <label htmlFor="ag-email">{labels.email}</label>
        <input id="ag-email" type="email" required value={form.email} onChange={set('email')} />
      </div>
      <div className="field">
        <label htmlFor="ag-cnpj">{labels.cnpj}</label>
        <input id="ag-cnpj" value={form.cnpj} onChange={set('cnpj')} />
      </div>

      <div className="field field--full">
        <label>{labels.interestLabel}</label>
        <div className="check-row">
          {copy.agencies.interests.map((interest) => {
            const checked = form.interests.includes(interest);
            return (
              <label key={interest} className={`check-pill${checked ? ' check-pill--checked' : ''}`}>
                <input type="checkbox" checked={checked} onChange={() => toggleInterest(interest)} />
                {interest}
              </label>
            );
          })}
        </div>
      </div>

      <div className="field field--full">
        <label htmlFor="ag-message">{labels.message}</label>
        <textarea id="ag-message" value={form.message} onChange={set('message')} />
      </div>

      {status === 'error' && <div className="form-error field--full">{copy.leadForm.error}</div>}

      <div className="field--full">
        <button className="btn btn--primary btn--block" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : labels.submit}
        </button>
      </div>
    </form>
  );
}
