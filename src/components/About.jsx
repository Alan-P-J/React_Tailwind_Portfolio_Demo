import { forwardRef } from "react";
import {
  FaArrowRight,
  FaCode,
  FaLinkedin,
  FaEnvelope,
  FaBolt,
  FaSeedling,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import profileImg from "../assets/profile-headshot.jpeg";

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
    label: "Visa Status",
    value: "Indian national, eligible for employment visa",
    className: "font-medium text-gray-900 dark:text-white",
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
    isEmail: true,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/alan-p-j-5747a1247/",
    className: "font-medium text-blue-600 dark:text-blue-400",
    isLinkedIn: true,
  },
  {
    label: "Languages",
    value: "English, Malayalam, Hindi",
    className: "font-medium text-gray-900 dark:text-white",
  },
];
const GROWTH_ITEMS = [
  {
    icon: FaBolt,
    title: "Shipping fast",
    desc: "1 year in real enterprise production taught me to write code that works under pressure, not just in demos.",
  },
  {
    icon: FaSeedling,
    title: "Always levelling up",
    desc: "Actively picking up TypeScript, Docker & AWS — the tools every modern team runs on.",
  },
  {
    icon: FaUsers,
    title: "Team-first energy",
    desc: "I thrive in fast-moving, collaborative environments where ideas go from whiteboard to browser quickly.",
  },
  {
    icon: FaBullseye,
    title: "Full stack ownership",
    desc: "Comfortable owning a feature end-to-end — Spring Boot API to React UI — without waiting for a handoff.",
  },
];
const AboutMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref.about}
      id="about"
      className="relative py-10 overflow-hidden bg-white md:pt-28 md:pb-6 dark:bg-gray-900"
    >
      {/* ── Dot texture background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(7,103,172,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Fade the dots out towards the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0
          bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,white_100%)]
          dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#111827_100%)]"
      />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mb-16 text-center">
          <span
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase
            text-[#0767ac] dark:text-[#4da6e8] mb-3"
          >
            The person behind the code
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            About Me
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full bg-[#0767ac]"
            aria-hidden="true"
          />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid items-start gap-14 lg:grid-cols-2 mb-14">
          {/* ── Left column: image + quick facts ── */}
          <div className="space-y-8">
            {/* Profile photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Accent background card */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 scale-105 rounded-3xl rotate-3
                    bg-gradient-to-br from-[#0767ac]/80 to-[#01497c]/90"
                />
                <img
                  src={profileImg}
                  alt="Alan P J — Junior Full Stack Developer, open to UAE"
                  loading="lazy"
                  width={320}
                  height={320}
                  className="relative z-10 object-cover w-full h-full shadow-2xl rounded-3xl"
                />
                {/* Open to work badge */}
                <div className="absolute z-20 px-4 py-3 text-center bg-white border border-gray-100 shadow-xl -bottom-4 -right-4 dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
                  <div className="flex items-center gap-2 justify-center mb-0.5">
                    <span
                      className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold text-gray-800 dark:text-white">
                      Open to work
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    UAE · Immediate joiner
                  </div>
                </div>
                {/* Role pill */}
                <div
                  className="absolute z-20 -top-3 -left-3
                  bg-[#01497c] rounded-full px-3.5 py-1.5 shadow-lg
                  flex items-center gap-1.5"
                >
                  <FaCode
                    size={10}
                    className="text-white/80"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold text-white">
                    Jr. Full Stack
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Facts card */}
            <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50 dark:bg-gray-800/60 dark:border-gray-700/50">
              <h3
                className="mb-4 text-xs font-bold uppercase tracking-[0.18em]
                text-gray-400 dark:text-gray-500"
              >
                Quick Facts
              </h3>
              <dl className="space-y-2.5">
                {QUICK_FACTS.map(
                  ({ label, value, className, isEmail, isLinkedIn }) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 text-sm"
                    >
                      <dt className="text-gray-400 dark:text-gray-500 shrink-0 min-w-[80px]">
                        {label}
                      </dt>
                      <dd className={`${className} text-right`}>
                        {isEmail ? (
                          <a
                            href={`mailto:${value}`}
                            className="hover:underline underline-offset-2"
                          >
                            {value}
                          </a>
                        ) : isLinkedIn ? (
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline underline-offset-2"
                          >
                            <FaLinkedin size={11} aria-hidden="true" />
                            LinkedIn Profile
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ),
                )}
              </dl>

              {/* One-tap contact shortcuts */}
              <div className="flex gap-2 pt-4 mt-5 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="mailto:alanpjpnc@gmail.com"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg
                    text-xs font-semibold text-gray-600 dark:text-gray-300
                    bg-gray-100 dark:bg-gray-700
                    hover:bg-[#0767ac] hover:text-white
                    dark:hover:bg-[#0767ac] dark:hover:text-white
                    transition-all duration-300"
                >
                  <FaEnvelope size={11} aria-hidden="true" /> Email
                </a>
                <a
                  href="https://wa.me/917510189423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg
                    text-xs font-semibold text-gray-600 dark:text-gray-300
                    bg-gray-100 dark:bg-gray-700
                    hover:bg-green-500 hover:text-white
                    dark:hover:bg-green-600 dark:hover:text-white
                    transition-all duration-300"
                >
                  <MdMessage /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* ══ RIGHT: bio + growth cards ══ */}
          <div className="space-y-8">
            {/* Bio */}
            <div>
              <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                Junior dev. Big appetite.
              </h3>
              <p className="text-sm font-medium text-[#0767ac] dark:text-[#4da6e8] mb-5">
                Fresh chapter · Full Stack · UAE-bound
              </p>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  Hey — I'm Alan, a Junior Full Stack Developer starting a new
                  chapter with a year of real production experience already
                  behind me. I've built and shipped features on an enterprise
                  payroll system, which means I know what it feels like when
                  code breaks in production at 9am on a Monday and you're the
                  one who has to fix it.
                </p>
                <p>
                  I'm looking for a collaborative, fast-moving team where I can
                  absorb knowledge from experienced engineers, ship things that
                  actually matter, and grow into a stronger developer week by
                  week. I love teams with good energy — short standups, honest
                  code reviews, and a shared obsession with making things work
                  well.
                </p>
                <p>
                  My foundation is{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    Java + Spring Boot + React
                  </span>
                  , and I'm actively learning{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    TypeScript, Docker & AWS
                  </span>
                  . I'm an immediate joiner,{" "}
                  <span className="text-[#0767ac] dark:text-[#4da6e8] font-medium">
                    ready to relocate to UAE
                  </span>
                  , and genuinely excited about what comes next.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {GROWTH_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl
                    border border-gray-100 dark:border-gray-700/60
                    bg-gray-50 dark:bg-gray-800/50
                    hover:border-[#0767ac]/40 dark:hover:border-[#4da6e8]/30
                    hover:-translate-y-0.5 hover:shadow-md
                    transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="text-[#0767ac] dark:text-[#4da6e8]"
                        size={16}
                      />
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
