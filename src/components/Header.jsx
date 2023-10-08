import {Link, NavLink} from "react-router-dom";
import { useRef } from 'react';

function Nav() {
  const iconRef = useRef();
  const handleClick = () => {
    console.log('you clicked')
  };

  return (
    <header className="header">
      <box-icon onClick={handleClick} ref={iconRef} name='menu' color='#8d50d7' size='4rem'></box-icon>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const Header = () => {
  return (
    <Nav />
  );
};

export default Header;
