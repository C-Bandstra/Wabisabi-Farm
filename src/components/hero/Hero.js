import './Hero.css';
import NavBar from "../navbar/NavBar"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="header">
        <img className="logo" src="/assets/logo.png" />
        <div className="nav">
           <Link className="link" to="/Home">Home</Link>
           <Link className="link" to="/About">About</Link>
           <Link className="link" to="/Services">Services</Link>
           <Link className="link" to="/Team">Team</Link>
           <Link className="link" to="/Portfolio">Portfolio</Link>
           <Link className="link" to="/Contact">Contact</Link>
           <span className="vertical-line"></span>
           <Link className="link" to="/Join">Join Us</Link>
        </div>
      </div>
      <h1 className="slogan">Harvesting A Bounty <br/> From Nature's Profound Beauty</h1>
    </div>
  );
}

export default Hero;
