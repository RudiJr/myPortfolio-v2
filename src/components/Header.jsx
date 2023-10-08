import {Link, NavLink} from "react-router-dom";
import { useRef } from 'react';
import { useState } from 'react';

function Nav() {
  const iconRef = useRef();
  const [clicked, setClicked] = useState();

  const handleClick = () => {
    setClicked(!clicked);
    if(clicked) {
      iconRef.current.setAttribute("name", "menu");
    }
    if(!clicked) {
      iconRef.current.setAttribute("name", "x");
    }
  };
  
  const divStyle = {
    display: clicked ? 'flex' : 'none'
  };

  return (
    <header className="header">
      <box-icon onClick={handleClick} ref={iconRef} name='menu' color='#8d50d7' size='4rem'></box-icon>
      <nav style={divStyle} className="navbar">
        <ul className="nav-list">
          <li onClick={handleClick} className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleClick} className="nav-items">
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li onClick={handleClick} className="nav-items">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li onClick={handleClick} className="nav-items">
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
