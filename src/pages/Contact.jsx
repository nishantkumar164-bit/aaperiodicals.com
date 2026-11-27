
import { useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import '../styles/Contact.css';

const API_URL =
  'https://6hknnblh08.execute-api.ap-south-1.amazonaws.com/contact';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get('name').trim(),
      email: formData.get('email').trim(),
      phone: formData.get('phone').trim(),
      subject: formData.get('subject').trim(),
      message: formData.get('message').trim()
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your enquiry.');
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your enquiry has been submitted successfully.'
      });

      e.target.reset();

    } catch (error) {
      console.error('Contact form error:', error);

      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | A&A Periodicals Subscription Agency</title>
        <meta
          name="description"
          content="Contact A&A Periodicals Subscription Agency for journal subscriptions, renewals, library services and publisher enquiries."
        />
      </Helmet>

      <section className="contact-hero">
        <div className="container">
          <span>GET IN TOUCH</span>
          <h1>Contact Us</h1>
          <p>
            Have a question about journal subscriptions or our services?
            We'd be happy to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">

          <div className="contact-info">
            <h2>Let's Start a Conversation</h2>
            <p>
              Whether you represent a library, institution, publisher or
              organisation, our team is here to assist you.
            </p>

            <div className="contact-detail">
              <MapPin />
              <div>
                <h3>Our Office</h3>
                <p>24-B/5, D.B Gupta Road, Dev Nagar, New Delhi - 11005</p>
              </div>
            </div>

            <div className="contact-detail">
              <Mail />
              <div>
                <h3>Email Us</h3>
                <p>shrayjain17@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us an Enquiry</h2>
            <p>Fill in the details below and we'll get back to you.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  maxLength="120"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    maxLength="254"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone"
                    maxLength="30"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter enquiry subject"
                  maxLength="200"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  maxLength="5000"
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Enquiry'}
                {!loading && <Send size={17} />}
              </button>

              {status.message && (
                <p
                  role="status"
                  style={{
                    marginTop: '15px',
                    color: status.type === 'success' ? 'green' : 'red'
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
