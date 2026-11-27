
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>

      <ContactCTA />
      <Footer />
    </>
  );
}

export default App;
