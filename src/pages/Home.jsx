import React, { useContext } from "react";

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
import Experience from "../components/Experience/Experience";
// import Experience from "../components/Experience/Experience";
// import DarkModeToggler from "../components/DarkModeToggler";
// import MediaContact from "../components/MediaContact/MediaContact";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  // const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="relative">
        {/* <div className="fixed right-5 bottom-5 z-50 hidden md:flex">
          <MediaContact />
        </div> */}
        <motion.div
          className="fixed z-[1000] top-0 left-0 right-0 h-[3px] bg-accent opacity-50 origin-left"
          // style={{ scaleX: scrollYProgress }}
        />
        <SocialMedia />
        <div>
          {/* hero section */}
          <Hero theme={theme} />

          {/* About Me Sections */}
          {/* <About theme={theme} /> */}

          {/* Experience Section */}
          {/* <Experience theme={theme} /> */}

          {/* Projects Section */}
          {/* <Projects theme={theme} /> */}

          {/* Tech Tools Section */}
          {/* <TechTools theme={theme} /> */}

          {/* Contact Section */}
          {/* <Contact theme={theme} /> */}

          {/* <div className="bg-white">
            <DarkModeToggler />
          </div> */}

          {/* <Footer theme={theme} /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
