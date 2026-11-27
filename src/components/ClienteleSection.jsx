
import { GraduationCap, Building2, Microscope, Landmark } from 'lucide-react';
import './ClienteleSection.css';

const institutions = [
  {
    name: 'IITs',
    description: 'Indian Institutes of Technology',
    icon: GraduationCap
  },
  {
    name: 'IIMs',
    description: 'Indian Institutes of Management',
    icon: Building2
  },
  {
    name: 'AIIMS',
    description: 'Medical and Research Institutions',
    icon: Microscope
  },
  {
    name: 'Universities',
    description: 'Academic Institutions Across India',
    icon: Landmark
  },
  {
    name: 'DRDO',
    description: 'Defence Research Laboratories',
    icon: Building2
  }
];

function ClienteleSection() {
  return (
    <section className="clientele-section section-padding">
      <div className="container">

        <div className="clientele-heading">
          <span className="section-label">OUR CLIENTELE</span>
          <h2>Trusted by Leading Institutions</h2>
          <p>
            Supporting academic, research and educational
            institutions with dependable periodical subscription services.
          </p>
        </div>

        <div className="clientele-grid">
          {institutions.map((institution, index) => {
            const Icon = institution.icon;

            return (
              <div className="clientele-card" key={index}>
                <Icon size={35} />
                <h3>{institution.name}</h3>
                <p>{institution.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ClienteleSection;
