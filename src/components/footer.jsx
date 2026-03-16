import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: "https://github.com/Alan-P-J",                        label: "GitHub"   },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/alan-p-j-5747a1247/",    label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/K28night/",                   label: "LeetCode" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-600 duration-300 bg-gray-200 dark:bg-gray-900">

      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-gray-700 dark:text-white">Alan P J</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Full Stack Developer · Open to UAE
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  
                    <a href={`#${link.toLowerCase()}`}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 transition-all duration-300 rounded-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-4 border-t border-gray-500">
        <div className="container flex flex-col items-center justify-between gap-2 px-6 mx-auto text-xs text-gray-500 sm:flex-row">
          <p>© {currentYear} Alan P J. All rights reserved.</p>
          
            <a href="#home"
            className="transition-colors duration-300 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;