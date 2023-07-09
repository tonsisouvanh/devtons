import React, { useContext } from "react";
import "./Logo.css";
import { ThemeContext } from "../../context/ThemeContext";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* <button
        className={`flex items-center glitch-btn ${
          theme === "light" ? "text-black" : "text-white"
        } text-black whitespace-nowrap`}
      >
        DEVTONS.
      </button> */}

      <Link
        to="/"
        className={`flex items-center ${
          theme === "light" ? "text-black" : "text-white"
        } text-black whitespace-nowrap`}
      >
        <FaLaptopCode className="text-primary text-xl mr-1" />
        DEVTONS.
      </Link>
    </>
  );
};

export default Logo;
