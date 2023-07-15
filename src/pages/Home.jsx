import React, { useContext, useEffect } from "react";
// components
import SocialMedia from "../components/SocialMedia";

// data
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import TechTools from "../components/TechTools/TechTools";
import Contact from "../components/Contact/Contact";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import ScrollToTopButton from "../components/ScrollToTop";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <div className="relative">
        <ScrollToTopButton />
        <motion.div className="fixed top-0 left-0 right-0 z-[1000] h-[3px] origin-left bg-accent opacity-50" />
        <SocialMedia />
        <div>
          {/* hero section */}
          <Hero theme={theme} />

          {/* About Me Sections */}
          <About theme={theme} />

          {/* Projects Section */}
          <Projects theme={theme} />

          {/* Tech Tools Section */}
          <TechTools theme={theme} />

          {/* Testimonial section */}
          <TestimonialSection theme={theme} />

          {/* Contact Section */}
          <Contact theme={theme} />

          <Footer theme={theme} />
        </div>
      </div>
    </>
  );
};

export default Home;
