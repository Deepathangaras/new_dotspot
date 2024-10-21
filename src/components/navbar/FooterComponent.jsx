import React from 'react';
import './FooterComponent.css'; // Import the footer-specific CSS
import Logo from "../../assets/img/dot.png"; // Assuming you have the Dotsito logo in your assets folder

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-brand">
          <img
            alt="Dotsito Logo"
            src={Logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
          <span className="footer-brand">Dotspot</span>
        </div>
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Dotsito Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
