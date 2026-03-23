import { useState, useEffect, forwardRef, useCallback, useMemo } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { CiDark, CiLight } from "react-icons/ci";
import Logo from "../assets/file.svg";

const NAV_SECTIONS = ["home", "about", "skills", "project", "contact"];

const getInitialDarkMode = () => {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) return JSON.parse(saved);
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Utility functions for className generation
const getHeaderClasses = (scrolled) =>
  `fixed z-50 w-full md:w-[95%] md:left-[2.5%] md:top-4 transition-all duration-500
  ${
    scrolled
      ? "md:rounded-full bg-white/80 dark:bg-gray-800/90 shadow-lg backdrop-blur-md"
      : "md:rounded-full bg-white/60 dark:bg-gray-900/70 backdrop-blur-md"
  }
  max-md:bg-white/90 dark:max-md:bg-gray-900/90 max-md:backdrop-blur-md`;

const getNavLinkClasses = (isActive) =>
  `relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
  ${
    isActive
      ? "text-blue-500 dark:text-blue-400"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
  }`;

const getNavBgClasses = (isActive) =>
  `absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none
  ${
    isActive
      ? "bg-blue-50 dark:bg-blue-900/30"
      : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
  }`;

const getMobileNavLinkClasses = (isActive) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
  ${
    isActive
      ? "bg-blue-500/20 text-blue-500 border-l-2 border-blue-500"
      : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
  }`;

const Header = forwardRef(
  ({ setActiveSection, activeSection, sectionRefs }, ref) => {
    const [darkMode, setDarkMode] = useState(getInitialDarkMode);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      const observers = [];
      NAV_SECTIONS.forEach((section) => {
        const el = sectionRefs?.[section]?.current;
        if (!el) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
        );

        observer.observe(el);
        observers.push(observer);
      });
      return () => observers.forEach((obs) => obs.disconnect());
    }, [sectionRefs, setActiveSection]);

    const toggleDarkMode = useCallback(() => {
      setDarkMode((prev) => {
        const next = !prev;
        localStorage.setItem("darkMode", JSON.stringify(next));
        return next;
      });
    }, []);

    const handleNavClick = useCallback(
      (section) => {
        setActiveSection(section);
        sectionRefs?.[section]?.current?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      },
      [sectionRefs, setActiveSection],
    );

    const headerClasses = useMemo(() => getHeaderClasses(scrolled), [scrolled]);
    const mobileMenuClasses = useMemo(
      () =>
        `md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`,
      [menuOpen],
    );

    return (
      <header ref={ref} className={headerClasses}>
        <nav
          className="flex items-center justify-between px-4 py-2 md:px-6"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 rounded-lg group focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go to home"
          >
            <img
              src={Logo}
              alt=""
              aria-hidden="true"
              className="hidden transition-transform duration-300 rounded-full md:block w-9 h-9 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
              Alan
            </span>
            <span className="hidden text-xl font-bold text-blue-500 transition-colors md:inline group-hover:text-blue-400">
              P J
            </span>
          </a>

          <ul className="items-center hidden gap-1 md:flex" role="list">
            {NAV_SECTIONS.map((section) => {
              const isActive = activeSection === section;
              return (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={getNavLinkClasses(isActive)}
                  >
                    <span
                      aria-hidden="true"
                      className={getNavBgClasses(isActive)}
                    />
                    <span className="relative z-10 capitalize">{section}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="relative flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-300 border border-gray-200 rounded-full dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <CiDark
                size={20}
                className={`absolute transition-all duration-500 ${
                  darkMode
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-75"
                }`}
              />
              <CiLight
                size={20}
                className={`absolute transition-all duration-500 ${
                  darkMode
                    ? "opacity-0 -rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="relative flex items-center justify-center w-10 h-10 text-gray-800 transition-all duration-300 rounded-full md:hidden dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoCloseOutline
                size={22}
                className={`absolute transition-all duration-300 ${
                  menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              />
              <RiMenu2Line
                size={20}
                className={`absolute transition-all duration-300 ${
                  menuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              />
            </button>
          </div>
        </nav>

        <div id="mobile-menu" className={mobileMenuClasses}>
          <ul
            className="flex flex-col gap-1 px-4 pt-2 border-t border-gray-200 pb-1-4 dark:border-gray-700"
            role="list"
          >
            {NAV_SECTIONS.map((section) => {
              const isActive = activeSection === section;
              return (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={getMobileNavLinkClasses(isActive)}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    )}
                    <span className="capitalize">{section}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    );
  },
);

Header.displayName = "Header";

export default Header;
