import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Innovate IT</h3>
          <p>Innovating the future with cutting-edge technology solutions.</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@company.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom"> 
        <p>&copy; 2025 Innovate IT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
