
import { Helmet } from 'react-helmet-async';
import '../styles/Legal.css';

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | A&A Periodicals</title>
        <meta
          name="description"
          content="Read the Terms and Conditions governing the use of the A&A Periodicals Subscription Agency website."
        />
      </Helmet>

      <section className="legal-hero">
        <div className="container">
          <span>LEGAL INFORMATION</span>
          <h1>Terms & Conditions</h1>
          <p>Please read these terms before using our website.</p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: November 2026</p>

          <p>
            Welcome to the website of A&A Periodicals Subscription
            Agency Pvt. Ltd. By accessing or using this website,
            you agree to the following Terms and Conditions.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            This website is intended to provide general information
            about our company, journal subscription services,
            library solutions and publisher-related services.
            You agree to use this website only for lawful purposes.
          </p>

          <h2>2. Website Information</h2>
          <p>
            We make reasonable efforts to keep the information
            on this website accurate and up to date. However,
            information is provided for general purposes and
            may be changed or updated without prior notice.
          </p>

          <h2>3. Services and Enquiries</h2>
          <p>
            Information about our services on this website does
            not constitute a binding offer or confirmation of
            subscription, pricing, availability or delivery.
            Specific service arrangements are subject to
            separate communication and agreement between
            A&A and the relevant customer or publisher.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            Unless otherwise stated, the text, design, graphics
            and other content on this website belong to A&A
            Periodicals Subscription Agency Pvt. Ltd. or are
            used with appropriate permission.
          </p>
          <p>
            You may not reproduce, distribute, modify or
            commercially use website content without prior
            written permission, except where permitted by law.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            This website may contain links to external websites,
            including publisher websites. These links are
            provided for convenience. We do not control or
            accept responsibility for the content, availability
            or policies of third-party websites.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the extent permitted by applicable law, A&A
            shall not be liable for any loss or damage arising
            from the use of, or inability to use, this website
            or reliance on information published on it.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of this website is also subject to our
            <a href="/privacy-policy"> Privacy Policy</a>,
            which explains how information submitted through
            the website may be handled.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We reserve the right to revise these Terms and
            Conditions at any time. Updated terms will be
            published on this page.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by
            the applicable laws of India. Any disputes shall
            be subject to the jurisdiction of the competent
            courts in India.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions regarding these Terms and Conditions,
            please contact us through our
            <a href="/contact"> Contact Us</a> page.
          </p>
        </div>
      </section>
    </>
  );
}

export default Terms;
