import React from "react";
import "./Footer.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "../../assets/icon/IconLibrary";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = ({ theme }) => {
  return (
    <div className="footer-wrapper">
      <div className="link-list">
        {/* <div className="link-column">
          <h4 className="link-title">Call</h4>
          <a href="tel:314-343-3432" className="link-item">
            0375002568
          </a>
        </div> */}
        <div className="link-column">
          <h4 className="link-title">Email</h4>
          <a href="mailto:contact@jsmastery.com" className="link-item">
            tonsisouvanh7@gmail.com
          </a>
        </div>
      </div>
      <div className="social-icons-container">
        <div className="company-container">
          <p className="slogan">
            Copyright © <span>{new Date().getFullYear()}</span> by DevTons | Made
            by DevTons
          </p>
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
    // <footer className="bg-gray-900 text-gray-300 py-8">
    //   <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    //     <div className="text-center md:text-left mb-4 md:mb-0">
    //       <p className="text-sm">&copy; 2023 by Dev Tons. All rights reserved.</p>
    //     </div>
    //     <div className="flex space-x-4">
    //       <a href="#" className="hover:text-white transition-colors duration-300">
    //         <FaFacebookF />
    //       </a>
    //       <a href="#" className="hover:text-white transition-colors duration-300">
    //         <FaTwitter />
    //       </a>
    //       <a href="#" className="hover:text-white transition-colors duration-300">
    //         <FaLinkedinIn />
    //       </a>
    //       <a href="#" className="hover:text-white transition-colors duration-300">
    //         <FaGithub />
    //       </a>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
