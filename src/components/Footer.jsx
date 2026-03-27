import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/Alan-P-J",
    label: "GitHub",
    hoverClass: "hover:text-white hover:bg-gray-700",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alan-p-j-5747a1247/",
    label: "LinkedIn",
    hoverClass: "hover:text-white hover:bg-blue-600",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/K28night/",
    label: "LeetCode",
    hoverClass: "hover:text-white hover:bg-yellow-500",
  },
];

const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "alanpjpnc@gmail.com",
    href: "mailto:alanpjpnc@gmail.com",
    hoverClass: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    icon: FaWhatsapp,
    label: "+91 75101 89423",
    href: "https://wa.me/917510189423",
    hoverClass: "hover:text-green-600 dark:hover:text-green-400",
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
              {CONTACT_INFO.map(({ icon: Icon, label, href, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 ${hoverClass}`}
                >
                  <Icon size={14} />
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
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0767ac] dark:hover:text-white transition-colors duration-300"
                  >
                    {link}
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
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg text-gray-600 dark:text-gray-400
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-300
                    hover:shadow-md ${hoverClass}`}
                >
                  <Icon size={18} />
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
            className="hover:text-[#0767ac] dark:hover:text-white transition-colors duration-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;