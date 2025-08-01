import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Naresh Panchal | All Rights Reserved</p>
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
