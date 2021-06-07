
import NavBar from "../components/navbar/NavBar"
import Practices from '../components/practices/Practices'
import CTA from "../components/cta/CTA"
import FooterNav from "../components/footerNav/FooterNav"
import Footer from "../components/footer/Footer"

const GrowingPractices = () => {
  return (
    <section className="GrowingPractices">
      <NavBar type="nav-2" title={<p className="title practice-title">Growing Practices</p>}/>
      <Practices />
      <CTA imgType="plant" image="/assets/plant.png" header="FAQ's" text="Have questions about how the food share works, or what we feed our plants?" route="/FAQs" arrow="1"/>
      <FooterNav />
      <Footer />
    </section>
  );
}

export default GrowingPractices;
