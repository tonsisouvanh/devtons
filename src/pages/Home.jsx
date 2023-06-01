import React, { useContext, useState } from "react";
import svgBackground from "../assets/svg/layered-peaks-haikei.svg";
// icon / image / svg
import {
  tiktok,
  facebook,
  github,
  twitter,
  githubWhite,
} from "../assets/images/idnex";
import tonsAvatar from "../assets/images/avatar.JPG";
import {
  FaQuoteLeft,
  FaQuoteRight,
  HiChevronDoubleDown,
  HiChevronDoubleUp,
} from "../assets/icon/IconLibrary";

// components
import ProjectCard from "../components/ProjectCard";
import SocialMedia from "../components/SocialMedia";

// data
import { projectData, techtools } from "../data/index";
import { ThemeContext } from "../context/ThemeContext";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  HeaderAnimate,
  DescAnimate,
  projectsDivAnimate,
  scaleAnimate,
  fadeBottomAnimate,
} from "../animation/index";
import Submit from "../components/SubmitBtn/Submit";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Footer from "../components/Footer/Footer";
// import DarkModeToggler from "../components/DarkModeToggler";
// import MediaContact from "../components/MediaContact/MediaContact";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [loadmoreClick, setLoadmoreClick] = useState(false);

  const [noOfItems, setNoOfItems] = useState(4);

  const loadMore = () => {
    let length = projectData.length;
    if (noOfItems < length) {
      setNoOfItems(noOfItems + (length - noOfItems));
    }
  };

  const showLess = () => {
    if (noOfItems > 2) {
      setNoOfItems(noOfItems - 2);
    }
  };

  const handleLoadmoreClick = () => {
    setLoadmoreClick(!loadmoreClick);

    if (loadmoreClick) loadMore();
    else showLess();
  };

  const sliceItems = projectData.slice(0, noOfItems);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="relative">
        {/* <div className="fixed right-5 bottom-5 z-50 hidden md:flex">
          <MediaContact />
        </div> */}
        <motion.div
          className="fixed z-[1000] top-0 left-0 right-0 h-[3px] bg-accent opacity-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <SocialMedia />
        <div className="">
          {/* <div className="rounded-div relative"> */}
          {/* Main section */}
          <div className="relative shadow-lg overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 -z-19 hidden lg:flex">
              <img
                src={svgBackground}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="w-full h-full absolute top-0 -right-32 -z-20">
              <BackgroundAnimation />
            </div>

            <section
              id="about"
              className="relative rounded-div flex flex-col p-6 justify-center items-start space-y-6 md:flex-row md:p-12 md:justify-between"
            >
              {/* Image */}
              <div className="border-4 border-white shadow-sm shadow-gray-500 relative max-w-[250px] sm:max-w-[350px] md:max-w-[400px] animate-[scaleUp_0.5s_linear]">
                {/* <img className='w-full h-full object-cover' src={me} alt="" /> */}
                <img
                  className="w-full h-full object-cover"
                  src={tonsAvatar}
                  alt=""
                />
              </div>

              {/* Intro Header */}
              <div className="pl-6 space-y-2 text-3xl text-left sm:text-5xl sm:space-y-4 md:space-y-6 md:text-6xl">
                <h1 className="flex text-primary animate-[fadeLeft_0.8s_linear]">
                  <span className="animate-[wiggle_1s_ease-in-out_infinite]">
                    👋🏻
                  </span>
                  Hi,
                </h1>
                <h1 className="text-primary animate-[fadeLeft_0.9s_linear]">
                  I'm <span className="text-accent font-bold">Tons</span>
                </h1>
                <h1 className="text-primary text-xl md:text-3xl leading-8 animate-[fadeLeft_1.1s_linear]">
                  React JS Developer Creating Engaging Web Experiences
                </h1>
              </div>

              {/* Social contact */}
              <div className="flex gap-x-4 md:hidden">
                <a
                  href="https://www.tiktok.com/foryou?lang=en"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_0.5s_linear]"
                    src={tiktok}
                    alt=""
                  />
                </a>
                <a
                  href="https://www.facebook.com/ton.sisouvanh"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_0.7s_linear]"
                    src={facebook}
                    alt=""
                  />
                </a>
                <a
                  href="https://github.com/tonsisouvanh"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_0.9s_linear]"
                    src={theme === "dark" ? githubWhite : github}
                    alt=""
                  />
                </a>
                <a
                  href="https://www.tiktok.com/en/"
                  target="blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_1.1s_linear]"
                    src={twitter}
                    alt=""
                  />
                </a>
              </div>
            </section>
          </div>

          {/* About Me Sections */}
          {/* <section className="rounded-lg rounded-div backdrop-blur-xl bg-white/60 p-2 my-10 sm:my-20 animate-[fadeBottom_1s_linear] md:my-561"> */}
          <section
            className={`shadow-md ${
              theme === "light" ? "bg-gray-200" : "bg-slate-800"
            } py-10 md:py-32 animate-[fadeBottom_1s_linear]`}
          >
            <div className="rounded-div">
              <div className="flex items-center">
                {/* <!-- The left line --> */}
                {/* <div className="flex-grow h-[3px] bg-accent"></div> */}

                <h2
                  className={`text-2xl font-bold text-center w-full mx-3 sm:text-4xl text-transparent bg-clip-text ${
                    theme === "light"
                      ? "bg-gradient-to-r from-black to-gray-900"
                      : "bg-gradient-to-r from-white to-gray-400"
                  }`}
                >
                  About Me
                </h2>

                {/* <!-- The right line --> */}
                {/* <div className="flex-grow h-[3px] bg-accent"></div> */}
              </div>
              <FaQuoteLeft className="text-3xl text-primary" />
              <p className="relative text-primary text-center leading-8 sm:text-xl sm:mt-3 sm:leading-10">
                {/* <p className="text-center leading-8 sm:text-xl sm:mt-3 sm:leading-10"> */}
                I'm a Frontend Web Developer who specializes in building the
                front-end of websites and web applications, ensuring the success
                of the overall project. Check out some of my work in the
                Projects section. I'm passionate about using frameworks like
                ReactJS for front-end web development, and seeing things
                rendered exactly as I envisioned is very satisfying for me.
                Please feel free to connect with me or follow me on my social
                media.
                {/* <FaQuoteLeft className="text-xl text-primary absolute -top-10 -left-10" />
              <FaQuoteRight className="text-xl text-primary absolute -bottom-10 -right-10" /> */}
              </p>
              <div className="w-full flex justify-end">
                <FaQuoteRight className="text-3xl text-primary" />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            id="projects"
            // className="mb-16 rounded-div lg:mt-32 md:mb-60 animate-fade-in-from-right"
            className="rounded-div py-10 md:py-28 animate-fade-in-from-right"
          >
            {/* proejct header */}
            <motion.div variants={HeaderAnimate} className="flex items-center">
              <h2
                className={`text-transparent bg-clip-text ${
                  theme === "light"
                    ? "bg-gradient-to-r from-black to-gray-900"
                    : "bg-gradient-to-r from-white to-gray-400"
                }  text-2xl font-bold text-center sm:text-4xl mr-3`}
              >
                Projects
              </h2>
              {/* <h1 class="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Projects
              </h1> */}
              {/* <!-- The right line --> */}
              {/* <div className="flex-grow h-[6px] rounded-full bg-accent"></div> */}
              <div className="flex-grow h-[6px] rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
            </motion.div>
            {/* project desc */}
            <motion.div variants={DescAnimate} className="mt-4">
              <p className="md:text-lg text-primary">
                Below, you'll find some of my personal and client projects, most
                of which were created for front-end practice and school
                assignments
              </p>
            </motion.div>
            {/* project cards container */}
            <motion.div
              variants={projectsDivAnimate}
              className="flex flex-col mt-10 gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-10"
            >
              <AnimatePresence>
                {sliceItems.map((item) => (
                  <ProjectCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    desc={item.desc}
                    imgs={item.imgs}
                    techStack={item.techStack}
                    github={item.github}
                    website={item.website}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
            <motion.div
              variants={scaleAnimate}
              className="flex text-[0.8em] md:text-[1em] items-center justify-center gap-5"
            >
              {/* <div className="w-[200px] text-center mt-10">
                <button
                  onClick={loadMore}
                  className="shadow-lg text-primary border-2 rounded-md border-accent px-5 py-1 transition-all duration-75 hover:scale-105"
                >
                  Show More
                </button>
              </div>
              <div className="w-[200px] text-center mt-10">
                <button
                  onClick={showLess}
                  className="shadow-lg text-primary border-2 rounded-md border-accent px-5 py-1 transition-all duration-75 hover:scale-105"
                >
                  Show Less
                </button>
              </div> */}
              <div className="w-[200px] text-center mt-10">
                <button
                  onClick={handleLoadmoreClick}
                  className={`shadow-md ${
                    theme === "light"
                      ? "bg-[#00B0FF] text-white !important"
                      : "text-slate-700 bg-[#64FFDA]"
                  } rounded-full px-5 py-1 transition-all duration-75 hover:scale-105`}
                >
                  {/* {loadmoreClick ? "Show more" : "Show less"} */}
                  {loadmoreClick ? (
                    <HiChevronDoubleDown />
                  ) : (
                    <HiChevronDoubleUp />
                  )}
                </button>
              </div>
            </motion.div>
          </motion.section>

          {/* Tech Tools Section */}
          <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className={`shadow-md ${
              theme === "light" ? "bg-gray-200" : "bg-slate-800"
            } py-16 animate-fade-in-from-right`}
          >
            <div className="rounded-div">
              <motion.div
                variants={HeaderAnimate}
                className="flex items-center"
              >
                <h2
                  className={`text-transparent bg-clip-text ${
                    theme === "light"
                      ? "bg-gradient-to-r from-black to-gray-900"
                      : "bg-gradient-to-r from-white to-gray-400"
                  }  text-2xl font-bold text-center sm:text-4xl mr-3`}
                >
                  Tech Tools
                </h2>
                {/* <!-- The right line --> */}
                <div className="flex-grow h-[6px] rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
              </motion.div>

              {/* Tech tool container */}
              <div className="w-full grid justify-center md:grid-cols-2 lg:justify-items-center gap-8 lg:gap-5 py-5">
                {techtools.map((item) => {
                  return (
                    <motion.div
                      variants={scaleAnimate}
                      key={item.id}
                      className="w-full flex flex-col flex-wrap items-center p-5 rounded-xl gap-y-6 md:justify-between lg:min-h-full lg:justify-between"
                    >
                      <h4 className="text-primary font-bold text-xl md:text-2xl">
                        {item.title}
                      </h4>
                      <div className="flex p-2 rounded-md justify-center flex-wrap gap-x-8 gap-y-6 max-w-[250px]">
                        {item.toolsicons.map((ico, index) => (
                          <img
                            className="max-w-[55px]"
                            key={index}
                            src={ico}
                            alt=""
                          />
                        ))}
                      </div>
                      <p className="text-center text-primary md:text-lg">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
            id="contactme"
            // className="rounded-div mb-80 md:mb-96 animate-fade-in-from-right"
            className="rounded-div pt-16 mb-32 md:mb-66 animate-fade-in-from-right"
          >
            <motion.div variants={HeaderAnimate} className="flex items-center">
              <h2
                className={`text-transparent bg-clip-text ${
                  theme === "light"
                    ? "bg-gradient-to-r from-black to-gray-900"
                    : "bg-gradient-to-r from-white to-gray-400"
                }  text-2xl font-bold text-center sm:text-4xl mr-3`}
              >
                Contact
              </h2>
              {/* <!-- The right line --> */}
              <div className="flex-grow h-[6px] rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
            </motion.div>
            {/* form container */}
            <form className="flex flex-col gap-y-5 mt-4 md:gap-y-8">
              {/* Name div */}
              <motion.div
                variants={fadeBottomAnimate}
                className="text-primary space-y-1"
              >
                <label className="md:text-xl">Name</label>
                <input
                  className="w-full text-gray-700 rounded-md flex flex-col px-2 py-2 bg-gray-200 transition-all duration-300 hover:shadow-md outline-none"
                  type="text"
                  placeholder="Enter your name"
                />
              </motion.div>
              {/* Email div */}
              <motion.div
                variants={fadeBottomAnimate}
                className="text-primary space-y-1"
              >
                <label className="md:text-xl">Email</label>
                <input
                  className="w-full text-gray-700 rounded-md flex flex-col px-2 py-2 bg-gray-200 transition-all duration-300 hover:shadow-md outline-none"
                  type="text"
                  placeholder="Enter your email"
                />
              </motion.div>
              {/* Message div */}
              <motion.div
                variants={fadeBottomAnimate}
                className="text-primary space-y-1"
              >
                <label className="md:text-xl">Message</label>
                <textarea
                  className="w-full text-gray-700 h-[150px] rounded-md flex flex-col px-2 py-2 bg-gray-200 transition-all duration-300 hover:shadow-md outline-none"
                  type="textarea"
                  placeholder="Enter your message"
                />
              </motion.div>
              {/* <motion.button
                variants={fadeBottomAnimate}
                className="w-full text-xl text-gray-600 bg-accent py-3 rounded-md transition-all duration-300 hover:opacity-80  hover:font-bold outline-none"
              >
                SUBMIT
              </motion.button> */}
              <motion.div
                variants={fadeBottomAnimate}
                // className="w-full text-xl text-gray-600 bg-accent py-3 rounded-md transition-all duration-300 hover:opacity-80  hover:font-bold outline-none"
                className=""
              >
                <Submit />
              </motion.div>
            </form>
          </motion.section>

          {/* <div className="bg-white">
            <DarkModeToggler />
          </div> */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
