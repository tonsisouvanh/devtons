import React, { useContext } from "react";
import "./Submit.css";
import { ThemeContext } from "../../context/ThemeContext";
const Submit = ({ isSent }) => {
  const { theme } = useContext(ThemeContext);
  const darkTheme = "bg-black text-white";
  const lightTheme = "bg-white text-black";

  return (
    <div className="SubmitWrap">
      <button
        disabled={isSent ? false : true}
        className={`${
          isSent ? "cursor-pointer" : "cursor-not-allowed"
        }  SubmitButton ${theme === "light" ? darkTheme : lightTheme}`}
      >
        SEND
      </button>
    </div>
  );
};

export default Submit;
