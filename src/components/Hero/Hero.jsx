import React from "react";
// icon / image / svg
import {
  tiktok,
  facebook,
  github,
  twitter,
  githubWhite,
} from "../../assets/images/idnex";
import devtons from "../../assets/images/devtons.png";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import CodeButton from "../Buttons/CodeButton";

const Hero = ({ theme }) => {
  return (
    <>
      <div className="relative shadow-lg overflow-hidden">
        <div className="w-full h-full absolute top-0 -right-32 -z-20">
          <BackgroundAnimation />
        </div>

        <section
          id="about"
          className="relative rounded-div flex flex-col p-6 justify-center items-center space-y-6 md:flex-row md:p-12 md:gap-5 lg:gap-20 md:justify-between"
        >
          {/* Image */}
          <div className="relative max-w-[12rem] overflow-hidden sm:min-w-[17rem] md:min-w-[22rem] lg:min-w-[27rem] animate-[scaleUp_0.5s_linear] -z-20">
            <img className="w-full h-full object-cover" src={devtons} alt="" />
          </div>

          {/* Intro Header */}
          <div className="flex flex-col items-center justify-center gap-2 space-y-2 text-[2rem] sm:text-5xl sm:space-y-4 md:space-y-6 md:text-6xl">
            <h1 className="flex text-primary animate-[fadeLeft_0.8s_linear]">
              <span className="animate-[wiggle_1s_ease-in-out_infinite]">
                👋🏻
              </span>
              Hi,
            </h1>
            <h1 className="text-primary animate-[fadeLeft_0.9s_linear]">
              I'm <span className="text-accent">Tons</span>
            </h1>
            <p className="text-primary text-center text-[1rem] leading-8 animate-[fadeLeft_1.1s_linear] md:text-[1.1rem]">
              I have more than a year of experience as a website developer, and
              I mainly use React for building web applications and Express for
              the backend. As a website developer, I use React for web app
              development and Express for the backend, and I have over a year of
              experience.
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
                className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_0.5s_linear]"
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
                className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_0.7s_linear]"
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
                className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_0.9s_linear]"
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
                className="w-[35px] shadow-lg transition-transform hover:scale-125 animate-[scaleUp_1.1s_linear]"
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
