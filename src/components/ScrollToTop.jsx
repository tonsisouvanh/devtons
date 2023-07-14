import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-16 md:bottom-5 z-10 right-5 bg-button text-input p-3 rounded-full transition-opacity ${
        isVisible ? "opacity-50" : "opacity-0"
      } hover:opacity-100`}
      onClick={scrollToTop}
    >
      <FiArrowUp className="text-md md:text-3xl"/>
    </button>
  );
};

export default ScrollToTopButton;
