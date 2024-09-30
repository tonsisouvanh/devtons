import React from "react";
// icon / image / svg
import {
  tiktok,
  facebook,
  github,
  twitter,
  githubWhite,
} from "../../assets/images/index";
import devtons from "../../assets/images/devtons.png";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import CodeButton from "../Buttons/CodeButton";

const Hero = ({ theme }) => {
  return (
    <>
      <div className="relative overflow-hidden shadow-lg">
        <div className="absolute top-0 -right-32 -z-20 h-full w-full">
          <BackgroundAnimation />
        </div>

        <section
          id="about"
          className="rounded-div relative flex flex-col items-center justify-center space-y-6 p-6 md:flex-row md:justify-between md:gap-5 md:p-12 lg:gap-20"
        >
          {/* Image */}
          <div className="relative -z-20 max-w-[12rem] animate-[scaleUp_0.5s_linear] overflow-hidden sm:min-w-[17rem] md:min-w-[22rem] lg:min-w-[27rem]">
            <img className="h-full w-full object-cover" src={devtons} alt="" />
          </div>

          {/* Intro Header */}
          <div className="flex flex-col items-center justify-center gap-2 space-y-2 text-[2rem] sm:space-y-4 sm:text-5xl md:space-y-6 md:text-6xl">
            <h1 className="flex animate-[fadeLeft_0.8s_linear] text-primary">
              <span className="animate-[wiggle_1s_ease-in-out_infinite]">
                👋🏻
              </span>
              Hi,
            </h1>
            <h1 className="animate-[fadeLeft_0.9s_linear] text-primary">
              I'm <span className="text-accent">Tons</span>
            </h1>
            <p className="animate-[fadeLeft_1.1s_linear] text-center text-[1rem] leading-8 text-primary md:text-[1.4rem]">
              I have more than a year of experience as a website developer, and
              I mainly use ReactJS/NextJS for building web applications and
              Nodejs(Express) for the backend.
            </p>
            {/* <h1 className="text-primary text-xl md:text-[1.1rem] leading-8 animate-[fadeLeft_1.1s_linear]">
              React JS Developer Creating Engaging Web Experiences
            </h1> */}
            <CodeButton />
          </div>
          {/* Social contact */}
          <div className="flex w-full items-center justify-center gap-x-4 md:hidden">
            <a
              href="https://www.tiktok.com/foryou?lang=en"
              target="blank"
              rel="noreferrer"
            >
              <img
                className="w-[35px] animate-[scaleUp_0.5s_linear] shadow-lg transition-transform hover:scale-125"
                src={tiktok}
                alt=""
              />
            </a>
            <a
              href="https://www.facebook.com/ton.sisouvanh"
              target="blank"
              rel="noreferrer"
            >
              <img
                className="w-[35px] animate-[scaleUp_0.7s_linear] shadow-lg transition-transform hover:scale-125"
                src={facebook}
                alt=""
              />
            </a>
            <a
              href="https://github.com/tonsisouvanh"
              target="blank"
              rel="noreferrer"
            >
              <img
                className="w-[35px] animate-[scaleUp_0.9s_linear] shadow-lg transition-transform hover:scale-125"
                src={theme === "dark" ? githubWhite : github}
                alt=""
              />
            </a>
            <a
              href="https://www.tiktok.com/en/"
              target="blank"
              rel="noreferrer"
            >
              <img
                className="w-[35px] animate-[scaleUp_1.1s_linear] shadow-lg transition-transform hover:scale-125"
                src={twitter}
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
