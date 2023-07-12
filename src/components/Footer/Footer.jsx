import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "../../assets/icon/IconLibrary";

const socialMediaIcons = [
  {
    icon: <AiFillFacebook />,
    link: "https://www.facebook.com/ton.sisouvanh/",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/sisouvanh-phommala-720993152/",
  },
  {
    icon: <AiFillGithub />,
    link: "https://github.com/tonsisouvanh",
  },
];

const Footer = ({ theme }) => {
  return (
    <footer
      className={` ${
        theme === "light"
          ? "bg-transparent text-slate-800"
          : "bg-gray-900 text-gray-300"
      }  py-8`}
    >
      <div
        className={`rounded-div border-t-[1px]  ${
          theme === "light" ? "bg-transparent" : "border-t-slate-600"
        } flex flex-col items-center gap-5 pt-10 pb-28`}
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; 2023 by Dev Tons. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          {socialMediaIcons.map((item, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              key={index}
              href={item.link}
              className="hover:text-accent text-4xl transition duration-300 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
