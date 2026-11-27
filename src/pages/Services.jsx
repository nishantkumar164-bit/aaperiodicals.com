
import {
  Library,
  BookOpen,
  FileCheck,
  RefreshCw,
  Monitor,
  Globe,
  Truck,
  CreditCard,
  Users,
  Headphones,
  Database,
  Mail,
  CheckCircle2
} from 'lucide-react';

import '../styles/Services.css';

const libraryServices = [
  {
    icon: BookOpen,
    title: 'Journal Subscriptions',
    description: 'Processing new subscriptions from publishers worldwide and managing periodical orders efficiently.'
  },
  {
    icon: RefreshCw,
    title: 'Renewal Management',
    description: 'Timely subscription renewals to help libraries avoid interruptions in journal supply.'
  },
  {
    icon: FileCheck,
    title: 'Claims & Missing Issues',
    description: 'Managing claims for missing, delayed or damaged journal issues and responding to subscription queries.'
  },
  {
    icon: Database,
    title: 'Accessioning & Processing',
    description: 'Comprehensive accessioning, processing and subscription record management for libraries.'
  },
  {
    icon: CreditCard,
    title: 'Invoicing & Payments',
    description: 'Accurate invoicing, financial management and payment coordination with publishers across currencies.'
  },
  {
    icon: Library,
    title: 'Standing Orders',
    description: 'Managing irregular publications, continuations, standing orders and back volumes.'
  }
];

const libraryAdvantages = [
  {
    title: 'Administration',
    items: [
      'A single source for orders, claims and renewals.',
      'Detailed bibliographic and management information.',
      'Simplified renewal processes through consolidated checklists.',
      'Reporting on orders, claims, cancellations and queries.',
      'Consolidation, check-in and delivery services.'
    ]
  },
  {
    title: 'Cost Effectiveness',
    items: [
      'Invoicing in a single currency.',
      'Potential benefits associated with invoice pre-payment.',
      'A local point of contact for communication.',
      'Reduced administrative workload for library staff.'
    ]
  },
  {
    title: 'Technology & Information',
    items: [
      'Online access to bibliographic information.',
      'Solutions supporting serials automation.',
      'Email-based communication and customer support.',
      'EDI integration with major library system vendors.'
    ]
  }
];

const publisherBenefits = [
  {
    icon: Users,
    title: 'Time to Focus on What Matters',
    description: 'Outsourcing repetitive administrative tasks allows board members and staff to focus on the strategic goals of their organizations.'
  },
  {
    icon: Headphones,
    title: 'Improved Communication',
    description: 'Dedicated staff handle time-intensive member and subscriber support, improving day-to-day communication.'
  },
  {
    icon: Globe,
    title: 'Flexible Solutions',
    description: 'Modular business support services can be adapted to meet individual organizational requirements.'
  },
  {
    icon: RefreshCw,
    title: 'Seamless Transitions',
    description: 'Consistent administrative, financial and membership support even when organizational officers change.'
  }
];

const publisherServices = [
  'Subscription and membership maintenance',
  'Customer service and member support',
  'Payment processing',
  'Back issue fulfilment',
  'Reporting and data management',
  'Order management',
  'Subscriber communication',
  'Renewal campaign management'
];

