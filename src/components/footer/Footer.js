import './Footer.css';
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="footer">
      <section className="foot-nav">
        <div className="foot-column">
          <Link className="foot-link">About Us</Link>
          <Link className="foot-link center">Food Share</Link>
          <Link className="foot-link">How It Works</Link>
        </div>
        <div className="foot-column">
          <Link className="foot-link">Availability</Link>
          <Link className="foot-link center">Contact Us</Link>
          <Link className="foot-link">FAQs</Link>
        </div>
        <div className="foot-column">
          <Link className="foot-link">Growing Practices</Link>
          <Link className="foot-link center">Join Us</Link>
          <Link className="foot-link">
            <img className="facebook-icon" src="/assets/facebook.png"/>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Footer;
