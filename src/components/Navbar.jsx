import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
