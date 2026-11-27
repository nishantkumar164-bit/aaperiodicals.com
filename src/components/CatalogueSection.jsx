
import { Download, BookOpen, ArrowUpRight } from 'lucide-react';
import './CatalogueSection.css';

function CatalogueSection() {
  return (
    <section className="catalogue-section section-padding">
      <div className="container">

        <div className="catalogue-wrapper">

          <div className="catalogue-content">
            <span className="catalogue-label">
              EXPLORE OUR PUBLICATIONS
            </span>

            <h2>
              Discover the World of
              <span> Children's Learning</span>
            </h2>

            <p>
              Explore the Edumaa Children's Books Catalogue 2024,
              featuring a wide collection of educational books,
              activity books, stories, workbooks and learning
              resources for young learners.
            </p>

            <div className="catalogue-features">
              <div>
                <BookOpen size={19} />
                <span>Educational Books</span>
              </div>

              <div>
                <BookOpen size={19} />
                <span>Activity & Story Books</span>
              </div>
            </div>

            <a
              href="https://aaperiodicalsdownload.s3.ap-south-1.amazonaws.com/catalogue/cataloge_file.pdf"
              className="catalogue-download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={19} />
              Download Catalogue
              <ArrowUpRight size={17} />
            </a>

            <span className="catalogue-note">
              Catalogue 2024 · PDF Format
            </span>
          </div>

          <div className="catalogue-visual">
            <div className="catalogue-decoration"></div>

            <div className="catalogue-book">
              <div className="book-icon">
                <BookOpen size={65} />
              </div>

              <span>EDUMAA</span>
              <h3>Children's Books Catalogue</h3>
              <p>CATALOGUE 2024</p>
              <div className="book-line"></div>
              <span className="book-caption">
                Imaginative Tales · Vibrant Art · Playfulness
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CatalogueSection;
