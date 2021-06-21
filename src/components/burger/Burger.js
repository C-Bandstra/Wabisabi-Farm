import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./Burger.css"
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import utilities from '../../utilities'
import { Link } from "react-router-dom";



const Burger = () => {
  const showNav = () => {
    document.querySelector('.burger').closest("section").classList.add("hide");
    document.querySelector('.burger-nav').classList.remove("hide")
  }

  return (
    <div className="burger">
      <FontAwesomeIcon
        icon={faBars}
        className="fa-bars"
        onClick={() => showNav()}
      />
    </div>
  )
}

export default Burger;
