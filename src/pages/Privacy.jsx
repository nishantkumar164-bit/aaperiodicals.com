
import { Helmet } from 'react-helmet-async';
import '../styles/Legal.css';

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | A&A Periodicals</title>
        <meta
          name="description"
          content="Read the Privacy Policy of A&A Periodicals Subscription Agency Pvt. Ltd. to understand how website enquiries and personal information are handled."
        />
      </Helmet>

      <section className="legal-hero">
        <div className="container">
          <span>LEGAL INFORMATION</span>
          <h1>Privacy Policy</h1>
          <p>Your privacy and trust are important to us.</p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: November 2026</p>

          <p>
            A&A Periodicals Subscription Agency Pvt. Ltd. ("A&A",
            "we", "our" or "us") respects your privacy. This Privacy
            Policy explains how information may be collected and used
            when you visit our website or contact us through it.
          </p>

          <h2>1. Information We May Collect</h2>
          <p>
            When you contact us or submit an enquiry through our
            website, we may collect information such as:
          </p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Organisation or institution details, if provided</li>
            <li>Information included in your enquiry or message</li>
          </ul>
          <p>
            Basic technical information, such as browser type and
            website usage information, may also be collected if
            analytics or similar technologies are enabled.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>Information provided to us may be used to:</p>
          <ul>
            <li>Respond to enquiries and requests.</li>
            <li>Provide information about our services.</li>
            <li>Communicate regarding journal subscriptions and related services.</li>
            <li>Improve our website and customer experience.</li>
            <li>Meet applicable legal and regulatory requirements.</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell or rent personal information to third
            parties. Information may be shared with relevant service
            providers or other parties where necessary to respond to
            your request, operate our website, or comply with legal
            obligations.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect information
            submitted to us against unauthorised access, misuse,
            alteration or disclosure. However, no method of
            transmission or storage over the internet can be
            guaranteed to be completely secure.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal information only for as long as
            reasonably necessary for the purpose for which it was
            collected, or as required by applicable law.
          </p>

          <h2>6. Cookies and Website Technologies</h2>
          <p>
            Our website may use cookies or similar technologies
            to support website functionality and, if enabled,
            understand website usage. You can manage cookies
            through your browser settings.
          </p>

          <h2>7. External Websites</h2>
          <p>
            Our website may contain links to third-party websites,
            including publisher or other service websites. We are
            not responsible for the privacy practices or content
            of those external websites. We encourage visitors to
            review their respective privacy policies.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            You may contact us to request access to, correction
            of, or deletion of personal information that you have
            provided, subject to applicable legal requirements.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time.
            Any changes will be published on this page along with
            the revised update date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or
            how your information is handled, please contact
            A&A Periodicals Subscription Agency Pvt. Ltd.
            through our <a href="/contact">Contact Us</a> page.
          </p>
        </div>
      </section>
    </>
  );
}

export default Privacy;
