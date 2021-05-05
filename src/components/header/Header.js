import './Header.css';
import { useState } from 'react'
import NavBar from "../navbar/NavBar"
import { Link } from "react-router-dom";

const Header = ({ h1, h2, type1, type2 }) => {
  const [header1, setHeader1] = useState(h1);
  const [header2, setHeader2] = useState(h2);

  return (
    <section className="header-container">
      <header className={`header-1 ${type1, type2}`}>{ header1 }</header>
      <header className={`header-2 ${type1, type2}`}>{ header2 }</header>
    </section>
  );
}

export default Header;
