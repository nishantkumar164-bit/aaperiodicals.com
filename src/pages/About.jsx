
import {
  Target,
  HeartHandshake,
  ShieldCheck,
  Users,
  BookOpen,
  Landmark,
  Award,
  TrendingUp
} from 'lucide-react';

import '../styles/About.css';

const values = [
  {
    icon: HeartHandshake,
    title: 'Customer Service',
    description:
      'A dedicated customer service team handles each account, providing personalized assistance and support for every customer.'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Ethics',
    description:
      'We observe the highest standards of integrity in all transactions and work to protect the interests of our customers.'
  },
  {
    icon: Users,
    title: 'Professional Experience',
    description:
      'With experience dating back to 1978, we understand the requirements of libraries, publishers and academic institutions.'
  }
];

const ethics = [
  'A permanent member of the Good Offices Committee.',
  'Observe the highest standards of integrity in all transactions.',
  'Protect the interests of our customers.',
  'Avoid false, confusing, inaccurate or misleading descriptions and claims.',
  'Make every effort to resolve missing, late or damaged journal issues amicably and promptly.',
  'Represent publishers from around the world.',
  'Maintain and enhance the reputation of the Good Offices Committee.',
  'Support the development of professionals, researchers, academicians, students and librarians.'
];

function About() {
  return (
    <main className="about-page">

      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="container about-hero-content">
          <span>ABOUT OUR COMPANY</span>
          <h1>Building Trusted Relationships Through Knowledge</h1>
          <p>
            Providing professional journal subscription and
            periodical management services since 1978.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="about-intro section-padding">
        <div className="container about-intro-grid">

          <div className="about-intro-content">
            <span className="section-label">WHO WE ARE</span>

            <h2>
              A&A Periodicals Subscription Agency Pvt. Ltd.
            </h2>

            <p>
              A&A Periodicals Subscription Agency Pvt. Ltd.
              offers world-competitive service levels and
              pricing for libraries and institutions.
              We provide reliable and affordable journal
              subscription services through worldwide
              sourcing and publisher relationships.
            </p>

            <p>
              Our services help registered customers manage
              their serial subscriptions, including journal
              procurement, accessioning, processing, claims
              management and subscription renewals.
            </p>

            <p>
              We also support the transition from print
              journals to electronic publications and
              combined print and online subscriptions.
              Our dedicated customer service team assists
              customers with their subscription requirements.
            </p>
          </div>

          <div className="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
              alt="Library bookshelves and reading area"
            />

            <div className="about-year-card">
              <strong>1978</strong>
              <span>Our journey began</span>
            </div>
          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="vision-section">
        <div className="container vision-content">
          <div className="vision-icon">
            <Target size={38} />
          </div>

          <span>OUR VISION</span>

          <h2>
            To be a world-class Journals Subscription Agency.
          </h2>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section section-padding">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-label">WHAT GUIDES US</span>
            <h2>Our Values & Commitment</h2>
            <p>
              Building on a heritage spanning more than
              four decades, we remain committed to
              professional management and firmly held values.
            </p>
          </div>

          <div className="values-grid">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="value-card" key={index}>
                  <div className="value-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Code of Ethics */}
      <section className="ethics-section section-padding">
        <div className="container ethics-grid">

          <div className="ethics-heading">
            <span className="section-label">OUR PRINCIPLES</span>
            <h2>Our Code of Ethics</h2>

            <p>
              We believe that trust, transparency and
              professional integrity are essential to
              building lasting relationships with
              customers and publishers.
            </p>

            <div className="ethics-highlight">
              <ShieldCheck size={30} />
              <div>
                <strong>Integrity in Every Transaction</strong>
                <span>
                  Protecting customer interests through
                  responsible business practices.
                </span>
              </div>
            </div>
          </div>

          <div className="ethics-list">
            {ethics.map((item, index) => (
              <div className="ethics-item" key={index}>
                <span className="ethics-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Clientele */}
      <section className="about-clientele section-padding">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-label">OUR CLIENTELE</span>
            <h2>Serving Academic & Research Institutions</h2>
            <p>
              Our company profile identifies leading
              educational and research institutions
              among the organizations we serve.
            </p>
          </div>

          <div className="about-clientele-grid">
            {[
              'IITs',
              'IIMs',
              'AIIMS',
              'Universities',
              'DRDO Laboratories'
            ].map((name, index) => (
              <div className="about-clientele-card" key={index}>
                <Landmark size={27} />
                <h3>{name}</h3>
              </div>
            ))}
          </div>

          <p className="clientele-note">
            The company profile states that A&A represents
            over 460 publishers worldwide.
          </p>

        </div>
      </section>

      {/* Experience and Financial Security */}
      <section className="experience-section section-padding">
        <div className="container">

          <div className="about-section-heading">
            <span className="section-label">WHY A&A PERIODICALS</span>
            <h2>Experience You Can Rely On</h2>
          </div>

          <div className="experience-grid">

            <div className="experience-card">
              <div className="experience-icon">
                <BookOpen size={30} />
              </div>

              <h3>Serials Experience</h3>

              <p>
                Active since 1978, we have experienced
                staff based in Delhi and expertise in
                handling journals, serials, advances,
                yearbooks and other library materials.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <TrendingUp size={30} />
              </div>

              <h3>Financial Security</h3>

              <p>
                Our established business operations and
                professional subscription management
                experience help us manage financial
                responsibilities, particularly foreign
                currency transactions and associated risks.
              </p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <Award size={30} />
              </div>

              <h3>Professional Memberships</h3>

              <p>
                We are members of the Federation of
                Publishers' and Booksellers' Associations
                in India and the Good Offices Committee,
                and follow their guidelines for good practice.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
