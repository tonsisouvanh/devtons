import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { HeaderAnimate, fadeIn } from "../../animation";
import { Link } from "react-router-dom";
import TestimonialModalCreateForm from "./TestimonialModalCreateForm";
import { TestimonialsContext } from "../../context/TestimonialContext";
import Spinner from "../Spinner";
import { MoonLoader } from "react-spinners";
import { replacedAvatar } from "../../assets/images";

const TestimonialSection = ({ theme }) => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading } = useContext(TestimonialsContext);

  const testimonials = data;
  const testimonialsToShow = testimonials.filter((item) => item.isShow);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "";
  }, [openModal]);

  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      id="testimonial"
      className="bg-dark rounded-div animate-fade-in-from-right space-y-10 py-10 text-white md:py-28"
    >
      <motion.div variants={HeaderAnimate} className="flex items-center">
        <h2
          className={`bg-clip-text text-transparent ${
            theme === "light"
              ? "bg-gradient-to-r from-black to-gray-900"
              : "bg-gradient-to-r from-white to-gray-400"
          }  mr-3 text-center text-2xl font-bold sm:text-4xl`}
        >
          What People Are Saying
        </h2>
        <div className="h-[6px] flex-grow rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center">
          <Spinner Loader={MoonLoader} size={40} />
        </div>
      ) : (
        <motion.div variants={fadeIn} className="mt-8">
          <h3 className="mb-4 text-lg font-[200] md:text-2xl">
            Read testimonials from my satisfied people that I have worked with
          </h3>
          <div className="mt-20 grid gap-20 md:grid-cols-2 md:gap-y-20 md:gap-x-10 lg:grid-cols-3 lg:gap-10">
            {data.length <= 0 && (
              <p className="text-primary">No any reviews created</p>
            )}
            {testimonialsToShow.map((testimonial, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-300"
                } flex h-fit w-full flex-col gap-3 rounded-md p-6 shadow-md`}
              >
                <img
                  className="mx-auto -mt-[4rem] h-[6rem] w-[6rem] rounded-full"
                  src={testimonial.imageUrl || replacedAvatar}
                  alt=""
                />

                <p className="mb-4 text-center text-sm font-[200] text-primary md:text-lg">
                  {testimonial.message}
                </p>

                <div className="text-center text-sm md:text-lg">
                  <h3 className="text-lg font-bold text-primary md:text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary ">{testimonial.category}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="flex w-full items-center justify-center gap-7">
        <Link
          to="/testimonial"
          className="group relative overflow-hidden whitespace-nowrap border border-accent px-4 py-2 text-sm text-primary transition duration-500 hover:scale-110 hover:bg-accent sm:text-[1.1rem]"
        >
          <span className="transition group-hover:text-black">
            See all Reviews
          </span>
        </Link>
        <button
          onClick={() => setOpenModal(true)}
          className="group relative overflow-hidden whitespace-nowrap border border-accent px-4 py-2 text-sm text-primary transition duration-500 hover:scale-110 hover:bg-accent sm:text-[1.1rem]"
        >
          <span className="transition group-hover:text-black">
            Write a Review
          </span>
        </button>
      </div>
      {/* Testimonial Form */}
      <div className="">
        {openModal && (
          <TestimonialModalCreateForm
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
