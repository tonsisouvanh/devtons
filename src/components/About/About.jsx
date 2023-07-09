import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "../../assets/icon/IconLibrary";
import mysetup from "../../assets/images/mysetup.jpg";
const About = ({ theme }) => {
  return (
    <>
      <section
        className={`shadow-md ${
          theme === "light" ? "bg-gray-200" : "bg-slate-800"
        } py-[3.75rem] md:py-32 animate-[fadeBottom_1s_linear]`}
      >
        <div className="rounded-div flex flex-col gap-5">
          <div className="flex items-center">
            {/* <!-- The left line --> */}
            {/* <div className="flex-grow h-[3px] bg-accent"></div> */}

            <h2
              className={`text-2xl font-bold text-center w-full mx-3 sm:text-4xl text-transparent bg-clip-text ${
                theme === "light"
                  ? "bg-gradient-to-r from-black to-gray-900"
                  : "bg-gradient-to-r from-white to-gray-400"
              }`}
            >
              About Me
              <div className="mt-5 flex-grow w-[2.5rem] mx-auto h-[0.2rem] rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div>
            </h2>

            {/* <!-- The right line --> */}
            {/* <div className="flex-grow h-[3px] bg-accent"></div> */}
          </div>
          <h2
            className={`text-2xl mt-5 mb-2 font-bold text-left w-full mx-3 sm:text-4xl text-transparent bg-clip-text text-center ${
              theme === "light"
                ? "bg-gradient-to-r from-black to-gray-900"
                : "bg-gradient-to-r from-white to-gray-400"
            }`}
          >
            Meet the React-Express Ninja: A Website Developer with a Year of
            Experience!
            {/* <div className="mt-2 flex-grow w-[1rem] h-[0.2rem] rounded-full bg-gradient-to-r from-[#945DD6] via-[#13ADC7] to-[#F46737]"></div> */}
          </h2>
          <FaQuoteLeft className="text-3xl text-primary" />
          <p className="relative text-primary text-left leading-8 sm:text-xl sm:mt-3 sm:leading-10">
            {/* <p className="text-center leading-8 sm:text-xl sm:mt-3 sm:leading-10"> */}
            I'm a Frontend Web Developer who specializes in building the
            front-end of websites and web applications, ensuring the success of
            the overall project. Check out some of my work in the Projects
            section. I'm passionate about using frameworks like ReactJS for
            front-end web development, and seeing things rendered exactly as I
            envisioned is very satisfying for me. Please feel free to connect
            with me or follow me on my social media.
            {/* <FaQuoteLeft className="text-xl text-primary absolute -top-10 -left-10" />
              <FaQuoteRight className="text-xl text-primary absolute -bottom-10 -right-10" /> */}
          </p>

          <div className="w-full flex justify-end">
            <FaQuoteRight className="text-3xl text-primary" />
          </div>

          {/* Image */}
          <div className="relative mt-12 max-w-full mx-auto overflow-hidden sm:min-w-[17rem] md:min-w-[22rem] lg:min-w-[27rem] animate-[scaleUp_0.5s_linear]">
            {/* <img className='w-full h-full object-cover' src={me} alt="" /> */}
            <img className="w-full h-full object-cover" src={mysetup} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
