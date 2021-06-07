import './AvailabilityCTA.css';
import { Link } from 'react-router-dom'

const AvailabilityCTA = () => {
  return (
    <section className="availability-cta">
      <Link className="cta-2-content" to="/Availability">
          <h3 className="cta-header cta-2-header">AVAILABILITY</h3>
          <p className="cta-text cta-2-text">Check out our seasonal graph see when our variety of Fruits, Vegetables</p>
          <img alt="Arrow pointing new page" className="arrow" src="/assets/arrow1.png" />
      </Link>
      <div className="cta-2-icon-container">
        <img alt="Growth/Care" className="cta-2-img" src="/assets/availability.png"/>
      </div>
    </section>
  );
}

export default AvailabilityCTA;
