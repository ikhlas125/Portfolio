import React from "react";
import { motion } from "framer-motion";
import certifications from "../data/certifications";
import { FiExternalLink } from "react-icons/fi";
import "../styles/Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="section-title  "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </div>
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                aria-label="View certification"
              >
                <FiExternalLink />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
