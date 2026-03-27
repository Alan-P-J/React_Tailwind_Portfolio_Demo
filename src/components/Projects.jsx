import { forwardRef, useState, useMemo, useCallback, memo } from "react";
import { FaGithub, FaLock } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import ecommerceImg from "../assets/Home.png";
import carelinkImg from "../assets/Screenshot from 2025-07-29 14-45-41.png";
import blockchnain from "../assets/Screenshot from 2025-10-29 14-47-50.png";
import TodoList from "../assets/Screenshot from 2025-10-29 09-52-54.png";
import payrollImg from "../assets/payrollImage.png";

// ── Categories ──
const CATEGORIES = [
  { id: "all",             name: "All"            },
  { id: "fullstack",       name: "Full Stack"     },
  { id: "machinelearning", name: "ML / Blockchain" },
];

// ── Projects — active-voice descriptions, title split into title + subtitle ──
const PROJECTS = [
  {
    id: 1,
    title: "MuzPayroll",
    subtitle: "Enterprise Payroll & HRMS Platform",
    date: "Mar 2025 – Present",
    badge: "Work Experience",
    description:
      "Led backend migration of a large-scale enterprise payroll system from .NET to Java (Spring Boot). Designed REST APIs, implemented core business logic, and optimised PostgreSQL queries handling thousands of employee records.",
    role: "Backend Developer · Payroll Migration",
    image: payrollImg,
    category: "fullstack",
    highlights: [
      "Migrated payroll engine: .NET → Spring Boot",
      "JWT-secured REST APIs for HR workflows",
      "PostgreSQL query optimisation at scale",
    ],
    techStack: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "JWT", "Postman"],
    sourceCode: null,
    liveDemo: null,
    isPrivate: true,
  },
  {
    id: 2,
    title: "CareLink",
    subtitle: "Healthcare Management System",
    date: "Mar 2025",
    badge: "Personal Project",
    description:
      "Built a full-stack appointment booking system from scratch — Spring Boot REST APIs with JWT auth on the backend, React dashboard on the frontend with role-based access for patients and doctors.",
    role: null,
    image: carelinkImg,
    category: "fullstack",
    highlights: [
      "End-to-end: Spring Boot API + React UI",
      "Role-based access control (patient / doctor)",
      "JWT authentication & secure endpoints",
    ],
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "Git"],
    sourceCode: "https://github.com/Alan-P-J/CareLink-using-Spring-boot",
    liveDemo: null,
    isPrivate: false,
  },
  {
    id: 3,
    title: "TrendNest",
    subtitle: "E-Commerce Platform",
    date: "2025",
    badge: "Personal Project",
    description:
      "Full-stack e-commerce platform with product listings, cart management, and an admin inventory dashboard. Vue.js frontend integrated with a Spring Boot REST API backend.",
    role: null,
    image: ecommerceImg,
    category: "fullstack",
    highlights: [
      "Product, cart & order workflows",
      "Vue.js + Spring Boot REST integration",
      "Admin panel for inventory control",
    ],
    techStack: ["Vue.js", "Tailwind CSS", "Spring Boot", "MySQL"],
    sourceCode: "https://github.com/Alan-P-J/TrendNest-full-code",
    liveDemo: null,
    isPrivate: false,
  },
  {
    id: 4,
    title: "Blockeste",
    subtitle: "Blockchain Property System",
    date: "2024",
    badge: "Personal Project",
    description:
      "Blockchain-based property ownership platform with Solidity smart contracts, KYC verification, ML-driven price prediction, and decentralised document storage via IPFS.",
    role: null,
    image: blockchnain,
    category: ["fullstack", "machinelearning"],
    highlights: [
      "Smart contracts on Ethereum (Solidity)",
      "ML price prediction model",
      "Decentralised storage via IPFS",
    ],
    techStack: ["Python Flask", "Solidity", "jQuery", "Tailwind CSS", "MySQL"],
    sourceCode: "https://github.com/Alan-P-J/Blockeste",
    liveDemo: null,
    isPrivate: false,
  },
  {
    id: 5,
    title: "To-Do List",
    subtitle: "Task Manager with Admin Module",
    date: "2025",
    badge: "Personal Project",
    description:
      "Task management app with admin controls for assignment, tracking, and team delegation — built to sharpen vanilla JS skills and explore lightweight admin patterns without a framework.",
    role: null,
    image: TodoList,
    category: "fullstack",
    highlights: [
      "Admin-controlled task assignment",
      "Team tracking & delegation flows",
      "Vanilla JS — no framework",
    ],
    techStack: ["JavaScript", "jQuery", "CSS"],
    sourceCode: "https://github.com/Alan-P-J/To-Do-List",
    liveDemo: null,
    isPrivate: false,
  },
];

const BADGE_STYLES = {
  "Work Experience":
    "bg-blue-100/90 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  "Personal Project":
    "bg-gray-100/90 text-gray-600 dark:bg-gray-700/80 dark:text-gray-300",
};

