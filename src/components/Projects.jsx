import { forwardRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ecommerceImg from "../assets/Home.png";
import carelinkImg from "../assets/Screenshot from 2025-07-29 14-45-41.png";
import blockchnain from "../assets/Screenshot from 2025-10-29 14-47-50.png";
import TodoList from "../assets/Screenshot from 2025-10-29 09-52-54.png";
import payrollImg from "../assets/payrollImage.png";

// ── Static data outside component — no re-creation on every render ──
const CATEGORIES = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack" },
  { id: "machinelearning", name: "Machine Learning" },
];

const PROJECTS = [
  {
    id: 1,
    title: "MuzPayroll – Enterprise Payroll & HRMS Platform",
    date: "Mar 2025 – Present",
    badge: "Work Experience", // distinguishes professional from personal
    description:
      "Contributing to the migration of a large-scale enterprise payroll system from .NET to Java (Spring Boot). Designing REST APIs, implementing business logic, and optimizing PostgreSQL queries for scalable payroll processing workflows.",
    role: "Backend Developer (Payroll Migration)",
    image: payrollImg,
    category: "fullstack",
    features: [
      "Enterprise payroll processing",
      "JWT-secured REST APIs",
      "Scalable backend architecture",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "JPA/Hibernate",
      "REST APIs",
      "PostgreSQL",
      "JWT",
      "Git",
      "Postman",
    ],
    sourceCode: null, // private company repo
    liveDemo: null,
  },
  {
    id: 2,
    title: "CareLink – Healthcare Management System",
    date: "Mar 2025",
    badge: "Personal Project",
    description:
      "Full-stack appointment booking system with RESTful APIs for patient and doctor management. Includes JWT authentication, role-based access control, and a responsive React dashboard.",
    role: null,
    image: carelinkImg, // fixed — was using carelinkImg incorrectly
    category: "fullstack",
    features: [
      "Appointment & patient management",
      "Secure REST APIs with JWT",
      "Role-based access control",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "JWT",
      "Git",
      "Postman",
    ],
    sourceCode: "https://github.com/Alan-P-J/CareLink-using-Spring-boot",
    liveDemo: null,
  },
  {
    id: 3,
    title: "TrendNest – E-Commerce Platform",
    date: "2025",
    badge: "Personal Project",
    description:
      "Full-stack e-commerce platform with product listings, shopping cart, and admin inventory management. Vue.js frontend integrated with a Spring Boot backend via REST APIs.",
    role: null,
    image: ecommerceImg,
    category: "fullstack",
    features: [
      "Product, cart & order workflows",
      "Scalable Spring Boot APIs",
      "Modern responsive UI",
    ],
    techStack: ["Vue.js", "Tailwind CSS", "Spring Boot", "MySQL"],
    sourceCode: "https://github.com/Alan-P-J/TrendNest-full-code",
    liveDemo: null,
  },
  {
    id: 4,
    title: "Blockeste – Blockchain Property System",
    date: "2024",
    badge: "Personal Project",
    description:
      "Blockchain-based property ownership platform featuring smart contracts for secure transactions, KYC verification, ML-driven price prediction, and decentralized document storage via IPFS.",
    role: null,
    image: blockchnain,
    category: ["fullstack", "machinelearning"],
    features: [
      "Blockchain-based property ownership",
      "Smart contracts & IPFS storage",
      "ML-driven price prediction",
    ],
    techStack: ["Python Flask", "Solidity", "jQuery", "Tailwind CSS", "MySQL"],
    sourceCode: "https://github.com/Alan-P-J/Blockeste",
    liveDemo: null,
  },
  {
    id: 5,
    title: "To-Do List with Admin Module",
    date: "2025",
    badge: "Personal Project",
    description:
      "Task management system with an integrated admin module for task assignment, tracking, and team delegation. Designed to improve team accountability and project delivery.",
    role: null,
    image: TodoList,
    category: "fullstack",
    features: [
      "Task assignment & tracking",
      "Admin-controlled workflows",
      "Lightweight productivity system",
    ],
    techStack: ["JavaScript", "jQuery", "CSS"],
    sourceCode: "https://github.com/Alan-P-J/To-Do-List",
    liveDemo: null,
  },
];

// ── Badge colour map ──
const BADGE_STYLES = {
  "Work Experience":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Personal Project":
    "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
};

const Projects = forwardRef((_, ref) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // ── Single clean filter + slice logic ──
  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory,
        );

  const displayProjects =
    activeCategory === "all" && !showAll ? filtered.slice(0, 3) : filtered;

  // const hiddenCount = filtered.length - displayProjects.length;

  return (
    <section
      ref={ref}
      id="project"
      className="min-h-screen py-16 transition-colors duration-300 scroll-mt-24 bg-gray-50 md:pb-7 md:pt-6 dark:bg-gray-900"
    >
      <div className="container px-6 mx-auto">
        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-4 bg-blue-600"
            aria-hidden="true"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A showcase of my work — built with precision, performance, and
            creativity.
          </p>
        </div>

        {/* ── Category filters ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) =>
                    Array.isArray(p.category)
                      ? p.category.includes(cat.id)
                      : p.category === cat.id,
                  ).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAll(false);
                }}
                aria-pressed={activeCategory === cat.id}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2
                  ${
                    activeCategory === cat.id
                      ? "bg-[#0767ac] text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
              >
                {cat.name}
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full
                  ${
                    activeCategory === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Project cards grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300
                bg-white rounded-xl shadow-lg hover:shadow-xl dark:bg-gray-800
                hover:scale-[1.02]"
            >
              {/* ── Project image ── */}
              <div className="relative overflow-hidden aspect-video group">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Badge overlay on image */}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold
                  px-2.5 py-1 rounded-full ${BADGE_STYLES[project.badge]}`}
                >
                  {project.badge}
                </span>
              </div>

              {/* ── Card body ── */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  {/* Title + date */}
                  <h3 className="mb-1 text-xl font-bold leading-snug text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </p>

                  {/* Role (work experience only) */}
                  {project.role && (
                    <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.role}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Features list */}
                  <ul className="mb-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span
                          className="mt-0.5 text-blue-500"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags — flat array, simple render */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium
                          text-[#0767ac] bg-gray-100 rounded-full
                          dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Card footer: action buttons ── */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.sourceCode ? (
                    <div className="flex gap-3">
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title}`}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-2
                          text-sm font-semibold text-gray-700 transition-colors bg-gray-100
                          rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200
                          dark:hover:bg-gray-600 focus:outline-none focus:ring-2
                          focus:ring-[#0767ac]"
                      >
                        <FaGithub size={14} aria-hidden="true" />
                        Code
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo for ${project.title}`}
                          className="flex items-center justify-center flex-1 gap-2 px-4 py-2
                            text-sm font-semibold text-white bg-[#0767ac] rounded-lg
                            hover:bg-[#01497c] transition-colors focus:outline-none
                            focus:ring-2 focus:ring-[#0767ac]"
                        >
                          <FaExternalLinkAlt size={12} aria-hidden="true" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  ) : (
                    // Private / no source code
                    <p className="text-xs italic text-center text-gray-400 dark:text-gray-500">
                      Private repository — company project
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Show more / Show less toggle ── */}
        {activeCategory === "all" && filtered.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold
                text-[#01497c] border border-[#01497c] rounded-lg
                hover:bg-[#01497c] hover:text-white transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2"
            >
              {showAll ? "Show Less" : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
