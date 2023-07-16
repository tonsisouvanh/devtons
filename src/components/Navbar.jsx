import { useContext } from "react";

import { AiOutlineFolder, AiOutlineMessage } from "react-icons/ai";
import { MdFaceRetouchingNatural } from "react-icons/md";

// import logoLight from "../assets/images/devtons-light.png";
// import logoDark from "../assets/images/devtons-dark.png";
// import ThemeToggle from "./ThemToggle";

import { ThemeContext } from "../context/ThemeContext";

import { Link as ScrollLink } from "react-scroll";
import DarkModeToggler from "./DarkModeToggler";
import Logo from "./Logo/Logo";

const navItems = [
  {
    activeClass: "text-accent font-bold",
    to: "about",
    text: "About Me",
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
  },
  {
    activeClass: "text-accent font-bold",
    to: "projects",
    text: "Projects",
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
  },
  {
    activeClass: "text-accent font-bold",
    to: "contactme",
    text: "Contact",
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
  },
  {
    activeClass: "text-accent font-bold",
    to: "testimonial",
    text: "Reviews",
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
  },
];

const mobileNavItems = [
  {
    icon: <MdFaceRetouchingNatural size={20} />,
    text: "About Me",
    scrollLink: "about",
  },
  {
    icon: <AiOutlineFolder size={20} />,
    text: "Projects",
    scrollLink: "projects",
  },
  {
    icon: <AiOutlineMessage size={20} />,
    text: "Contact",
    scrollLink: "contactme",
  },
  {
    icon: <AiOutlineMessage size={20} />,
    text: "Testimonial",
    scrollLink: "testimonial",
  },
];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* Top Navbar Container */}
      <nav
        className={`border-b py-2 ${
          theme === "light" ? "bg-[#F5F5F5]" : "bg-[#0F1C2E]"
        } sticky top-0 left-0 z-[100] animate-[fadeTop_0.6s_linear] border-bColor shadow-sm`}
      >
        {/* Menu Container */}
        <div className="rounded-div flex h-[45px] items-center justify-between md:h-[50px]">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Menu container */}
          <div className="ml-12 hidden space-x-10 text-primary md:flex md:flex-1">
            {navItems.map((i, index) => {
              return (
                <ScrollLink
                  // activeClass="text-accent font-bold"
                  to={i.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={index}
                >
                  <button className="group relative min-w-[100px] whitespace-nowrap py-1 text-[1rem] outline-none">
                    {i.text}
                    <span
                      className={`absolute left-0 top-0 h-[2px] w-full ${
                        theme === "light" ? "bg-[#00B0FF]" : "bg-[#64FFDA]"
                      }  transform opacity-30 transition-all duration-300 group-hover:h-[100%]`}
                    ></span>
                  </button>
                </ScrollLink>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-7">
            {/* <ThemeToggle /> */}
            <DarkModeToggler />
          </div>
        </div>
      </nav>

      {/* Bottom Navbar Container */}
      <div
        className={`rouded-div text-primary ${
          theme === "light" ? "bg-[#F5F5F5]" : "bg-[#0F1C2E]"
        } fixed left-0 bottom-0 z-50 flex w-full items-center justify-around border-t border-bColor px-3 py-2 transition-all duration-100 md:bottom-[-400px]`}
      >
        {mobileNavItems.map((item, index) => (
          <ScrollLink
            key={index}
            className="flex w-[80px] cursor-pointer flex-col items-center"
            activeClass="text-accent font-bold"
            to={item.scrollLink}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {item.icon}
            <span className="text-sm">{item.text}</span>
          </ScrollLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
