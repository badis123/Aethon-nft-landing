import './index.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Collection from './components/Collection';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQ from './components/FAQ';
import CTAStrip from './components/CTAStrip';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Collection />
      <Roadmap />
      <Team />
      <FAQ />
      <CTAStrip />
      <Footer />
    </>
  );
}
