import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Share from "../components/share/Share"
import Offer from "../components/offer/Offer"
import Info from "../components/info/Info"
import CTA from "../components/cta/CTA"
import Contact from "../components/contact/Contact"
import FooterNav from "../components/footerNav/FooterNav"
import Footer from "../components/footer/Footer"
import Practices from '../components/practices/Practices'

const Home = () => {
  const mobileView = () => {

  }

  return (
    <section className="home">
      <Hero />
      <About />
      <Share />
      <Offer />
      <Info />
      <CTA imgType="plant" cntType="grow-cnt" image="/assets/grow-light.png" header="FAQ's" text="Have questions about how the food share works, or what we choose to feed our plants?" route="/FAQs" ctaType="plant-cta" color="light" arrow="reverse"/>
      <Practices />
      <CTA imgType="produce" cntType="produce-cnt" image="/assets/availability.png" header="PRODUCE AVAILABILITY" text="Check out our variety of Fruits, Vegetables, and Garden Greens!" route="/Availability" ctaType="availability-cta" color="regular" arrow="normal"/>
      <Contact />
      <FooterNav />
      <Footer />
    </section>
  );
}

export default Home;
