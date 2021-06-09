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
      <CTA imgType="water" image="/assets/water.png" header="GROWING PRACTICES" text="Learn more about how we grow our vegetables and what we put into the soil." route="/GrowingPractices" arrow="1"/>
      <FooterNav />
      <Footer />
    </section>
  );
}

export default ProduceAvailability;
