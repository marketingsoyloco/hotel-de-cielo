import { copy } from './content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { Lofts } from './components/Lofts';
import { Units } from './components/Units';
import { Audience } from './components/Audience';
import { Agencies } from './components/Agencies';
import { ContactForms } from './components/ContactForms';
import { Testimonials } from './components/Testimonials';
import { QuoteBand } from './components/QuoteBand';
import { Footer } from './components/Footer';
import { WhatsappFloat } from './components/WhatsappFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <About />
        <Experiences />
        <Lofts />
        <Units />
        <QuoteBand>{copy.audience.subtitle}</QuoteBand>
        <Audience />
        <Agencies />
        <Testimonials />
        <ContactForms />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
