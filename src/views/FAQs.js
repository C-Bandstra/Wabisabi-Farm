import Nav from "../components/nav/Nav"
import Header from "../components/header/Header"
import FAQ from '../components/faq/FAQ'
import CTA from "../components/cta/CTA"
import FooterNav from "../components/footerNav/FooterNav"
import Footer from "../components/footer/Footer"

const FAQs = () => {
  return (
    <section className="FAQs">
      <Header type="header-2" title="FAQ"/>
      <FAQ />
      <CTA imgType="water" cntType="produce-cnt" image="/assets/water.png" header="PRODUCE AVAILABILITY" text="Check out our seasonal graph to decide which share is the right fit for you!" route="/Availability" ctaType="water-cta" color="light" arrow="reverse"/>
      <FooterNav />
      <Footer />
    </section>
  );
}

export default FAQs;
