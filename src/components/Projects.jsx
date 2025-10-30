import React, { forwardRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

import ecommerceImg from "../assets/Home.png";
import weatherImg from "../assets/Screenshot from 2025-07-29 14-45-41.png";
import carelinkImg from "../assets/Screenshot from 2025-10-29 14-47-50.png";
import TodoList from "../assets/Screenshot from 2025-10-29 09-52-54.png";

const Projects = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "CareLink - Healthcare Management System",
      date: "Mar 2024",
      description:
        "Healthcare CRUD management system implementing RESTful APIs with Spring Boot backend and React.js frontend for comprehensive patient and appointment data operations.",
      image: weatherImg,
      category: "fullstack",
      features: [],
      techStack: {
        frontend: [
          { name: "React" },
          { name: "Spring Boot" },
          { name: "REST APIs" },
          { name: "SQL" },
        ],
      },
      sourceCode: "https://github.com/Alan-P-J/CareLink-using-Spring-boot",
    },
    {
      id: 2,
      title: "TrendNest E-Commerce Platform",
      date: "Nov 2024",
      description:
        "A complete full-stack e-commerce platform featuring a Vue.js frontend for seamless user experience and a Spring Boot backend for robust API services, delivering a modern shopping solution.",
      image: ecommerceImg,
      category: "fullstack",
      features: [],
      techStack: {
        frontend: [{ name: "Vue" }, { name: "Tailwind CSS" }],
        backend: [{ name: "Spring Boot" }, { name: "MYSQL" }],
      },
      sourceCode: "https://github.com/Alan-P-J/TrendNest-full-code",
    },
    {
      id: 3,
      title: "Blockeste - Blockchain Property System",
      date: "Jan 2024",
      description:
        "A blockchain-based property ownership platform featuring smart contracts for secure transactions, KYC verification, price prediction using machine learning, and decentralized document storage via IPFS.",
      image: carelinkImg,
      category: ["fullstack", "machinelearning"],
      features: [],
      techStack: {
        frontend: [{ name: "Jquery" }, { name: "Tailwind CSS" }],
        backend: [
          { name: "Python Flask" },
          { name: "Solidity" },
          { name: "MYSQL" },
        ],
      },
      sourceCode: "https://github.com/Alan-P-J/Blockeste",
    },

    {
      id: 5,
      title: "To-Do List with Admin Module",
      date: "Aug 2024",
      description:
        "A comprehensive task management system with integrated Admin Module that streamlines task assignment, tracking, and management within teams. Enhances productivity, accountability, and timely project delivery through efficient task delegation and monitoring.",
      image: TodoList,
      category: "fullstack",
      features: [],
      techStack: {
        frontend: [{ name: "JQuery" }, { name: "CSS" }],
        backend: [{ name: "JavaScript" }],
      },
      sourceCode: "https://github.com/Alan-P-J/To-Do-List",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "machinelearning", name: "Machine Learning" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory
        );
  const displayProjects =
    activeCategory === "all" ? projects.slice(0, 3) : filteredProjects;

  return (
    <section
      ref={ref}
      id="project"
      className="min-h-screen py-20 scroll-mt-24 md:pt-33 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A showcase of my work — built with precision, performance, and
            creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#0767ac] text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-800 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden aspect-video group">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </p>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.techStack).flatMap(
                        ([category, techs]) =>
                          techs.map((tech, i) => (
                            <span
                              key={`${category}-${i}`}
                              className="text-[#0767ac] inline-flex items-center gap-1 px-3 py-1 text-xs font-medium  bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-200"
                            >
                              {tech.name}
                            </span>
                          ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
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
