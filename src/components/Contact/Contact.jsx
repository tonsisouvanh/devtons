import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { HeaderAnimate, fadeBottomAnimate } from "../../animation/index";
import { motion } from "framer-motion";

import Submit from "../../components/SubmitBtn/Submit";

import { ToastContainer, toast } from "react-toastify";

const Contact = ({ theme }) => {
  const [isSent, setIsSent] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(false);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          e.target.reset();
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
          toast.error("Sending email fail!");
          setIsSent(true);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.1 }}
        id="contactme"
        // className="rounded-div mb-80 md:mb-96 animate-fade-in-from-right"
        className="rounded-div md:mb-66 animate-fade-in-from-right mb-32 pt-16"
      >
        <motion.div variants={HeaderAnimate} className="flex items-center">
          <h2
            className={`bg-clip-text text-transparent ${
              theme === "light"
                ? "bg-gradient-to-r from-black to-gray-900"
                : "bg-gradient-to-r from-white to-gray-400"
            }  mr-3 text-center text-2xl font-bold sm:text-4xl`}
          >
            Contact
          </h2>
          {/* <!-- The right line --> */}
          <div className="h-[6px] flex-grow rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
        </motion.div>
        {/* form container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col gap-y-5 md:gap-y-8"
        >
          <motion.div className="flex flex-col items-center justify-between gap-4  md:flex-row md:gap-10">
            {/* Name div */}
            <motion.div
              variants={fadeBottomAnimate}
              className="w-full space-y-1 text-primary"
            >
              <label className="md:text-xl">Name</label>
              <input
                className="flex w-full flex-col rounded-md bg-gray-200 px-2 py-2 text-gray-700 outline-none transition-all duration-300 hover:shadow-md"
                type="text"
                placeholder="Enter your name"
                required
                name="from_name"
              />
            </motion.div>
            {/* Email div */}
            <motion.div
              variants={fadeBottomAnimate}
              className="w-full space-y-1 text-primary"
            >
              <label className="md:text-xl">Email</label>
              <input
                className="flex w-full flex-col rounded-md bg-gray-200 px-2 py-2 text-gray-700 outline-none transition-all duration-300 hover:shadow-md"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
            </motion.div>
          </motion.div>
          {/* Message div */}
          <motion.div
            variants={fadeBottomAnimate}
            className="space-y-1 text-primary"
          >
            <label className="md:text-xl">Message</label>
            <textarea
              className="flex h-[150px] w-full flex-col rounded-md bg-gray-200 px-2 py-2 text-gray-700 outline-none transition-all duration-300 hover:shadow-md"
              type="textarea"
              placeholder="Enter your message"
              required
              name="message"
            />
          </motion.div>
          <motion.div
            variants={fadeBottomAnimate}
            // className="w-full text-xl text-gray-600 bg-accent py-3 rounded-md transition-all duration-300 hover:opacity-80  hover:font-bold outline-none"
            className=""
          >
            <Submit isSent={isSent} />
          </motion.div>
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
