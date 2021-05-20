import Hero from "../hero/Hero"
import About from "../about/About"
import Share from "../share/Share"
import Offer from "../offer/Offer"
import Info from "../info/Info"
import CTA from "../cta/CTA"
import Contact from "../contact/Contact"
import FooterNav from "../footerNav/FooterNav"
import Footer from "../footer/Footer"

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Share />
      <Offer />
      <Info />
      <CTA type="grow" image="/assets/grow.png" header="GROWING PRACTICES" text="Learn more about how we grow our vegetables and what we put into the soil."/>
      <Contact />
      <FooterNav />
      <Footer />
    </section>
  );
}

export default Home;
