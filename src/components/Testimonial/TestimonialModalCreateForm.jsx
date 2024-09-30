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
import Spinner from "../Spinner";
import { MoonLoader } from "react-spinners";
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
      toast.warn("All fields can not be empty!");
    } else {
      addTestimonial({ name, message, category: cate, imageFile });
      if (isError) toast.error("Adding fail!");
      else {
        toast.success("Added!");
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
                  <div className="relative w-fit cursor-pointer overflow-hidden rounded-md border-2 border-sky-200 px-3 py-3 transition hover:opacity-75">
                    {fileUploading && (
                      <Spinner
                        loaderStyle={
                          "absolute top-0 left-0 bg-gray-900/70 w-full h-full flex justify-center items-center"
                        }
                        loaderColor={"#64ffda"}
                        Loader={MoonLoader}
                        size={30}
                      />
                    )}

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
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default TestimonialModalCreateForm;
