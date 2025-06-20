import React from "react";
import { FiHeart } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} All rights reserved. Made with{" "}
            <FiHeart className="heart-icon" /> by Ikhlas Ahmad
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
