import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import WhoWeServe from './components/sections/WhoWeServe';
import Services from './components/sections/Services';
import Quote from './components/sections/Quote';
import Impact from './components/sections/Impact';
import Founder from './components/sections/Founder';
import FAQ from './components/sections/FAQ';
import ContactCTA from './components/sections/ContactCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhoWeServe />
        <Services />
        <Quote />
        <Impact />
        <Founder />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
