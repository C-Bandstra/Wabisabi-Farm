import './CTA.css';
import { Link } from 'react-router-dom'

const CTA = ({ imgType, image, header, text, route, ctaType, color, arrow}) => {
  return (
    <section className={`cta ${ctaType}`}>
      <div className="cta-icon-container">
        <img alt="Growth/Care" className={`${imgType} icon`} src={ image }/>
      </div>
      <Link className="cta-content" to={route}>
          <h3 className={`cta-header ${color}`}>{ header }</h3>
          <p className={`cta-text ${color}`}>{ text }</p>
          <img alt="Arrow pointing new page" className="arrow" src={`/assets/arrow${arrow}.png`} />
      </Link>
    </section>
  );
}

export default CTA;
