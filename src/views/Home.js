import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Share from "../components/share/Share"
import Offer from "../components/offer/Offer"
import Info from "../components/info/Info"
import CTA from "../components/cta/CTA"
import Contact from "../components/contact/Contact"
import FooterNav from "../components/footerNav/FooterNav"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Share />
      <Offer />
      <Info />
      <CTA type="water" image="/assets/water.png" header="GROWING PRACTICES" text="Learn more about how we grow our vegetables and what we put into the soil." route="/GrowingPractices"/>
      <Contact />
      <FooterNav />
      <Footer />
    </section>
  );
}

export default Home;
