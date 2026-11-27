
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/aa-logo.png';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="A&A Periodicals" />
          <span className="brand-text">
            <strong>A&A</strong>
            <small>PERIODICALS SUBSCRIPTION AGENCY</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
          <Link to="/contact" className="nav-contact-btn" onClick={closeMenu}>
            Get In Touch
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
