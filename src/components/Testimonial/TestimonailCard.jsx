import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const TestimonialCard = ({ testimonial }) => {
  const { theme } = useContext(ThemeContext);
  const { name, message, category } = testimonial;

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-300"
      } flex h-fit w-full flex-col gap-3 rounded-md p-6 shadow-md`}
    >
      <div className="flex items-center gap-4">
        <img
          className="h-10 w-10 rounded-md"
          src={testimonial.imageUrl}
          alt=""
        />
        <div className=" text-sm md:text-lg">
          <h3 className="font-bold text-primary">{name}</h3>
          <p className="text-primary ">{category}</p>
        </div>
      </div>
      <p className="mb-4 text-sm font-[200] text-primary md:text-lg">
        {message}
      </p>
      <div className=" items-center text-sm text-gray-500 md:text-lg">
        {Date().toString().slice(0, 15)}
      </div>
    </div>
  );
};

export default TestimonialCard;
