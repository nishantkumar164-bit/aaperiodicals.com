
import { Link } from 'react-router-dom';
import {
  Library,
  BookOpen,
  Monitor,
  Building2,
  ArrowRight
} from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    icon: Library,
    title: 'Library Subscription Services',
    description:
      'Comprehensive journal subscription management, renewals, claims and procurement services for libraries.'
  },
  {
    icon: BookOpen,
    title: 'Standing Orders',
    description:
      'Reliable management of standing orders, continuations and back volumes from publishers.'
  },
  {
    icon: Monitor,
    title: 'Electronic Journals',
    description:
      'Assistance with print, online and combined subscriptions, publisher licensing and access requirements.'
  },
  {
    icon: Building2,
    title: 'Publisher Services',
    description:
      'Subscription and membership management, payment processing, customer support and renewal programmes.'
  }
];

function ServicesSection() {
  return (
    <section className="services-section section-padding">
      <div className="container">

        <div className="services-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Our Professional Services</h2>
          <p>
            Providing dependable subscription and publishing
            support services to libraries, institutions and publishers.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={30} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to="/services" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
