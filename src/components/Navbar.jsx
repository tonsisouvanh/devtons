import { useContext } from "react";

import { AiOutlineFolder, AiOutlineMessage } from "react-icons/ai";
import { MdFaceRetouchingNatural } from "react-icons/md";

import { Link } from "react-router-dom";
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
];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* Top Navbar Container */}
      <nav
        className={`border-b ${
          theme === "light" ? "bg-[#F5F5F5]" : "bg-[#0F1C2E]"
        } border-bColor shadow-sm sticky top-0 left-0 z-[100] animate-[fadeTop_0.6s_linear]`}
      >
        {/* Menu Container */}
        <div className="rounded-div flex items-center justify-between h-[70px]">
          {/* Logo */}
          <div>
            <Link to="/">
              <Logo />
              {/* <h1
                className={`text-2xl lg:text-3xl ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                DEVTONS.
              </h1> */}
            </Link>
          </div>

          {/* Menu container */}

          <div className="hidden text-primary mx-5 md:flex md:flex-1 space-x-7">
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
                  <button className="relative group whitespace-nowrap min-w-[100px] py-1 text-base outline-none">
                    {i.text}
                    {/* <span className="absolute opacity-0 w-0 h-[2px] bg-white transition-all duration-300 left-0 top-0 group-hover:opacity-100 group-hover:w-full"></span>
                    <span className="absolute opacity-0 w-0 h-[2px] bg-white transition-all duration-300 right-0 bottom-0 group-hover:opacity-100 group-hover:w-full"></span> */}
                    <span
                      className={`absolute w-full h-[2px] left-0 top-0 ${
                        theme === "light" ? "bg-[#00B0FF]" : "bg-[#64FFDA]"
                      }  opacity-30 transition-all duration-300 transform group-hover:h-[100%]`}
                    ></span>
                  </button>
                </ScrollLink>
              );
            })}

            {/* <ScrollLink
              activeClass="text-accent font-bold"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="relative group whitespace-nowrap min-w-[100px] text-base outline-none">
                About Me
                <span className="absolute opacity-0 w-0 h-[2px] bg-white transition-all duration-300 left-0 top-0 group-hover:opacity-100 group-hover:w-full"></span>
                <span className="absolute opacity-0 w-0 h-[2px] bg-white transition-all duration-300 right-0 bottom-0 group-hover:opacity-100 group-hover:w-full"></span>
              </button>
            </ScrollLink>
            <ScrollLink
              activeClass="text-accent font-bold"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="whitespace-nowrap min-w-[100px] text-base outline-none">
                Projects
              </button>
            </ScrollLink>
            <ScrollLink
              activeClass="text-accent font-bold"
              to="contactme"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="whitespace-nowrap min-w-[100px] text-base outline-none">
                Contact
              </button>
            </ScrollLink> */}
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
        className={`text-primary rouded-div ${
          theme === "light" ? "bg-[#F5F5F5]" : "bg-[#0F1C2E]"
        } border-t border-bColor flex items-center justify-around px-3 py-2 fixed w-full left-0 bottom-0 transition-all duration-100 md:bottom-[-400px] z-50`}
      >
        {/* <div className='text-primary flex flex-col items-center cursor-pointer w-[80px]'> */}
        <ScrollLink
          className="flex flex-col items-center cursor-pointer w-[80px]"
          activeClass="text-accent font-bold"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <MdFaceRetouchingNatural size={20} />
          <span className="text-sm">About Me</span>
        </ScrollLink>
        {/* </div> */}

        {/* <div className='text-primary flex flex-col items-center cursor-pointer w-[80px]'> */}
        <ScrollLink
          className="flex flex-col items-center cursor-pointer w-[80px]"
          activeClass="text-accent font-bold"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <AiOutlineFolder size={20} />
          <span className="text-sm">Projects</span>
        </ScrollLink>
        {/* </div> */}

        {/* <div className='text-primary flex flex-col items-center cursor-pointer w-[80px]'> */}
        <ScrollLink
          className="flex flex-col items-center cursor-pointer w-[80px]"
          activeClass="text-accent font-bold"
          to="contactme"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <AiOutlineMessage size={20} />
          <span className="text-sm">Contact</span>
        </ScrollLink>
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar;