function Services() {
  return (
    <main className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="container services-hero-content">
          <span>WHAT WE OFFER</span>
          <h1>Comprehensive Subscription & Library Management Services</h1>
          <p>
            Supporting libraries, academic institutions,
            publishers and scholarly organizations through
            reliable professional services.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="service-intro section-padding">
        <div className="container service-intro-content">
          <span className="section-label">OUR EXPERTISE</span>

          <h2>
            Simplifying Journal Subscriptions
            and Publishing Administration
          </h2>

          <p>
            A&A Periodicals Subscription Agency Pvt. Ltd.
            provides a range of subscription management
            and business support services. We help libraries
            manage their periodicals while enabling publishers
            and associations to streamline their administrative
            operations.
          </p>
        </div>
      </section>

      {/* Library Services */}
      <section className="library-services section-padding">
        <div className="container">

          <div className="service-page-heading">
            <span className="section-label">FOR LIBRARIES & INSTITUTIONS</span>
            <h2>Subscription Services for Libraries</h2>
            <p>
              Helping librarians manage journal subscriptions,
              procurement, renewals and related administrative
              responsibilities.
            </p>
          </div>

          <div className="library-services-grid">
            {libraryServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div className="library-service-card" key={index}>
                  <div className="library-service-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Library Advantages */}
      <section className="library-advantages section-padding">
        <div className="container">

          <div className="service-page-heading">
            <span className="section-label">BENEFITS FOR LIBRARIES</span>
            <h2>Advantages of Using Subscription Agents</h2>
            <p>
              Subscription agents help libraries reduce
              administrative complexity, manage costs and
              coordinate with publishers worldwide.
            </p>
          </div>

          <div className="advantages-grid">
            {libraryAdvantages.map((category, index) => (
              <div className="advantage-card" key={index}>
                <h3>{category.title}</h3>

                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Electronic Journals and Consortia */}
      <section className="digital-services section-padding">
        <div className="container digital-services-grid">

          <div className="digital-service-content">
            <span className="section-label">DIGITAL SUBSCRIPTIONS</span>
            <h2>Electronic Journals & Consortia Services</h2>

            <p>
              Electronic journals introduce additional
              complexity to subscription management.
              We assist libraries in understanding publisher
              pricing, subscription options and electronic
              access requirements.
            </p>

            <ul>
              <li>Print, online and combined subscription options.</li>
              <li>Publisher licensing and access requirements.</li>
              <li>IP address and password-based authentication information.</li>
              <li>Support for consortium subscription requirements.</li>
              <li>Subscription information and renewal assistance.</li>
            </ul>
          </div>

          <div className="digital-service-visual">
            <Monitor size={65} />
            <h3>Managing Print & Digital Access</h3>
            <p>
              Supporting libraries through changing
              subscription and access requirements.
            </p>
          </div>

        </div>
      </section>

      {/* Delivery */}
      <section className="delivery-section section-padding">
        <div className="container delivery-content">

          <div className="delivery-icon">
            <Truck size={38} />
          </div>

          <div>
            <span className="section-label">DELIVERY METHOD</span>
            <h2>Reliable Journal Delivery</h2>

            <p>
              Hard copy subscriptions are dispatched through
              courier or Speed Post. Overseas journal orders
              are sent by airmail. Journals are supplied by
              volume year, with already published issues
              dispatched first, followed by remaining issues
              as they are published.
            </p>
          </div>

        </div>
      </section>

      {/* Publisher Services */}
      <section className="publisher-section section-padding">
        <div className="container">

          <div className="service-page-heading">
            <span className="section-label">FOR PUBLISHERS & ASSOCIATIONS</span>
            <h2>Business Support Services</h2>
            <p>
              We provide administrative and subscription
              management solutions that help societies and
              associations focus on their scholarly and
              professional communities.
            </p>
          </div>

          <div className="publisher-benefits-grid">
            {publisherBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div className="publisher-benefit-card" key={index}>
                  <div className="publisher-benefit-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="publisher-services-box">
            <div className="publisher-services-heading">
              <span className="section-label">OUR CAPABILITIES</span>
              <h2>Subscription & Membership Management</h2>
              <p>
                A central point of contact for subscribers
                and members, supported by professional
                administrative services.
              </p>
            </div>

            <div className="publisher-services-list">
              {publisherServices.map((service, index) => (
                <div key={index}>
                  <CheckCircle2 size={18} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Renewal Programme */}
      <section className="renewal-section section-padding">
        <div className="container renewal-content">

          <div className="renewal-icon">
            <Mail size={38} />
          </div>

          <div>
            <span className="section-label">RENEWAL PROGRAMME</span>
            <h2>Supporting Subscriber & Member Retention</h2>

            <p>
              We assist organizations in planning and
              managing renewal programmes, from campaign
              scheduling and preparation to communication
              with members, non-member subscribers and
              institutional subscribers.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;
