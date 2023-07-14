import React, { useContext, useEffect, useState } from "react";
import TestimonialFilter from "../components/Testimonial/TestimonialFilter";
import TestimonialSlider from "../components/Testimonial/TestimonialSlider";
import { ThemeContext } from "../context/ThemeContext";
import { categories, testimonialsData } from "../data/index";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const { theme } = useContext(ThemeContext);

  const location = useLocation();
  const segments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const [testimonials, setTestimonials] = useState(testimonialsData);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.category === selectedCategory
        );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-10 md:py-12 lg:py-24">
      <div className="rounded-div flex flex-col gap-7 md:gap-14">
        <div className="bg-transparent">
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
        </div>

        <div className="space-y-5 text-center">
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
        </div>

        <TestimonialFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <TestimonialSlider testimonials={filteredTestimonials} />
      </div>
    </div>
  );
};

export default Testimonial;
