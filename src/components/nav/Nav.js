import './Nav.css';
import utilities from '../../utilities'
import { useHistory, Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = ({ type }) => {
  const history = useHistory();

  const generateRoutes = () => {
    let anchorLinks;
    if(history.location.pathname !== '/') {
      anchorLinks = (
        <>
          <Link onClick={() => utilities.scroll("Info")} className="link" to="/">Info</Link>
          <Link onClick={() => utilities.scroll("Contact")}className="link" to="/">Contact</Link>
        </>
      )
    } else {
      anchorLinks = (
        <>
          <AnchorLink className="link" href="#Info" offset="-40">Info</AnchorLink>
          <AnchorLink className="link" href="#Contact">Contact</AnchorLink>
        </>
      )
    }
    
    return (
      <>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/Availability">Produce Availability</Link>
        { anchorLinks }
        <Link className="link" to="/FAQs">FAQs</Link>
        <span className="vertical-line"></span>
        <a href="https://www.harvie.farm/farm/wabi-sabi-farm/signup" className="link">Join Us</a>
      </>
    )
  }

  const routes = generateRoutes()


  return (
    <div className={`nav ${type}`}>
      {routes}
    </div>
  );
}

export default NavBar;
