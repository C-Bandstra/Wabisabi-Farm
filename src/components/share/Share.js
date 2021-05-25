import './Share.css';
import '../../index.css';

const Share = () => {
  return (
    <div id="Share" className="share">
      <div className="content">
        <section className="share-header-container">
          <p className="share-header-1 header-1">COMMUNITY</p>
          <p className="share-header-2 header-2">Wabi Sabi Farm Share</p>
        </section>
        <p className="share-text">A Wabi Sabi Farm Share is a 
        customizable share which allows our members to select 
        preferences on what is included in their weekly/bi-weekly 
        share.  Customizing your share reduces food waste and 
        improves the value of your food dollars.  Join us and 
        receive a freshly harvested box of Certified Organic fruits 
        and veggies you love, all while supporting a local farm.
        </p>
      </div>
      <img alt="Vegetable market table" src="/assets/share.png"/>
    </div>
  );
}

export default Share;
