import './CTA.css';
import { Link } from 'react-router-dom'

const CTA = ({ cntType, imgType, image, header, text, route, ctaType, color, arrow}) => {
  return (
    <section className={`cta ${ctaType}`}>
      <div className={`${cntType} cta-icon-container`}>
        <img alt="Growth/Care" className={`${imgType} icon`} src={ image }/>
      </div>
      <Link className={`cta-content ${ctaType}`} to={route}>
          <p className={`cta-header ${color}`}>{ header }</p>
          <p className={`cta-text ${color}`}>{ text }</p>
          <div className={`arrow-container ${arrow}`}>
            <img alt="Arrow pointing new page" className="arrow animation-2" src={`/assets/arrow-${arrow}.png`} />
          </div>
      </Link>
    </section>
  );
}

export default CTA;
