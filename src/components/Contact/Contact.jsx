import React from "react";
import { HeaderAnimate, fadeBottomAnimate } from "../../animation/index";
import { motion } from "framer-motion";

import Submit from "../../components/SubmitBtn/Submit";
const Contact = ({theme}) => {
  return (
    <>
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
    </>
  );
};

export default Contact;