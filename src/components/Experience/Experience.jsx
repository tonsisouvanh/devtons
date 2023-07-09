import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { HeaderAnimate } from "../../animation";

function Experience({ theme }) {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      id="experieces"
      className="bg-gray-800 text-white py-12"
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
            Experience
          </h2>
          {/* <h1 class="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Projects
              </h1> */}
          {/* <!-- The right line --> */}
          {/* <div className="flex-grow h-[6px] rounded-full bg-accent"></div> */}
          <div className="flex-grow h-[6px] rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
        </motion.div>
        <div className="mt-10 flex flex-col md:flex-row md:space-x-8">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                <FaBriefcase />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">2021 - Present</h3>
                <p className="text-sm">Senior Web Developer at ABC Inc.</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm mb-4 pl-16">
              <li>
                Developed and maintained web applications using React, Tailwind,
                and Node.js
              </li>
              <li>
                Led a team of five developers and coordinated with clients and
                stakeholders
              </li>
              <li>
                Implemented best practices for code quality, performance, and
                security
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                <FaBriefcase />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">2019 - 2021</h3>
                <p className="text-sm">Web Developer at XYZ Ltd.</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm mb-4 pl-16">
              <li>
                Developed and maintained web applications using Angular,
                Bootstrap, and Express.js
              </li>
              <li>
                Collaborated with other developers and designers using Git and
                Agile methodologies
              </li>
              <li>
                Tested and debugged web applications using Jest, Cypress, and
                Chrome DevTools
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex-shrink-0 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                <FaGraduationCap />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">2017 - 2019</h3>
                <p className="text-sm">
                  Bachelor of Science in Computer Science at LMN University
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm mb-4 pl-16">
              <li>
                Learned the fundamentals of programming, data structures,
                algorithms, and databases
              </li>
              <li>
                Completed various projects using HTML, CSS, JavaScript, and
                jQuery
              </li>
              <li>
                Graduated with honors and received the Dean's Award for Academic
                Excellence
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
