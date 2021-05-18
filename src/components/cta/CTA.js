import './CTA.css';
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-icon-container">
        <img className="grow-icon"src="/assets/grow.png"/>
      </div>
      <Link className="cta-content" to="/GrowingPractices">
          <h3 className="cta-header">GROWING PRACTICES</h3>
          <p className="cta-text">Learn more about how we grow our vegetables and what we put into the soil.</p>
          <img className="arrow"src="/assets/arrow1.png" />
      </Link>
    </section>
  );
}

export default CTA;
