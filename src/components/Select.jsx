import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";



const Select = ({ options, setCate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setCate(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="w-full cursor-pointer rounded border border-gray-300 bg-gray-100 bg-opacity-80 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500"
        tabIndex={1}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? (
          <div className="flex items-center justify-between">
            {options.filter(
              (op) =>
                op.toString().toUpperCase() === selectedValue.toUpperCase()
            )}
            <IoIosArrowDown className="text-gray-700" />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4 text-gray-700">
            <span>Select</span>
            <IoIosArrowDown className="text-gray-700" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white text-black">
          {options.map((option) => (
            <div
              key={option}
              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
