import { forwardRef, memo } from "react";
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
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa6";
import { FiTrendingUp, FiZap } from "react-icons/fi";
import { MdApi, MdOutlineErrorOutline, MdOutlineLoop } from "react-icons/md";
import { RiShieldKeyholeLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

// ── Tech icon map ──
const TECH_ICONS = {
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  "JPA/Hibernate": FaLayerGroup,
  "REST APIs": MdApi,
  JWT: RiShieldKeyholeLine,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  React: FaReact,
  JavaScript: IoLogoJavascript,
  "Tailwind CSS": RiTailwindCssFill,
  "Vue.js": FaVuejs,
  "REST API Integration": MdApi,
  "Responsive Design": FaMobileAlt,
  OOP: FaCode,
  Multithreading: FaLayerGroup,
  "Exception Handling": MdOutlineErrorOutline,
  "Clean Code": FaCode,
  "MVC Architecture": FaProjectDiagram,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Agile: MdOutlineLoop,
  "GitHub Actions": SiGithubactions,
  "CI/CD": FaCogs,
  TypeScript: SiTypescript,
  Docker: SiDocker,
  AWS: SiAmazonwebservices,
};

// ── Skill data — cleaner categories, learning split out ──
const SKILLS = [
  {
    icon: FaServer,
    title: "Backend",
    accent: "blue",
    description:
      "Building secure, scalable REST APIs and business logic — 1 year in real enterprise production.",
    techs: [
      { label: "Java", level: "strong" },
      { label: "Spring Boot", level: "strong" },
      { label: "JPA/Hibernate", level: "strong" },
      { label: "REST APIs", level: "strong" },
      { label: "JWT", level: "strong" },
      { label: "PostgreSQL", level: "strong" },
      { label: "MySQL", level: "strong" },
    ],
  },
  {
    icon: FaReact,
    title: "Frontend",
    accent: "cyan",
    description:
      "Crafting responsive, component-driven UIs that integrate cleanly with backend services.",
    techs: [
      { label: "React", level: "strong" },
      { label: "JavaScript", level: "strong" },
      { label: "Tailwind CSS", level: "strong" },
      { label: "Responsive Design", level: "strong" },
      { label: "REST API Integration", level: "strong" },
      { label: "Vue.js", level: "familiar" },
    ],
  },
  {
    icon: FaTools,
    title: "Tools & Workflow",
    accent: "indigo",
    description:
      "Version control, testing, and shipping in Agile team environments.",
    techs: [
      { label: "Git", level: "strong" },
      { label: "GitHub", level: "strong" },
      { label: "Postman", level: "strong" },
      { label: "Agile", level: "strong" },
      { label: "GitHub Actions", level: "familiar" },
      { label: "CI/CD", level: "familiar" },
    ],
  },
  {
    icon: FaCode,
    title: "Engineering Principles",
    accent: "violet",
    description:
      "Applying clean code practices and architecture patterns that make systems easier to maintain.",
    techs: [
      { label: "OOP", level: "strong" },
      { label: "Clean Code", level: "strong" },
      { label: "MVC Architecture", level: "strong" },
      { label: "Multithreading", level: "strong" },
      { label: "Exception Handling", level: "strong" },
    ],
  },
];

const LEARNING = [
  { label: "TypeScript", icon: SiTypescript, note: "Actively learning" },
  { label: "Docker", icon: SiDocker, note: "Actively learning" },
  { label: "AWS", icon: SiAmazonwebservices, note: "Actively learning" },
];

// ── Accent colour maps ──
const ACCENT = {
  blue: {
    icon: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-300 dark:hover:border-blue-700",
  },
  cyan: {
    icon: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-300 dark:hover:border-cyan-700",
  },
  indigo: {
    icon: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400",
    border: "hover:border-indigo-300 dark:hover:border-indigo-700",
  },
  violet: {
    icon: "bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
  },
};

const LEVEL_STYLES = {
  strong:
    "bg-blue-50 dark:bg-blue-900/30 text-[#0767ac] dark:text-blue-300 border border-blue-100 dark:border-blue-800/50",
  familiar:
    "bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50",
};

const Skills = memo(
  forwardRef((_, ref) => {
    return (
      <section
        ref={ref}
        id="skills"
        className="relative py-10 overflow-hidden transition-colors duration-300 md:pt-28 md:pb-6 bg-gray-50 dark:bg-gray-900"
      >
        
        
        <div className="container relative z-10 px-4 mx-auto">
          {/* ── Section header ── */}
          <div className="mb-16 text-center">
            <span
              className="inline-block text-xs font-bold tracking-[0.25em] uppercase
              text-[#0767ac] dark:text-[#4da6e8] mb-3"
            >
              What I work with
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Skills & Technologies
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full bg-[#0767ac] mb-4"
              aria-hidden="true"
            />
            <p className="max-w-xl mx-auto text-base text-gray-500 dark:text-gray-400">
              Full stack range — from Java APIs to React UIs — with an honest
              view of what I'm strong at and what I'm still learning.
            </p>
          </div>

          {/* ── Skill cards grid ── */}
          <div className="grid gap-6 mb-10 md:grid-cols-2">
            {SKILLS.map((skill) => {
              const colors = ACCENT[skill.accent];
              return (
                <div
                  key={skill.title}
                  className={`group relative p-7 rounded-2xl
                    bg-white dark:bg-gray-800
                    border border-gray-100 dark:border-gray-700/60
                    shadow-sm hover:shadow-lg
                    hover:-translate-y-1
                    transition-all duration-300
                    ${colors.border}`}
                >
                  {/* Card header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl ${colors.icon} transition-colors duration-300`}
                    >
                      <skill.icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {skill.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map(({ label, level }) => {
                      const Icon = TECH_ICONS[label];
                      return (
                        <span
                          key={label}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full
                            ${LEVEL_STYLES[level]}`}
                        >
                          {Icon && <Icon size={12} aria-hidden="true" />}
                          {label}
                          {level === "familiar" && (
                            <span className="opacity-50 text-[10px]">·</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Currently learning strip ── */}
          <div className="relative overflow-hidden border border-purple-100 rounded-2xl dark:border-purple-900/50 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/10 dark:to-gray-900 p-7">
            {/* Header row */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                <FiTrendingUp size={18} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Currently Expanding
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  The tools I'm actively picking up to stay relevant in modern
                  teams
                </p>
              </div>
              <div
                className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full
                bg-purple-100 dark:bg-purple-900/40
                text-purple-600 dark:text-purple-300 text-xs font-semibold"
              >
                <FiZap size={11} aria-hidden="true" />
                In progress
              </div>
            </div>

            {/* Learning items */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {LEARNING.map(({ label, icon: Icon, note }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl
                    bg-white dark:bg-gray-800/60
                    border border-purple-100 dark:border-purple-800/40
                    hover:border-purple-300 dark:hover:border-purple-600
                    hover:-translate-y-0.5 hover:shadow-md
                    transition-all duration-300"
                >
                  <div className="p-2 text-purple-600 bg-purple-100 rounded-lg dark:bg-purple-900/40 dark:text-purple-400 shrink-0">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {label}
                    </p>
                    <p className="text-xs text-purple-500 dark:text-purple-400 mt-0.5">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }),
);

Skills.displayName = "Skills";
export default Skills;
