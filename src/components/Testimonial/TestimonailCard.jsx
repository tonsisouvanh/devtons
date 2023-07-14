import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const TestimonialCard = ({ testimonial }) => {
  const { theme } = useContext(ThemeContext);
  const { name, company, category, content, rating } = testimonial;

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-300"
      } shadow-md p-6 rounded-md w-full h-fit flex flex-col gap-3`}
    >
      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-md"
          src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart"
          alt=""
        />
        <div className=" text-sm md:text-lg">
          <h3 className="font-bold text-primary">{name}</h3>
          <p className="text-primary ">{company}</p>
        </div>
      </div>
      <p className="text-primary mb-4 text-sm md:text-lg font-[200]">
        {content}
      </p>
      <div className=" text-gray-500 text-sm md:text-lg items-center">
        {Date().toString().slice(0, 15)}
      </div>
    </div>
  );
};

export default TestimonialCard;
