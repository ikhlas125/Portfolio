import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDribbble,
  FiInstagram,
} from "react-icons/fi";
import "../styles/Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      content: "ikhlasahmad332@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      content: "+92 3054178790",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      name: "GitHub",
      url: "https://github.com/ikhlas125",
    },
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ikhlas-ahmad-271ab8299/",
    },
    {
      icon: <FiInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/ikhlas.jutt125/",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Feel free to reach out through any of these channels
          </motion.p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact information card */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="card-header">
              <div className="contact-icon-wrapper">
                <FiMail className="contact-icon-main" />
              </div>
              <h3>Contact Information</h3>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.content}</a>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social media card */}
          <motion.div
            className="social-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card-header">
              <div className="social-icon-wrapper">
                <div className="social-icon-grid">
                  <FiGithub className="social-icon" />
                  <FiLinkedin className="social-icon" />
                  <FiTwitter className="social-icon" />
                  <FiDribbble className="social-icon" />
                </div>
              </div>
              <h3>Connect With Me</h3>
            </div>

            <div className="social-links-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -5, backgroundColor: "#6366f1" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="social-link-icon">{social.icon}</div>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
