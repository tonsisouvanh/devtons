import React, { useContext, useState } from "react";

import {
  HiChevronDoubleDown,
  HiChevronDoubleUp,
} from "../../assets/icon/IconLibrary";
import ProjectCard from "../../components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeaderAnimate,
  DescAnimate,
  projectsDivAnimate,
  scaleAnimate,
} from "../../animation/index";

import { ProjectsContext } from "../../context/ProjectsContext";

const Projects = ({ theme }) => {
  const { data, isLoading } = useContext(ProjectsContext);
  const [loadmoreClick, setLoadmoreClick] = useState(true);
  const [noOfItems, setNoOfItems] = useState(4);


  const loadMore = () => {
    let length = data?.length;
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

  const sliceItems = data.slice(0, noOfItems);

  if (isLoading) {
    return <h1>Loading data</h1>;
  }

  return (
    <>
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
            Below, you'll find some of my personal and client projects, most of
            which were created for front-end practice and school assignments
          </p>
        </motion.div>
        {/* project cards container */}
        <motion.div
          variants={projectsDivAnimate}
          className="flex flex-col mt-10 gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-10"
        >
          <AnimatePresence>
            {sliceItems && sliceItems.length > 0 ? (
              sliceItems.map((item) => (
                <ProjectCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  desc={item.desc}
                  imgs={item.images}
                  techStack={item.techStack}
                  github={item.github}
                  website={item.website}
                />
              ))
            ) : (
              <p>No projects to display</p>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          variants={scaleAnimate}
          className="flex text-[0.8em] md:text-[1em] items-center justify-center gap-5"
        >
          <div className="w-[200px] text-center mt-10">
            <button
              onClick={handleLoadmoreClick}
              className={`shadow-md ${
                theme === "light"
                  ? "bg-[#00B0FF] text-white !important"
                  : "text-slate-700 bg-[#64FFDA]"
              } rounded-full px-5 py-1 transition-all duration-75 hover:scale-105`}
            >
              {loadmoreClick ? <HiChevronDoubleDown /> : <HiChevronDoubleUp />}
            </button>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Projects;
