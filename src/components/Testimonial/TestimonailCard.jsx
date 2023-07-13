import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, company, category, content, rating } = testimonial;

  return (
    <div className="bg-transparent shadow-md p-6 rounded-md w-full h-full">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp"
          alt=""
        />
        <h3 className="text-lg font-bold mb-2 text-primary">{name}</h3>
      </div>
      <p className="text-gray-500 mb-2">{company}</p>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <span className="text-yellow-500 text-lg mr-1">
          {"★".repeat(Math.floor(rating))}
        </span>
        <span className="text-gray-400 text-sm">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
