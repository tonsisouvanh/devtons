import React, { useContext, useEffect, useState } from "react";
import TestimonialFilter from "../components/Testimonial/TestimonialFilter";
import TestimonialSlider from "../components/Testimonial/TestimonialSlider";
import { ThemeContext } from "../context/ThemeContext";
import { categories } from "../data/index";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { TestimonialsContext } from "../context/TestimonialContext";
import TestimonialModalCreateForm from "../components/Testimonial/TestimonialModalCreateForm";
import { motion } from "framer-motion";
import { fadeFromLeft, fadeFromTopAnimate, scaleAnimate } from "../animation";
const Testimonial = () => {
  const { data } = useContext(TestimonialsContext);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const segments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [openModal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredTestimonials(
      selectedCategory === "All"
        ? data
        : data.filter(
            (testimonial) => testimonial.category === selectedCategory
          )
    );
  }, [selectedCategory, data]);

  return (
    <motion.div
      initial={"offscreen"}
      animate={"onscreen"}
      className="py-10 md:py-12 lg:py-24"
    >
      <div className="rounded-div flex flex-col gap-7 md:gap-14">
        <motion.div variants={fadeFromLeft} className="bg-transparent">
          <p className="text-gray-600">
            <Link to="/" className="text-primary hover:underline">
              HOME
            </Link>
            {segments.map((segment, index) => (
              <span key={segment}>
                <span className="mx-2"> / </span>
                <Link
                  to={`/${segments.slice(0, index + 1).join("/")}`}
                  className="uppercase text-accent hover:underline"
                >
                  {segment}
                </Link>
              </span>
            ))}
          </p>
        </motion.div>
        <motion.div
          variants={fadeFromTopAnimate}
          className="space-y-5 text-center"
        >
          <h1 className="text-2xl font-[500] text-primary md:text-4xl lg:text-5xl">
            Friendship and collaboration at its finest
          </h1>
          <h1
            className={`bg-clip-text text-transparent ${
              theme === "light"
                ? "bg-gradient-to-r from-black to-gray-900"
                : "bg-gradient-to-r from-white to-gray-400"
            } text-center text-xl font-[400] md:text-3xl lg:text-4xl`}
          >
            Hear what they have to say
          </h1>
        </motion.div>

        <motion.div variants={fadeFromTopAnimate}>
          <TestimonialFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>
        <motion.button
          variants={scaleAnimate}
          onClick={() => setOpenModal(true)}
          className="group w-fit overflow-hidden whitespace-nowrap border border-accent px-4 py-2 text-sm text-primary transition duration-500 hover:scale-110 hover:bg-accent sm:text-[1.1rem]"
        >
          <span className="transition group-hover:text-black">
            Write a Review
          </span>
        </motion.button>

        <motion.div variants={scaleAnimate} className="">
          <TestimonialSlider filteredTestimonials={filteredTestimonials} />
        </motion.div>

        {openModal && (
          <TestimonialModalCreateForm
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Testimonial;
