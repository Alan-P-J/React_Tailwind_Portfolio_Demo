import { forwardRef } from "react";
import { FaArrowRight, FaEnvelope, FaChevronDown } from "react-icons/fa";
import profileImg from "../assets/4300df04-1386-482a-b198-fc01290b561f.jpeg";
import { TypeAnimation } from "react-type-animation";

// ── Shared utility (move to src/utils/scroll.js if used elsewhere) ──
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ── Static data outside component — no re-creation on every render ──
const STATS = [
  { value: "1",  label: "Years exp."   },
  { value: "5+",  label: "Projects"     },
  { value: "28+", label: "GitHub repos" },
];

const Hero = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="relative pt-28 md:pt-24 flex items-center justify-center min-h-screen
        bg-[linear-gradient(to_top,#cfd9df_0%,#e2ebf0_100%)]
        dark:bg-[radial-gradient(125%_125%_at_50%_90%,_#000000_40%,_#0d1a36_100%)]"
    >
      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-12 pt-7 lg:flex-row">

          {/* ── Text Content ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* UAE availability badge */}
            {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium
              text-green-700 bg-green-100 rounded-full
              dark:bg-green-900/30 dark:text-green-400">
              <span
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                aria-hidden="true"
              />
              Available · Open to UAE Opportunities
            </span> */}

            {/* Name */}
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl lg:text-8xl dark:text-white">
              Alan P J
            </h1>

            {/* Animated role — min-h prevents layout shift at all breakpoints */}
            <h2 className="mb-6 text-2xl font-semibold text-[#0767ac] md:text-3xl
              min-h-[2.5rem] md:min-h-[3rem]">
              <TypeAnimation
                sequence={[
                  "Software Engineer",        2000,
                  "Java Backend Developer",   2000,
                  "Full Stack Developer",     2000,
                  "Spring Boot Specialist",   2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            {/* Single punchy description */}
            <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Full Stack Developer specializing in Java, Spring Boot & React —
              currently building enterprise payroll systems. Immediate joiner,
              open to UAE relocation.
            </p>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">

              {/* View Projects — slide-fill animation */}
              <button
                onClick={() => scrollToSection("project")}
                aria-label="View projects section"
                className="relative overflow-hidden flex items-center gap-2 px-8 py-3
                  font-semibold text-[#01497c] border border-[#01497c] rounded-lg
                  cursor-pointer transition-all duration-500 group hover:border-[#0767ac]
                  focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                  View My Projects
                  <FaArrowRight aria-hidden="true" />
                </span>
                {/* Sliding fill layer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#01497c] translate-y-full
                    group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                />
              </button>

              {/* Hire Me */}
              <button
                onClick={() => scrollToSection("contact")}
                aria-label="Go to contact section"
                className="flex items-center gap-2 px-6 py-3 font-semibold
                  text-white bg-[#01497c] rounded-lg shadow-md
                  hover:bg-[#0767ac] cursor-pointer transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#0767ac] focus:ring-offset-2"
              >
                <FaEnvelope className="text-base" aria-hidden="true" />
                Hire Me
              </button>
            </div>

            {/* ── Stats row ── */}
            <div className="flex items-center justify-center gap-6 mt-10 md:justify-start">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                  {/* Divider — skip after last item */}
                  {i < STATS.length - 1 && (
                    <div
                      className="w-px h-8 bg-gray-300 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* ── Profile Image ── */}
          <div className="flex justify-center flex-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">

              {/* Decorative gradient ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 opacity-20 dark:opacity-30"
              />

              {/* Profile photo — eager load, explicit dims for CLS */}
              <img
                src={profileImg}
                alt="Alan P J — Full Stack Developer, open to UAE opportunities"
                loading="eager"
                width={320}
                height={320}
                className="relative z-10 object-cover w-full h-full border-4 border-blue-100 rounded-full shadow-lg dark:border-blue-900"
              />

              {/* Open to work badge */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2
                bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow-lg
                border border-gray-100 dark:border-gray-700">
                <span
                  className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Open to work
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute flex flex-col items-center gap-1 -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest text-gray-400 uppercase dark:text-gray-500">
          Scroll
        </span>
        <FaChevronDown className="text-gray-400 dark:text-gray-500" size={16} />
      </div>

    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;