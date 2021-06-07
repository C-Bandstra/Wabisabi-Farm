import NavBar from "../components/navbar/NavBar"
import FAQ from '../components/faq/FAQ'
import CTA from "../components/cta/CTA"
import FooterNav from "../components/footerNav/FooterNav"
import Footer from "../components/footer/Footer"

const FAQs = () => {
  return (
    <section className="FAQs">
      <NavBar type="nav-2" title={<p className="title">FAQ</p>}/>
      <FAQ />
      <CTA imgType="water" image="/assets/water.png" header="GROWING PRACTICES" text="Learn more about how we grow our vegetables and what we put into the soil." route="/GrowingPractices" arrow="1"/>
      <FooterNav />
      <Footer />
    </section>
  );
}

export default FAQs;
