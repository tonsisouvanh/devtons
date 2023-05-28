import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkModeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className={`w-16 h-7 relative block bg-gray-300 rounded-full shadow-md cursor-pointer transition duration-300 ${
          isChecked ? "bg-white" : ""
        }`}
      >
        <div
          className={`w-5 h-5 absolute top-1 left-1 rounded-full shadow-md transition duration-300 ${
            isChecked
              ? "transform translate-x-[35px]"
              : "transform translate-x-0"
          }`}
          style={{
            background: !isChecked
              ? "linear-gradient(180deg, #777, #3a3a3a )"
              : "linear-gradient(180deg, #ffcc89, #d8860b)",
          }}
        ></div>
      </label>
      <div
        className={` bg-white absolute top-1 left-1 transition duration-300 ${
          isChecked ? "bg-gray-800" : "bg-yellow-300"
        }`}
      ></div>
      <HiMoon
        className={`h-4 w-4 absolute top-[5px] left-[5px] z-10 transition duration-300 ${
          isChecked ? "text-gray-400" : "text-gray-300"
        }`}
      ></HiMoon>
      <HiSun
        className={`h-4 w-4 absolute top-[6px] right-[7px] z-10 transition duration-300 ${
          isChecked ? "text-gray-700" : "text-gray-400"
        }`}
      ></HiSun>
    </div>
  );
};

export default DarkModeToggler;
