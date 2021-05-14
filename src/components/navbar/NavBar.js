import './NavBar.css';
import utilities from '../../utilities'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
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
        <Link className="link" to="/Availability">Food Availability</Link>
        { anchorLinks }
        <Link className="link" to="/FAQs">FAQs</Link>
        <span className="vertical-line"></span>
        <Link className="link" to="/Join">Join Us</Link>
      </>
    )
  }

  const routes = generateRoutes()


  return (
      <div className="header">
        <img className="logo" src="/assets/logo.png" />
        <div className="nav">
           {routes}
        </div>
    </div>
  );
}

export default NavBar;
