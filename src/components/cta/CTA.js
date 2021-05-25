import './CTA.css';
import { Link } from 'react-router-dom'

const CTA = ({ type, image, header, text}) => {
  return (
    <section className="cta">
      <div className="cta-icon-container">
        <img alt="Growth/Care" className={`${type}-icon`} src={ image }/>
      </div>
      <a className="cta-content" href="/GrowingPractices">
          <h3 className="cta-header">{ header }</h3>
          <p className="cta-text">{ text }</p>
          <img alt="Arrow pointing new page" className="arrow" src="/assets/arrow1.png" />
      </a>
    </section>
  );
}

export default CTA;
