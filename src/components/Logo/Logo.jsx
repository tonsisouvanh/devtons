import React, { useContext } from "react";
import "./Logo.css";
import { ThemeContext } from "../../context/ThemeContext";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Link
        to="/"
        className={`flex items-center ${
          theme === "light" ? "text-black" : "text-white"
        }  whitespace-nowrap text-xl`}
      >
        <FaLaptopCode className="text-primary text-3xl mr-1" />
        DEVTONS.
      </Link>
    </>
  );
};

export default Logo;
