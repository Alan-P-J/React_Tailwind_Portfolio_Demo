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

// Fix 1 & 2: contact info + WhatsApp deep link
const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    label: "alanpjpnc@gmail.com",
    href: "mailto:alanpjpnc@gmail.com",
    hoverClass: "hover:text-blue-400",
  },
  {
    icon: FaWhatsapp,
    label: "+91 75101 89423",
    href: "https://wa.me/917510189423",
    hoverClass: "hover:text-green-400",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-400 duration-300 bg-gray-900 dark:bg-gray-950">

      {/* ── Main footer body ── */}
      <div className="container px-6 py-10 mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand + tagline + contact info */}
          <div className="space-y-4">
            <div>
              {/* Fix 2: updated tagline */}
              <p className="text-lg font-bold text-white">Alan P J</p>
              <p className="mt-1 text-sm text-gray-400">
                Java / Full Stack Developer · Immediate Joiner · UAE
              </p>
            </div>

            {/* Fix 1: email + WhatsApp as plain-text links */}
            <div className="pt-1 space-y-2">
              {CONTACT_INFO.map(({ icon: Icon, label, href, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 ${hoverClass}`}
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="sm:justify-self-center">
            <p className="mb-3 text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  {/* Fix 3: explicit hover colour works in both light and dark */}
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="sm:justify-self-end">
            <p className="mb-3 text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Find me on
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 text-gray-400 transition-all duration-300 rounded-lg
                    bg-gray-800 dark:bg-gray-800
                    ${hoverClass}
                    focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="container flex flex-col items-center justify-between gap-2 px-6 py-4 mx-auto text-xs text-gray-500 sm:flex-row">
          <p>© {currentYear} Alan P J. All rights reserved.</p>
          <a
            href="#home"
            className="text-gray-500 transition-colors duration-300 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;