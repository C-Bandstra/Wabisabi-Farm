import './Hero.css';
import NavBar from "../navbar/NavBar"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";


const Hero = () => {
  // const history = useHistory();
  
  // const routeChange = (url) =>{ 
  //   let path = `/${url}`; 
  //   history.push(path);
  // }

  return (
    <div className="hero">
      <div className="header">
        <img className="logo" src="/assets/logo.png" />
        <div className="nav">
           <AnchorLink className="link" href="#Home">Home</AnchorLink>
           <AnchorLink className="link" href="#About">About Us</AnchorLink>
           <Link className="link" to="/Availability">Food Availability</Link>
           <AnchorLink className="link" href="#Info" offset="-40">Info</AnchorLink>
           <AnchorLink className="link" href="#Contact">Contact</AnchorLink>
           <Link className="link" to="/FAQs">FAQs</Link>
           <span className="vertical-line"></span>
           <Link className="link" to="/Join">Join Us</Link>
        </div>
      </div>
      <h1 className="slogan">Harvesting A Bounty <br/> From Nature's Profound Beauty</h1>
    </div>
  );
}

export default Hero;
