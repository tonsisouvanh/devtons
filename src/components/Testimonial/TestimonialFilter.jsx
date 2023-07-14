import React from "react";

const TestimonialFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center relative gap-4 mb-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`text-sm md:text-lg outline-none ${
            selectedCategory === category
              ? "bg-cyan-700 text-white"
              : "bg-gray-200 text-gray-700"
          } px-3 py-1 rounded-md whitespace-nowrap`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TestimonialFilter;
