import React from "react";
import "./Footer.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "../../assets/icon/IconLibrary";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="link-list">
        <div className="link-column">
          <h4 className="link-title">Call</h4>
          <a href="tel:314-343-3432" className="link-item">
            314-343-3432
          </a>
        </div>
        <div className="link-column">
          <h4 className="link-title">Email</h4>
          <a href="mailto:contact@jsmastery.com" className="link-item">
            contact@jsmastery.com
          </a>
        </div>
      </div>
      <div className="social-icons-container">
        <div className="company-container">
          <p className="slogan">Innovating one project at a time</p>
        </div>
        <div className="social-container">
          <a href="https://google.com" className="social-icons">
            <AiFillGithub className="text-white" size="3rem" />
          </a>
          <a href="https://google.com" className="social-icons">
            <AiFillLinkedin className="text-white" size="3rem" />
          </a>
          <a href="https://google.com" className="social-icons">
            <AiFillInstagram className="text-white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
