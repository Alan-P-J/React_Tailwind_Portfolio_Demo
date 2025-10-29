import React, { forwardRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const MinimalHeroSection = forwardRef((props,ref) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('project');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
const ScrollToEmail = () => {
  console.log("scroll to email clicked");
  const emailSection = document.getElementById("contact");
  if (emailSection !=null) {
    console.log("clicked");
    emailSection.scrollIntoView({ behavior: 'smooth' });
  }
  else {
    console.log("email section not found");
  }
}
  return (
<section
  ref={ref}
  id="home"
  className="relative pt-28 md:pt-24 flex items-center justify-center min-h-screen bg-[linear-gradient(to_top,#cfd9df_0%,#e2ebf0_100%)]  dark:bg-[radial-gradient(125%_125%_at_50%_90%,_#000000_40%,_#0d1a36_100%)]"
>
  <div
    className="absolute inset-0 z-0 hidden bg-none dark:block dark:bg-gray-900"
    style={{
      background: "transition-colors duration-700 transition-colors duration-700",
    }}
  />

  <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col-reverse items-center justify-between gap-12 pt-7 lg:flex-row">

      <div className="flex-1 text-center lg:text-left">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Alan P J
        </h1>

        <h2 className="mb-6 text-2xl font-semibold text-[#0767ac] md:text-3xl">
          Full-Stack Developer
        </h2>

        <p className="max-w-2xl mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          Building digital experiences with modern web technologies. 
          Specializing in React, Springboot, and cloud-native applications.
        </p>
      <div className="flex gap-5 text-sm buttons md:text-base">
        <button
          onClick={scrollToProjects}
          className="projects relative overflow-hidden flex duration-500 items-center gap-2 px-8 py-3 font-semibold text-[#0767ac] border border-[#0767ac] rounded-lg cursor-pointer transition-all  lg:mx-0 max-md:mb-7.5 group"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              View My Projects
            </span>
          <FaArrowRight />
        </button>
        <button
          onClick={() =>{ ScrollToEmail();}}
          className="hire relative flex items-center overflow-hidden gap-2 px-6 py-3 font-semibold text-white bg-[#01497c] rounded-lg shadow-md hover:bg-[#0767ac] cursor-pointer transition-all duration-300 lg:mx-0 max-md:mb-7.5 group"
        >
        <FaEnvelope className="text-lg" />
        Hire Me
        </button>
        
      </div>
       
        

      </div>

      {/* Profile Image */}
      <div className="flex justify-center flex-1">
        {/* <div className="experience">
            <div className="absolute bg-[#0767ac] rounded-full -top-[3%] md:-top-[9%] right-[17%] md:right-[11%]">
              <div className="p-4 text-white rounded-t-lg">
                <span>1+ year</span>
              </div>
              </div>
        </div> */}
         <div className="visible absolute p-3 bg-white rounded-full top-[35%] left-[12%] md:invisible md:left-0 md:right">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Open to work</span>
                  </div>
            </div>
             <div className="invisible md:visible absolute p-3 bg-white rounded-full -bottom-[3%] right-[27%]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Open to work</span>
                  </div>
            </div>
        <div className="w-64 h-64 md:w-80 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="Alan P J"
            className="object-cover w-full h-full border-4 border-blue-100 rounded-full shadow-lg"
          />
        </div>
         
      </div>
    </div>
  </div>
</section>

  );
});

export default MinimalHeroSection;