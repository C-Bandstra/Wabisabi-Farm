import './Share.css';
import '../../index.css';
// import Header from '../header/Header'

const Share = () => {
  return (
    <div className="share">
      {/* <Header h1="COMMUNITY" h2="Wabisabi Farm Share" /> */}
      <div className="content">
        <section className="share-header-container">
          <header className="share-header-1 header-1">COMMUNITY</header>
          <header className="share-header-2 header-2">Wabisabi Farm Share</header>
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
      <img src="/assets/share.png"/>
    </div>
  );
}

export default Share;
