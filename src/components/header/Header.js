import './Header.css';
import Nav from '../nav/Nav'

const Header = ({ type, title }) => {

  return (
    <div className={`header ${type}`}>
      <img alt="Wabi Sabi Farm logo" className={`logo ${type}`} src="/assets/logo.png" />
      <Nav type="nav-2"/>
      <p className="title">{ title }</p>
    </div>
  );
}

export default Header;
