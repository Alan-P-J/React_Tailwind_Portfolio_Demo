import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/Alan-P-J",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alan-p-j-5747a1247/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/K28night/",
    label: "LeetCode",
  },
];

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "alanpjpnc@gmail.com",
    href: "mailto:alanpjpnc@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "+91 75101 89423",
    href: "https://wa.me/917510189423",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 transition-colors duration-300 bg-gray-50 dark:bg-gray-950 dark:text-gray-400">

      {/* Main */}
      <div className="container px-6 py-10 mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                Alan P J
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Java / Full Stack Developer · Immediate Joiner · UAE
              </p>
            </div>

            {/* Contact */}
            <div className="pt-1 space-y-2">
              {CONTACT_INFO.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-2 py-1.5 rounded-lg
                    text-sm text-gray-600 dark:text-gray-400
                    transition-all duration-300
                    hover:text-blue-500 dark:hover:text-blue-400
                    hover:bg-blue-50 dark:hover:bg-blue-900/30"
                >
                  <Icon
                    size={14}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="sm:justify-self-center">
            <p className="mb-3 text-xs font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
              Navigation
            </p>

            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group relative inline-flex items-center gap-2 px-2 py-1.5 rounded-lg
                      text-gray-500 dark:text-gray-400
                      transition-all duration-300
                      hover:text-blue-500 dark:hover:text-blue-400
                      hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    {/* Dot indicator */}
                    <span className="w-1 h-1 transition-all duration-300 scale-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-100"
                    />

                    {/* Text */}
                    <span className="relative">
                      {link}
                      {/* Underline */}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px]
                        bg-blue-500 dark:bg-blue-400
                        transition-all duration-300 group-hover:w-full"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="sm:justify-self-end">
            <p className="mb-3 text-xs font-semibold tracking-widest text-gray-400 uppercase dark:text-gray-500">
              Find me on
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-lg
                    text-gray-600 dark:text-gray-400
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-300
                    hover:-translate-y-1 hover:scale-105
                    hover:text-blue-500 dark:hover:text-blue-400
                    hover:bg-blue-50 dark:hover:bg-blue-900/30
                    hover:border-blue-200 dark:hover:border-blue-700"
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container flex flex-col items-center justify-between gap-2 px-6 py-4 mx-auto text-xs text-gray-500 sm:flex-row">

          <p>© {currentYear} Alan P J. All rights reserved.</p>

          <a
            href="#home"
            className="px-2 py-1 transition-all duration-300 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
          >
            Back to top ↑
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;