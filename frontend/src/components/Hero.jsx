import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero = () => {
  const handleDownload = () => {
    const googleDriveLink =
      "https://drive.usercontent.google.com/u/0/uc?id=1ZvrRO1seQIHRPHqY85LiLfZyIZ5wBaP7&export=download";
    window.open(googleDriveLink, "_blank");
  };
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span>Ikhlas Ahmad</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Computer Science Student
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'm a Computer Science student with a passion for full-stack
            development. Skilled in React, Node.js, SQL, and C++, I enjoy
            building responsive, dynamic, and user-centric web applications. I'm
            always eager to learn new technologies and aim to excel in the
            software development field. Outside coding, I love playing sports
            and staying active.
          </motion.p>
        </motion.div>

        <div className="image-button-container">
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-placeholder">
              <img src="/images/juttt.jpg" alt="Ikhlas Ahmad" />
              <div className="placeholder-img"></div>
            </div>
          </motion.div>

          <motion.button
            className="download-vc-btn"
            onClick={handleDownload}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
