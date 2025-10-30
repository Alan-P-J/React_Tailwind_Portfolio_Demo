import React, { forwardRef } from 'react';
import { FaCode, FaMobile, FaServer, FaCloud } from 'react-icons/fa';

const SkillsAndServices = forwardRef((props,ref) => {
  const services = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building complete web solutions from UI to database with robust, scalable architectures.',
      technologies: ['React', 'Spring Boot', 'MongoDB', 'REST APIs'],
    },
    {
      icon: FaMobile,
      title: 'Frontend Engineering',
      description: 'Creating responsive, high-performance interfaces focused on accessibility and user experience.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vue.js'],
    },
    {
      icon: FaServer,
      title: 'Backend Engineering',
      description: 'Designing secure, high-efficiency APIs and microservices for seamless data flow and performance.',
      technologies: ['Spring Boot', 'Laravel', 'PostgreSQL', 'Redis'],
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      description: 'Automating deployment pipelines and managing scalable infrastructure across cloud platforms.',
      technologies: ['Docker', 'AWS', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <section
    ref={ref}
      id="skills"
     className="transition-colors duration-300 bg-gray-100 py-[6.5rem] md:pt-[8rem] dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Skills & Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Delivering full-cycle development — from crafting intuitive interfaces to deploying scalable systems.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-500 bg-white shadow-lg skills dark:bg-gray-800 rounded-2xl hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 text-blue-500 duration-500 bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-400">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 duration-500 dark:text-white">
                  {service.title}
                </h3>
              </div>

              <p className="mb-5 text-gray-600 duration-500 dark:text-gray-400">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-[#0767ac] bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SkillsAndServices;
