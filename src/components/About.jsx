import { forwardRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/4300df04-1386-482a-b198-fc01290b561f.jpeg";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const QUICK_FACTS = [
  {
    label: "Role",
    value: "Full Stack Developer (Java Focus)",
    className: "font-medium text-gray-900 dark:text-white",
  },
  {
    label: "Availability",
    value: "Immediate Joiner · Open to Relocate — UAE",
    className: "font-medium text-green-600 dark:text-green-400",
  },
  {
    label: "Location",
    value: "Thrissur, Kerala, India",
    className: "font-medium text-gray-900 dark:text-white",
  },
  {
    label: "Email",
    value: "alanpjpnc@gmail.com",
    className: "font-medium text-blue-600 dark:text-blue-400",
  },
  {
    label: "Languages",
    value: "English, Malayalam, Hindi",
    className: "font-medium text-gray-900 dark:text-white",
  },
];

const AboutMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref.about}
      id="about"
      className="py-16 bg-white pb-7 md:pt-33 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-blue-600" aria-hidden="true" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ── Left column: image + quick facts ── */}
          <div className="space-y-8">

            {/* Profile image with decorative background */}
            <div className="flex justify-center lg:justify-start">
              {/* Single relative wrapper so gradient + badge both anchor correctly */}
              <div className="relative w-80 h-80">

                {/* Rotated gradient card behind image */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 scale-105 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-6"
                />

                {/* Profile photo */}
                <img
                  src={profileImg}
                  alt="Alan P J — Full Stack Java Developer based in Kerala, open to UAE"
                  loading="lazy"
                  width={320}
                  height={320}
                  className="relative z-10 object-cover w-full h-full shadow-2xl rounded-2xl"
                />

                {/* Experience badge — anchored to image wrapper */}
                <div className="absolute z-20 p-4 bg-white border border-gray-100 shadow-xl -bottom-4 -right-4 dark:bg-gray-800 rounded-2xl dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Year Experience
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Facts card */}
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Quick Facts
              </h3>
              <dl className="space-y-3">
                {QUICK_FACTS.map(({ label, value, className }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-gray-600 dark:text-gray-400 shrink-0">
                      {label}:
                    </dt>
                    <dd className={className}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>

          {/* ── Right column: bio + CTA ── */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Journey in Tech
            </h3>

            <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                I'm a Full Stack Developer with 1 year of hands-on experience
                building enterprise-grade web applications using Java, Spring Boot,
                and React. Currently contributing to a large-scale payroll and HR
                system migration, with a strong focus on backend architecture and
                API design.
              </p>
              <p>
                My core strengths include designing RESTful APIs, implementing
                business logic with Spring Boot and JPA/Hibernate, and working
                with relational databases like PostgreSQL and MySQL. I follow
                clean code practices and enjoy building scalable, maintainable
                systems that solve real business problems.
              </p>
              <p>
                On the frontend, I use React to build responsive, user-friendly
                interfaces that integrate seamlessly with backend services. I
                thrive in Agile teams, enjoy collaborating across roles, and
                continuously push my technical depth forward.
              </p>
            </div>

            {/* Tech badge tags — replaces plain text tech stack line */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Java", "Spring Boot", "JPA/Hibernate", "React", "PostgreSQL", "MySQL", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/40 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <button
            // ref={ref.skills}
              onClick={() => scrollToSection("project")}
              aria-label="View projects section"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 font-semibold
                text-white bg-[#01497c] rounded-lg shadow-md
                hover:bg-[#0767ac] transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2"
            >
              View My Projects
              <FaArrowRight aria-hidden="true" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;