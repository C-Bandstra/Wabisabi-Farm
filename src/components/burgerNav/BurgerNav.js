import './BurgerNav.css'
import utilities from '../../utilities'
import { Link } from "react-router-dom";

const BurgerNav = () => {
  const hideNav = () => {
    document.querySelector('.burger-nav').classList.add("hide")
    document.querySelector('.burger').closest("section").classList.remove("hide");
  }

  return ( 
    <div className="burger-nav hide" onClick={() => hideNav()}>
      <div className="burg-nav-header">
        <img alt="Wabi Sabi Farm logo" className="logo" src="/assets/logo.png" />
        <div className="icon-container">
           <img alt="Close Icon" className="close-icon" src="/assets/close-white.png" />
        </div>                                                              
      </div>
      <div className="menu">
        <Link className="burg-link" to="/">Home</Link>
        <Link onClick={() => utilities.scroll("Info", 15)} className="burg-link" to="/">Info</Link>
        <Link className="burg-link" to="/Availability">Produce</Link>
        <Link onClick={() => utilities.scroll("Contact", 0)}className="burg-link" to="/">Contact</Link>
        <Link className="burg-link" to="/FAQs">FAQs</Link>
        <a href="https://www.harvie.farm/farm/wabi-sabi-farm/signup" className="burg-link">Join Us</a>
      </div>
    </div>
   );
}
 
export default BurgerNav;
