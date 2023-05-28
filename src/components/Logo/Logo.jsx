import React, { useContext } from "react";
import "./Logo.css";
import { ThemeContext } from "../../context/ThemeContext";
const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={`glitch-btn ${
        theme === "light" ? "text-black" : "text-white"
      } text-black`}
    >
      DEVTONS.
    </button>
  );
};

export default Logo;
