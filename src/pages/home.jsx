
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Building2,
  Globe2,
  Library
} from 'lucide-react';
import '../styles/home.css';
import ServicesSection from '../components/ServicesSection';
import ClienteleSection from '../components/ClienteleSection';
import CatalogueSection from '../components/CatalogueSection';

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <span className="hero-tag">
            JOURNAL & PERIODICAL SUBSCRIPTION SERVICES
          </span>

          <h1>
            Your Trusted Partner in
            <span> Library & Journal Subscriptions</span>
          </h1>

          <p>
            Providing reliable journal subscription, periodical
            procurement and library management services since 1978.
            Connecting libraries and institutions with global publishers.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Explore Our Services <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>

          <div className="hero-trust">
            <span>Established in 1978</span>
            <span>Global Publisher Network</span>
            <span>Institutional Library Services</span>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="highlights">
        <div className="container highlights-grid">

          <div className="highlight-item">
            <BookOpen size={32} />
            <div>
              <h3>460+</h3>
              <p>Publishers Represented</p>
            </div>
          </div>

          <div className="highlight-item">
            <Library size={32} />
            <div>
              <h3>165,000+</h3>
              <p>Serial Titles Database</p>
            </div>
          </div>

          <div className="highlight-item">
            <Globe2 size={32} />
            <div>
              <h3>Since 1978</h3>
              <p>Industry Experience</p>
            </div>
          </div>

          <div className="highlight-item">
            <Building2 size={32} />
            <div>
              <h3>Institutional</h3>
              <p>Library Partnerships</p>
            </div>
          </div>

        </div>
      </section>

      {/* About Introduction */}
      <section className="home-about section-padding">
        <div className="container about-grid">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
              alt="Academic library with bookshelves"
            />
            <div className="experience-box">
              <strong>Since 1978</strong>
              <span>Serving the library community</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">ABOUT OUR COMPANY</span>

            <h2>
              Supporting Libraries Through
              <span> Reliable Subscription Services</span>
            </h2>

            <p>
              A&A Periodicals Subscription Agency Pvt. Ltd. provides
              journal subscription and library management services
              to institutions and organizations.
            </p>

            <p>
              With decades of experience in periodicals procurement,
              we help libraries manage subscriptions, renewals,
              claims and access to publications from publishers
              around the world.
            </p>

            <Link to="/about" className="text-link">
              Know More About Us <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

    <ServicesSection />
    <ClienteleSection />
    <CatalogueSection />
    </main>
  );
}

export default Home;
