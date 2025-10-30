import React, { forwardRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { SiReact, SiSpringboot, SiMongodb, SiTailwindcss, SiDocker } from 'react-icons/si';
import ecommerceImg from "../assets/Home.png";
import weatherImg from "../assets/Screenshot from 2025-07-29 14-45-41.png";
import carelinkImg from "../assets/Screenshot from 2025-10-29 14-47-50.png";
const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "CareLink - Healthcare Management System",
      date: "Mar 2024",
      description: "Healthcare CRUD management system implementing RESTful APIs with Spring Boot backend and React.js frontend for comprehensive patient and appointment data operations.",
      image: weatherImg,
      features: [
        
      ],
      techStack: {
        frontend: [{ icon: SiReact, name: "React" }, { icon: SiSpringboot, name: "SprigBoot" }],
      },
      liveDemo: "https://weather.alanj.dev",
      sourceCode: "https://github.com/Alan-P-J/CareLink-using-Spring-boot",
    
    },
    {
      id: 2,
      title: "TrendNest E-Commerce Platform",
      date: "Nov 2024",
      description: "A complete full-stack e-commerce platform featuring a Vue.js frontend for seamless user experience and a Spring Boot backend for robust API services, delivering a modern shopping solution.",
      image: ecommerceImg,
      features: [

      ],
      techStack: {
        frontend: [{ icon: SiReact, name: "Vue" }, { icon: SiTailwindcss, name: "Tailwind CSS" }],
        backend: [{ icon: SiSpringboot, name: "Spring Boot" }, { icon: SiMongodb, name: "MYSQL" }],
      },
      liveDemo: "https://ecommerce-demo.alanj.dev",
      sourceCode: "https://github.com/Alan-P-J/TrendNest-full-code",
   
    },
    {
      id: 3,
      title: "Blockeste - Blockchain Property System",
      date: "Jan 2024",
      description: "A blockchain-based property ownership platform featuring smart contracts for secure transactions, KYC verification, price prediction using machine learning, and decentralized document storage via IPFS.",
      image: carelinkImg,
      features: [
  
      ],
      techStack: {
        frontend: [{ icon: SiReact, name: "Jquery" }, { icon: SiTailwindcss, name: "Tailwind CSS" }],
        backend: [{ icon: SiSpringboot, name: "Python Flask" },{ icon: SiSpringboot, name: "Solidity" } ],
      },
      liveDemo: "https://taskmanager.alanj.dev",
      sourceCode: "https://github.com/Alan-P-J/Blockeste",
     
    },
    
  ];

  return (
    <section ref={ref} id="project" className="min-h-screen py-20 scroll-mt-24 md:pt-33 bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A showcase of my work — built with precision, performance, and creativity.
          </p>
        </div>

        {/* Project Grid */}
     <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <div
      key={project.id}
      className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-800 hover:scale-[1.02]"
    >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video group">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />
                
                {/* Status Badge
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-green-600 rounded-full">
                    {project.status}
                  </span>
                </div> */}
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    {/* <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4> */}
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    {/* <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Tech Stack:</h4> */}
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.techStack).flatMap(([category, techs]) =>
                        techs.map((tech, i) => (
                          <span
                            key={`${category}-${i}`}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200"
                          >
                            {/* <tech.icon size={12} /> */}
                            {tech.name}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                  )} */}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;