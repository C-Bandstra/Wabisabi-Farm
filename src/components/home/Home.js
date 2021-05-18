import Hero from "../hero/Hero"
import About from "../about/About"
import Share from "../share/Share"
import Offer from "../offer/Offer"
import Info from "../info/Info"
import CTA from "../cta/CTA"
import Contact from "../contact/Contact"

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Share />
      <Offer />
      <Info />
      <CTA />
      <Contact />
    </section>
  );
}

export default Home;