const Projects = memo(
  forwardRef((_, ref) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const filtered = useMemo(
      () =>
        activeCategory === "all"
          ? PROJECTS
          : PROJECTS.filter((p) =>
              Array.isArray(p.category)
                ? p.category.includes(activeCategory)
                : p.category === activeCategory,
            ),
      [activeCategory],
    );

    const displayProjects = useMemo(
      () =>
        activeCategory === "all" && !showAll ? filtered.slice(0, 3) : filtered,
      [activeCategory, showAll, filtered],
    );

    const categoryCounts = useMemo(
      () =>
        CATEGORIES.map((cat) => ({
          ...cat,
          count:
            cat.id === "all"
              ? PROJECTS.length
              : PROJECTS.filter((p) =>
                  Array.isArray(p.category)
                    ? p.category.includes(cat.id)
                    : p.category === cat.id,
                ).length,
        })),
      [],
    );

    const handleCategoryChange = useCallback((catId) => {
      setActiveCategory(catId);
      setShowAll(false);
    }, []);

    const toggleShowAll = useCallback(() => setShowAll((p) => !p), []);

    return (
      <section
        ref={ref}
        id="project"
        className="relative min-h-screen py-20 overflow-hidden transition-colors duration-300 md:pt-10 md:pb-16 scroll-mt-24 bg-gray-50 dark:bg-gray-900"
      >
        {/* ── Subtle dot texture ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(7,103,172,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0
            bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_60%,#f9fafb_100%)]
            dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_60%,#111827_100%)]"
        />

        <div className="container relative z-10 px-4 mx-auto sm:px-6">

          {/* ── Section header ── */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase
              text-[#0767ac] dark:text-[#4da6e8] mb-3">
              Things I've shipped
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Featured Projects
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full bg-[#0767ac] mb-4"
              aria-hidden="true"
            />
            <p className="max-w-xl mx-auto text-base text-gray-500 dark:text-gray-400">
              From enterprise payroll systems to blockchain platforms — real
              problems, real code, real learning.
            </p>
          </div>

          {/* ── Filters ── */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categoryCounts.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                  text-sm font-semibold transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2
                  ${
                    activeCategory === cat.id
                      ? "bg-[#0767ac] text-white shadow-md"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#0767ac]/40 hover:text-[#0767ac] dark:hover:text-[#4da6e8]"
                  }`}
              >
                {cat.name}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-medium
                    ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl dark:bg-gray-800 dark:border-gray-700/60 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-100"
                  />
                  {/* Badge top-left */}
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold
                      px-2.5 py-1 rounded-full backdrop-blur-sm
                      ${BADGE_STYLES[project.badge]}`}
                  >
                    {project.badge}
                  </span>
                  {/* Date top-right */}
                  <span className="absolute top-3 right-3 text-xs font-medium
                    px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
                    {project.date}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex-1">
                    {/* Title + subtitle */}
                    <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-2 text-xs text-gray-400 dark:text-gray-500">
                      {project.subtitle}
                    </p>

                    {/* Role */}
                    {project.role && (
                      <p className="mb-3 text-xs font-bold text-[#0767ac] dark:text-[#4da6e8]
                        uppercase tracking-wide">
                        {project.role}
                      </p>
                    )}

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-4 space-y-1.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0
                              bg-[#0767ac] dark:bg-[#4da6e8]"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5
                            text-xs font-medium rounded-full
                            bg-blue-50 dark:bg-blue-900/30
                            text-[#0767ac] dark:text-blue-300
                            border border-blue-100 dark:border-blue-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.isPrivate ? (
                      <div className="flex items-center justify-center gap-2 py-1.5
                        text-xs text-gray-400 dark:text-gray-500">
                        <FaLock size={10} aria-hidden="true" />
                        Private repository · Company project
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        {project.sourceCode && (
                          <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.title}`}
                            className="flex-1 flex items-center justify-center gap-2
                              px-4 py-2 text-sm font-semibold rounded-xl
                              bg-gray-100 dark:bg-gray-700
                              text-gray-700 dark:text-gray-200
                              hover:bg-gray-200 dark:hover:bg-gray-600
                              transition-all duration-300
                              focus:outline-none focus:ring-2 focus:ring-[#0767ac]"
                          >
                            <FaGithub size={14} aria-hidden="true" />
                            Code
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo for ${project.title}`}
                            className="flex-1 flex items-center justify-center gap-2
                              px-4 py-2 text-sm font-semibold rounded-xl
                              bg-[#0767ac] text-white
                              hover:bg-[#01497c]
                              transition-all duration-300
                              focus:outline-none focus:ring-2 focus:ring-[#0767ac]"
                          >
                            <FiArrowUpRight size={15} aria-hidden="true" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Show more / less ── */}
          {activeCategory === "all" && filtered.length > 3 && (
            <div className="mt-12 text-center">
              <button
                onClick={toggleShowAll}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                  font-semibold
                  text-[#01497c] dark:text-[#4da6e8]
                  border-2 border-[#01497c]/40 dark:border-[#4da6e8]/40
                  hover:border-[#01497c] dark:hover:border-[#4da6e8]
                  hover:bg-[#01497c]/5 dark:hover:bg-[#4da6e8]/10
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2"
              >
                {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
              </button>
            </div>
          )}

        </div>
      </section>
    );
  }),
);

Projects.displayName = "Projects";
export default Projects;