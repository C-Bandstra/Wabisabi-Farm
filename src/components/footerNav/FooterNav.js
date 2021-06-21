import './FooterNav.css';
import { useHistory, Link } from "react-router-dom"
import utilities from '../../utilities'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const FooterNav = () => {
  const history = useHistory();

  
  const generateRoute = (link) => {
    let anchorLinks =
    history.location.pathname !== '/' ?
    <Link onClick={() => utilities.scroll(`${link.id}`, 20)} className={`foot-link ${link.center}`} to="/">{ link.title }</Link>
    :
    <AnchorLink className={`foot-link ${link.center}`} href={`#${link.id}`} offset={`${link.offset}`}>{ link.title }</AnchorLink>
    
    return anchorLinks
  }
  
  let links = {
    about: {
      id: "About",
      title: "About Us",
      offset: "80",
      center: ""
    },
    info: {
      id: "Info",
      title: "How It Works",
      offset: "-40",
      center: "center"
    },
    contact: {
      id: "Contact",
      title: "Contact Us",
      offset: "0",
      center: "center"
    },
    practices: {
      id: "Practices",
      title: "Practices",
      offset: "0",
      center: ""
    },
  }

  return (
    <section className="nav-wrap">
      <section className="foot-nav">
        <div className="foot-column">
          {generateRoute(links.about)}
          {generateRoute(links.info)}
          <a className="foot-link " href="https://www.instagram.com/wabisabifarmiowa/?hl=en" className="foot-link">
            <img alt="Instagram link" className="instagram-icon" src="/assets/instagram.png"/>
          </a>
        </div>
        <div className="foot-column">
          <Link to="/Availability" className="foot-link">Availability</Link>
          {generateRoute(links.contact)}
          <Link to="/FAQs" className="foot-link">FAQs</Link>
        </div>
        <div className="foot-column">
          {generateRoute(links.practices)}
          {/* <a href="#Practices" className="foot-link">Growing Practices</a> */}
          <a href="https://www.harvie.farm/farm/wabi-sabi-farm/signup" className="foot-link center">Join Us</a>
          <a className="foot-link" href="https://www.facebook.com/WabiSabiFarmIowa/" className="foot-link">
            <img alt="Facebook link" className="facebook-icon" src="/assets/facebook.png"/>
          </a>
        </div>
      </section>
    </section>
  );
}

export default FooterNav;
