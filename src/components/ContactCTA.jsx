
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import './ContactCTA.css';

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta-content">

        <div>
          <span className="cta-label">LET'S WORK TOGETHER</span>

          <h2>
            Looking for Reliable Journal
            Subscription Services?
          </h2>

          <p>
            Connect with our team to discuss your library,
            institutional or publishing requirements.
          </p>
        </div>

        <div className="cta-actions">
          <Link to="/contact" className="cta-button">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ContactCTA;
