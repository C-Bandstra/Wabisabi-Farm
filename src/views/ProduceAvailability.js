import Header from "../components/header/Header"
import Availability from '../components/availability/Availability'
import CTA from "../components/cta/CTA"
import FooterNav from "../components/footerNav/FooterNav"
import Footer from "../components/footer/Footer"

const ProduceAvailability = () => {
  return (
    <section className="produce-availability">
      <Header type="header-2" title="Produce Availability"/>
      <Availability />
      <CTA imgType="plant" cntType="plant-cnt" image="/assets/plant.png" header="FAQ's" text="Have questions about how the food share works, or what we choose to feed our plants?" route="/FAQs" ctaType="plant-cta" color="light" arrow="reverse"/>
      <FooterNav />
      <Footer />
    </section>
  );
}

export default ProduceAvailability;
