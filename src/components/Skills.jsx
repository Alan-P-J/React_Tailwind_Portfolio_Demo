import React, { forwardRef } from "react";
import {
  FaCode,
  FaServer,
  FaTools,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLayerGroup,
  FaProjectDiagram,
  FaCogs,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { SiSpringboot, SiPostgresql, SiMysql, SiPostman } from "react-icons/si";
import { MdApi, MdOutlineErrorOutline, MdOutlineLoop } from "react-icons/md";
import { RiShieldKeyholeLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

const Skills = forwardRef((props, ref) => {
  const techIcons = {
    // Backend
    Java: FaJava,
    "Spring Boot": SiSpringboot,
    "JPA/Hibernate": FaLayerGroup,
    "REST APIs": MdApi,
    JWT: RiShieldKeyholeLine,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,

    // Frontend
    React: FaReact,
    JavaScript: IoLogoJavascript,
    "Tailwind CSS": RiTailwindCssFill,
    "Vue.js": FaVuejs,
    "REST API Integration": MdApi,
    "Responsive Design": FaMobileAlt,

    // Engineering Fundamentals
    OOP: FaCode,
    Multithreading: FaLayerGroup,
    "Exception Handling": MdOutlineErrorOutline,
    "Clean Code": FaCode,
    "MVC Architecture": FaProjectDiagram,

    // Tools
    Git: FaGitAlt,
    GitHub: FaGithub,
    Postman: SiPostman,
    Agile: MdOutlineLoop,
    "GitHub Actions": SiGithubactions,
    "CI/CD": FaCogs,

    // Learning
    "TypeScript (learning)": SiTypescript,
    "Docker (learning)": SiDocker,
    "AWS (learning)": SiAmazonwebservices,
  };
  const skills = [
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Designing and implementing secure REST APIs and business logic using Java and Spring Boot.",
      technologies: [
        "Java",
        "Spring Boot",
        "JPA/Hibernate",
        "REST APIs",
        "JWT",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      icon: FaReact,
      title: "Frontend Development",
      description:
        "Building responsive, user-friendly interfaces using modern React ecosystem tools.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vue.js",
        "REST API Integration",
        "Responsive Design",
      ],
    },
    {
      icon: FaCode,
      title: "Software Engineering Fundamentals",
      description:
        "Applying OOP principles, clean architecture, validation, and exception handling in scalable systems.",
      technologies: [
        "OOP",
        "Multithreading",
        "Exception Handling",
        "Clean Code",
        "MVC Architecture",
      ],
    },
    {
      icon: FaTools,
      title: "Tools & Collaboration",
      description:
        "Version control, API testing, and Agile collaboration in team environments.",
      technologies: [
        "Git",
        "GitHub",
        "Postman",
        "Agile",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      icon: FiTrendingUp,
      title: "Currently Expanding",
      description:
        "Actively learning modern tools used in scalable cloud-native applications.",
      technologies: [
        "TypeScript (learning)",
        "Docker (learning)",
        "AWS (learning)",
      ],
    },
  ];
  return (
    <section
      ref={ref}
      className="py-20 transition-colors duration-300 bg-gray-100 md:pt-12 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Technical expertise across the full development stack — from
            frontend interfaces to backend systems and deployment.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-8 transition-all duration-300 transform bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 text-blue-500 duration-500 bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-400">
                  <skill.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 duration-500 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              <p className="mb-5 text-gray-600 duration-500 dark:text-gray-400">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <span
                      key={tech}
                      className={`flex items-center gap-2 px-3 py-1 text-sm rounded-full
  ${
    tech.includes("learning")
      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
      : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
  }
  `}
                    >
                      {Icon && <Icon size={14} />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
Skills.displayName = "Skills";

export default Skills;
