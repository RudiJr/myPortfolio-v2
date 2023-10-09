import {Link, NavLink} from "react-router-dom";
import { useRef, useState, useEffect  } from 'react';

function Nav() {
  const iconRef = useRef();
  const [clicked, setClicked] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Este useEffect só será executado uma vez após a montagem do componente

  const handleClick = () => {
    if (windowWidth < 640) {
      setClicked(!clicked);
      if(clicked) {
        iconRef.current.setAttribute("name", "menu");
      }
      if(!clicked) {
        iconRef.current.setAttribute("name", "x");
      }
    }
  };

  return (
    <header className="header">
      <box-icon onClick={handleClick} ref={iconRef} name='menu' color='#8d50d7' size='4rem'></box-icon>
      <nav style={{ display: windowWidth < 640 ? (clicked ? 'flex' : 'none') : 'flex' }} className="navbar">
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
