import { forwardRef, memo } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import profileImg from "../assets/profile-headshot.jpeg";
import { TypeAnimation } from "react-type-animation";

const STATS = [
  { value: "1+", label: "Year", sub: "Enterprise systems" },
  { value: "5+", label: "Projects" },
  { value: "28+", label: "GitHub repos" },
];

const Hero = memo(
  forwardRef((_, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        className="relative py-7 pt-16 md:pt-20 flex items-center justify-center min-h-screen
        bg-[linear-gradient(to_top,#cfd9df_0%,#e2ebf0_100%)]
        dark:bg-[radial-gradient(125%_125%_at_50%_90%,_#000000_40%,_#0d1a36_100%)]"
      >
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center justify-between gap-12 pt-7 lg:flex-row">
            {/* TEXT */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name */}
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl lg:text-8xl dark:text-white">
                Alan P J
              </h1>

              {/* Animated role */}
              <h2 className="mb-6 text-2xl font-semibold text-[#0767ac] md:text-3xl min-h-[2.5rem] md:min-h-[3rem]">
                 <TypeAnimation
                  sequence={[
                    "Java Backend Developer",
                    2000,
                    "Spring Boot Specialist",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Enterprise Systems Builder",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>

              {/* Description */}
              <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Full Stack Developer specializing in Java, Spring Boot & React —
                currently building enterprise payroll systems.
              </p>

              {/* CTA Buttons (V2 Style) */}
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                {/* Primary */}
                <a
                  href="#project"
                  className="group relative overflow-hidden inline-flex items-center gap-2
                    px-7 py-3 rounded-xl font-semibold text-white
                    bg-[#01497c] hover:bg-[#0767ac]
                    shadow-[0_4px_24px_rgba(1,73,124,0.35)]
                    hover:shadow-[0_4px_32px_rgba(7,103,172,0.5)]
                    transition-all duration-300"
                >
                  View Projects
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Secondary */}
                <a
                  href={`${import.meta.env.BASE_URL}Alan_PJ_Junior_Software_Engineer.pdf`}
                  download
                  className="inline-flex items-center gap-2
                    px-7 py-3 rounded-xl font-semibold
                    text-[#01497c] dark:text-[#4da6e8]
                    border-2 border-[#01497c]/40 dark:border-[#4da6e8]/40
                    hover:border-[#01497c] dark:hover:border-[#4da6e8]
                    hover:bg-[#01497c]/8 dark:hover:bg-[#4da6e8]/10
                    transition-all duration-300"
                >
                  <FaDownload /> Download CV
                </a>

                {/* Contact */}
                {/* <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-gray-800 rounded-xl hover:bg-gray-900"
                >
                  <FaEnvelope /> Contact
                </a> */}
              </div>

              {/* Stats */}
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
                    {i < STATS.length - 1 && (
                      <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE (V2 STYLE APPLIED) */}
            {/* ── Right: Profile image ── */}
            <div
              className="flex-shrink-0 flex justify-center
                animate-[fadeSlideUp_0.8s_ease_both]"
            >
              <div className="relative">
                {/* Outer rotating ring */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -m-3 rounded-full
                    border-2 border-dashed border-[#0767ac]/25 dark:border-[#4da6e8]/25
                    animate-[spin_20s_linear_infinite]"
                />

                {/* Background glow card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -m-1 rounded-full
                    bg-gradient-to-br from-[#0767ac]/20 to-[#01497c]/10
                    dark:from-[#4da6e8]/20 dark:to-[#0767ac]/10
                    blur-sm"
                />

                {/* Profile image */}
                <div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                  border-4 border-white dark:border-gray-800
                  shadow-[0_20px_60px_rgba(1,73,124,0.25)] dark:shadow-[0_20px_60px_rgba(7,103,172,0.35)]"
                >
                  <img
                    src={profileImg}
                    alt="Alan P J — Full Stack Java Developer, open to UAE"
                    loading="eager"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Open to work badge */}
                <div
                  className="absolute bottom-4 -left-4 z-20
                  flex items-center gap-2
                  bg-white dark:bg-gray-800
                  border border-gray-100 dark:border-gray-700
                  rounded-full px-3.5 py-2
                  shadow-lg"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    Open to work
                  </span>
                </div>

                {/* Floating tech pill */}
                <div
                  className="absolute -top-2 -right-6 z-20
                  flex items-center gap-1.5
                  bg-[#01497c] dark:bg-[#0767ac]
                  rounded-full px-3.5 py-2
                  shadow-lg"
                >
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    Java · Spring Boot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    );
  }),
);

export default Hero;
