import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}
