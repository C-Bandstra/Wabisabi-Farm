import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Burger.css"
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import utilities from '../../utilities'
import { Link } from "react-router-dom";



const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  let menu;

  if(isOpen) {
    menu = 
    <div className="menu">
      <Link className="burg-link" to="/">Home</Link>
      <Link className="burg-link" to="/Availability">Produce Availability</Link>
      <Link onClick={() => utilities.scroll("Info", 15)} className="burg-link" to="/">Info</Link>
      <Link onClick={() => utilities.scroll("Contact", 0)}className="burg-link" to="/">Contact</Link>
      <Link className="burg-link" to="/FAQs">FAQs</Link>
      <a href="https://www.harvie.farm/farm/wabi-sabi-farm/signup" className="burg-link">Join Us</a>
    </div>
  }

  return (
    <div className="burger">
      <FontAwesomeIcon
        icon={faBars}
        className="fa-bars"
        onClick={() => setOpen(!isOpen)}
      />
      <div className="menu-container">
        { menu }
      </div>
    </div>
  )
}

export default Burger;
