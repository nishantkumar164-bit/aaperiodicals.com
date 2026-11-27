
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  ArrowRight
} from 'lucide-react';
import logo from '../assets/logo/aa-logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-about">
            <Link to="/" className="footer-brand">
            <img src={logo} alt="A&A Periodicals Logo" />
            <span className="footer-brand-text">
              <strong>A&A</strong>
              <small>PERIODICALS SUBSCRIPTION AGENCY</small>
            </span>
          </Link>

            <p>
              Providing reliable journal subscription and
              library management services since 1978.
              Connecting institutions with publishers
              around the world.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>
            <Link to="/services">Library Services</Link>
            <Link to="/services">Standing Orders</Link>
            <Link to="/services">Electronic Journals</Link>
            <Link to="/services">Publisher Services</Link>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>

            <p>
              <MapPin size={17} />
              <span>
                24-B/5, D.B Gupta Road, Dev Nagar,
                New Delhi - 110005
              </span>
            </p>

            <p>
              <Mail size={17} />
              <span>shrayjain17@gmail.com</span>
            </p>

            <Link to="/contact" className="footer-contact-link">
              Send an Enquiry <ArrowRight size={15} />
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} A&A Periodicals
            Subscription Agency Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
