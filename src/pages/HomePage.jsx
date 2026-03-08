import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import WhoWeServe from '../components/sections/WhoWeServe';
import Services from '../components/sections/Services';
import Quote from '../components/sections/Quote';
import Impact from '../components/sections/Impact';
import Founder from '../components/sections/Founder';
import Donate from '../components/sections/Donate';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhoWeServe />
      <Services />
      <Quote />
      <Impact />
      <Founder />
      <Donate />
      <FAQ />
      <ContactCTA />
    </>
  );
}
