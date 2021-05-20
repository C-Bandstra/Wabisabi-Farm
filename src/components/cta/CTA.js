import './CTA.css';
import { Link } from 'react-router-dom'

const CTA = ({ type, image, header, text}) => {
  return (
    <section className="cta">
      <div className="cta-icon-container">
        <img alt="Growth/Care" className={`${type}-icon`} src={ image }/>
      </div>
      <Link className="cta-content" to="/GrowingPractices">
          <h3 className="cta-header">{ header }</h3>
          <p className="cta-text">{ text }</p>
          <img className="arrow"src="/assets/arrow1.png" />
      </Link>
    </section>
  );
}

export default CTA;
