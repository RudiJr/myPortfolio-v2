import {Route,Routes} from "react-router-dom"
import Navbar from './Navbar';

import {Home, About, Projects, Contact} from '@/pages'

const Header = () => {
  return (
        <header className="header">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </header>
  );
};

export default Header;
