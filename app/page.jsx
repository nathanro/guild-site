import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ToolsStack from '../components/ToolsStack';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Header />
      <Hero />
      <Features />
      <ToolsStack />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
