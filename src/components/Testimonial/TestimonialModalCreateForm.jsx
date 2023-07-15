import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../animation";
import Select from "../Select";
import { categories } from "../../data";
import { TestimonialsContext } from "../../context/TestimonialContext";
import { ToastContainer, toast } from "react-toastify";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const TestimonialModalCreateForm = ({ openModal, setOpenModal }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cate, setCate] = useState("");
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [fileUploading, setFileUploading] = useState(false);

  const { addTestimonial, isLoading, isError } =
    useContext(TestimonialsContext);

  const handleSubmit = () => {
    if (!name || !cate || !message) {
      toast.warn("Cannot be empty!");
    } else {
      addTestimonial({ name, message, category: cate, imageFile });
      if (isError) toast.error("Adding fail!");
      else {
        toast.success("Added!");
        console.log(name, message, cate, imageFile);
        setOpenModal(false);
        navigate("/testimonial");
        setName("");
        setMessage("");
        setImageFile(null);
        document.body.style.overflowY = "";
      }
    }
  };

  const handleImageUpload = (event) => {
    setFileUploading(true);

    setTimeout(() => {
      const file = event.target.files[0];
      setImageFile(file);
      setFileUploading(false);
    }, 3000);
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

      <AnimatePresence mode="wait">
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
                  <div className="flex-auto p-2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="text-sm leading-7 text-white"
                      >
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-80 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>
                  <div className="flex-auto p-2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="text-sm leading-7 text-white"
                      >
                        Company/Organization
                      </label>
                      <Select
                        options={categories.filter((op) => op !== "All")}
                        setCate={setCate}
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
                      required
                      id="message"
                      name="message"
                      placeholder=""
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-80 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500"
                    ></textarea>
                  </div>
                  <div className="w-fit cursor-pointer rounded-md border-2 border-sky-200 px-2 py-1">
                    <div className="flex items-center gap-1">
                      <label className="cursor-pointer" htmlFor="file">
                        Upload Image
                      </label>
                      <IoMdCloudUpload className="text-xl" />
                    </div>
                    <input
                      type="file"
                      id="file"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    onClick={handleSubmit}
                    disabled={fileUploading || isLoading ? true : false}
                    className={`${
                      fileUploading || isLoading
                        ? "cursor-wait bg-gray-500 hover:bg-gray-500"
                        : null
                    } mx-auto flex rounded border-0 bg-sky-500 py-2 px-8 text-lg text-white transition hover:bg-sky-600 focus:outline-none`}
                  >
                    SUBMIT
                  </button>
                </div>
                <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
                  <p className="text-sky-500">tonsisouvanh_1996@hotmail.com</p>
                  <p className="my-5 leading-normal">
                    CS Studnet
                    {/* <br>Saint Cloud, MN 56301 */}
                  </p>
                  <span className="inline-flex">
                    <p className="text-gray-500">
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
                    </p>
                    <p className="ml-4 text-gray-500">
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
                    </p>
                    <p className="ml-4 text-gray-500">
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
                    </p>
                    <p className="ml-4 text-gray-500">
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
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default TestimonialModalCreateForm;
