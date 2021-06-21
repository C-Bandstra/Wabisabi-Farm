import './Share.css';
import '../../index.css';

const Share = () => {

  return (
    <div id="Share" className="share">
      <div className="content">
        <section className="share-header-container">
          <p className="share-header-1">COMMUNITY</p>
          <p className="share-header-2">Wabi Sabi Farm Share</p>
        </section>
        <p className="share-text">A Wabi Sabi Farm Share is a 
        customizable share which allows our members to select 
        preferences on what is included in their weekly/bi-weekly 
        share. Join us and 
        receive a freshly harvested box of Certified Organic fruits 
        and veggies you love, all while supporting a local farm.
        </p>
      </div>
      <div className="img-wrapper">
        <img className="share-img" src="/assets/share.png" />
      </div>
    </div>
  );
}

export default Share;
