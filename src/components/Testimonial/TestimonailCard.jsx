import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import replaceavatar from "../../assets/images/replacedavatar.png";
const TestimonialCard = ({ testimonial }) => {
  const { theme } = useContext(ThemeContext);
  const { name, message, category } = testimonial;
  if (!testimonial || !testimonial.createdAt) {
    return <h1>Loading</h1>;
  }
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-300"
      } flex h-full w-full flex-col justify-between gap-3 rounded-md p-6 shadow-md`}
    >
      <div>
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-md"
            src={testimonial.imageUrl || replaceavatar}
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
      </div>
      <div className=" items-center text-sm text-gray-500 md:text-lg">
        {testimonial?.createdAt &&
          new Date(testimonial.createdAt.seconds * 1000).toLocaleString()}
      </div>
    </div>
  );
};

export default TestimonialCard;
