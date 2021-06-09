import './Header.css';
import Burger from '../burger/Burger'
import { useState, useEffect } from 'react'
import Nav from '../nav/Nav'

const Header = ({ type, title }) => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 688);

  const updateView = () => {
    setMobile(window.innerWidth <= 688);
  };

  useEffect(() => {
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  });

  return (
    <div className={`header ${type}`}>
      { isMobile ? (
        <>
          <img alt="Wabi Sabi Farm logo" className={`logo ${type}`} src="/assets/logo.png" />
          <Burger />
          <p className="title">{ title }</p>
        </>
      ) : (
        <>
          <img alt="Wabi Sabi Farm logo" className={`logo ${type}`} src="/assets/logo.png" />
          <Nav type="nav-2"/>
          <p className="title">{ title }</p>
        </>
      )}
    </div>
  );
}

export default Header;
