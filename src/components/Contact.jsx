import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="icon" />,
      url: 'https://github.com/dndipak720'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="icon" />,
      url: ' linkedin.com/in/dipak-nayak-54628327b'
    },
    
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-content"
        >
          <h2>Get In Touch</h2>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <p className="contact-description">
                Have a project in mind or just want to say hi? Feel free to reach out.
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions.
              </p>

              <div className="contact-links">
                <a
                  href="mailto:your.email@example.com"
                  className="contact-link"
                >
                  <FiMail className="icon" />
                  <span>dndipak200@gmail.com</span>
                </a>
                <a
                  href=" linkedin.com/in/dipak-nayak-54628327b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FiLinkedin className="icon" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/dndipak720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FiGithub className="icon" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="form-input"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`status-message ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="icon spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="icon" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
