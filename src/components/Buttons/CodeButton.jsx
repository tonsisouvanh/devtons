import React from "react";
import "./CodeButton.css";
const CodeButton = () => {
  const handleDownload = () => {
    
  };
  return (
    <button onClick={handleDownload} className="cssbuttons-io">
      <span className="md:text-[1.1rem] uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
          ></path>
        </svg>
        Check Out CV
      </span>
    </button>
  );
};

export default CodeButton;