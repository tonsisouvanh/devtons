import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "../../assets/icon/IconLibrary";
import mysetup from "../../assets/images/mysetup.jpg";
const About = ({ theme }) => {
  return (
    <>
      <section
        className={`shadow-md ${
          theme === "light" ? "bg-gray-200" : "bg-slate-800"
        } animate-[fadeBottom_1s_linear] py-[3.75rem] md:py-32`}
      >
        <div className="rounded-div flex flex-col gap-5">
          <div className="flex items-center">
            {/* <!-- The left line --> */}
            <h2
              className={`mx-3 w-full bg-clip-text text-center text-2xl font-bold text-transparent sm:text-4xl ${
                theme === "light"
                  ? "bg-gradient-to-r from-black to-gray-900"
                  : "bg-gradient-to-r from-white to-gray-400"
              }`}
            >
              About Me
              <div className="mx-auto mt-5 h-[0.2rem] w-[2.5rem] flex-grow rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
            </h2>

            {/* <!-- The right line --> */}
          </div>
          <h2
            className={`mt-5 mb-2 w-full bg-clip-text text-center  text-2xl font-bold text-transparent sm:text-4xl ${
              theme === "light"
                ? "bg-gradient-to-r from-black to-gray-900"
                : "bg-gradient-to-r from-white to-gray-400"
            }`}
          >
            Meet the React-Express Ninja: A Website Developer with a Year of
            Experience!
          </h2>
          <FaQuoteLeft className="text-3xl text-primary" />
          <p className="relative text-left leading-8 text-primary sm:mt-3 sm:text-xl sm:leading-10">
            I'm a Frontend Web Developer who specializes in building the
            front-end of websites and web applications, ensuring the success of
            the overall project. Check out some of my work in the Projects
            section. I'm passionate about using frameworks like ReactJS for
            front-end web development, and seeing things rendered exactly as I
            envisioned is very satisfying for me. Please feel free to connect
            with me or follow me on my social media.
          </p>

          <div className="flex w-full justify-end">
            <FaQuoteRight className="text-3xl text-primary" />
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-12 max-w-full animate-[scaleUp_0.5s_linear] overflow-hidden sm:min-w-[17rem] md:min-w-[22rem] lg:min-w-[27rem]">
            {/* <img className='w-full h-full object-cover' src={me} alt="" /> */}
            <img className="h-full w-full object-cover" src={mysetup} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
