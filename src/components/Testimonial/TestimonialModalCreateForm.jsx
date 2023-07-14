import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../animation";
const TestimonialModalCreateForm = ({ openModal, setOpenModal }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {openModal && (
          <motion.section
            variants={fadeIn}
            initial={"offscreen"}
            animate={"onscreen"}
            exit={{
              y: -900,
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="fixed inset-0 z-[101] h-screen w-screen bg-black/95 pt-20 text-white"
          >
            <AiOutlineClose
              className="absolute top-5 right-5 cursor-pointer text-2xl sm:top-14 sm:right-14 sm:text-3xl"
              onClick={() => setOpenModal(false)}
            />
            <div className="flex h-full w-full flex-col items-center justify-center py-20 px-10">
              <div className="mb-12 flex w-full flex-col text-center">
                <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
                  Write your testimonial
                </h1>
                <p className="mx-auto text-sm leading-relaxed sm:text-base lg:w-2/3">
                  I would like to know how you think about me.
                </p>
              </div>
              <div className="mx-auto md:w-2/3 lg:w-1/2">
                <div className="-m-2 flex flex-wrap">
                  <div className="flex w-full flex-col md:flex-row">
                    <div className="w-full p-2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="text-sm leading-7 text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                    <div className="w-full p-2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="text-sm leading-7 text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="text-sm leading-7 text-white"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <button className="mx-auto flex rounded border-0 bg-sky-500 py-2 px-8 text-lg text-white transition hover:bg-sky-600 focus:outline-none">
                      SUBMIT
                    </button>
                  </div>
                  <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
                    <a className="text-sky-500">
                      tonsisouvanh_1996@hotmail.com
                    </a>
                    <p className="my-5 leading-normal">
                      CS Studnet
                      {/* <br>Saint Cloud, MN 56301 */}
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default TestimonialModalCreateForm;
