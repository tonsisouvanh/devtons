import React from "react";
import { techtools } from "../../data/index";
import { HeaderAnimate, scaleAnimate } from "../../animation/index";
import { motion } from "framer-motion";

const TechTools = ({theme}) => {
  return (
    <>
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
          <motion.div variants={HeaderAnimate} className="flex items-center">
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
                  className={`"w-full ${theme === 'dark' && 'bg-gray-300'} flex flex-col flex-wrap items-center p-5 rounded-xl gap-y-6 md:justify-between lg:min-h-full lg:justify-between"`}
                >
                  <h4 className=" font-bold text-xl md:text-2xl">
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
                  <p className="text-center  md:text-lg">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default TechTools;
