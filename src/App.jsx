import './index.css';
import {Route,Routes} from "react-router-dom"
import {Home, About, Projects, Contact} from '@/pages'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function App() {
  return (
    <>
        <Header />
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        <Footer />
    </>
  );
}

export default App;
