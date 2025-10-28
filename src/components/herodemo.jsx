import React, { forwardRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const MinimalHeroSection = forwardRef((props, ref) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref} 
      id='home' 
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:flex-1">
            <div className="mb-2 text-sm font-medium tracking-wider text-blue-600 uppercase">
              Full-Stack Developer
            </div>
            
            <h1 className="mb-4 text-4xl font-light text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Alan P J
            </h1>
            
            <div className="max-w-md mb-6 text-lg text-gray-600 md:text-xl dark:text-gray-400">
              Creating digital solutions with modern web technologies and clean code.
            </div>

            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-blue-600 transition-colors duration-300 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              View Projects
              <FaArrowRight size={14} />
            </button>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:flex-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-100 rounded-full dark:bg-blue-900/30"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Alan P J"
                className="relative z-10 object-cover w-full h-full border-4 border-white rounded-full shadow-lg dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MinimalHeroSection;