import './Offer.css';
import '../../index.css';

const Offer = () => {
  return (
    <div className="offer">

      <section className="offer-card save">
        <div className="icon-container">
          <img alt="Dollar sign; Save Money" src="/assets/save.png" className="offer-icon save-icon animation"/>
        </div>
        <p className="card-header">Save Money.</p>
        <p className="card-text">Joining a food share reduces food waste and improves the value of your food dollars. </p>
      </section>

      <section className="offer-card customize">
        <div className="icon-container">
          <img alt="Customized vegetable basket" src="/assets/basket.png" className="offer-icon animation"/>
        </div>
        <p className="card-header">Customize Your Share.</p>
        <p className="card-text">Participants can customize their share which allows you to select preferences on what is included in your weekly/bi-weekly share.</p>
      </section>

      <section className="offer-card good">
        <div className="icon-container">
          <img alt="Community holding hands" src="/assets/people.png" className="offer-icon animation"/>
        </div>    
        <p className="card-header">Eat Good. Do Good.</p>
        <p className="card-text">Join us and receive a freshly harvested box of Certified Organic fruits and veggies you love, all while supporting a local farm.</p>
      </section>

    </div>
  );
}

export default Offer;
