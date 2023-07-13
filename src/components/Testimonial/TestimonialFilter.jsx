import React from "react";

const TestimonialFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-4 mb-4">
      <span className="text-primary">Filter by category:</span>
      {categories.map((category) => (
        <button
          key={category}
          className={`${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-3 py-1 rounded-md`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TestimonialFilter;
