import { useState, useEffect, forwardRef} from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const Header = forwardRef(({ setActiveSection, activeSection, sectionRefs }, ref) => {
const getInitialDarkMode = () => {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    return JSON.parse(saved);  // will be true or false
     
  }
  console.log("No saved theme, using system preference"); 
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const [darkMode, setDarkMode] = useState(() => getInitialDarkMode());
const [menuOpen, setMenuOpen] = useState(false);

;
//   Load saved theme or system preference
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved == true) {
//       setDarkMode(JSON.parse(saved));
//       console.log("Loaded dark mode from storage:", JSON.parse(saved));
//     } else {
//       const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       console.log("System prefers dark mode:", isDarkMode);
//       setDarkMode(isDarkMode);
//     }
//   }, []);
//  useEffect(() => {
//     // This runs when activeSection OR sectionRef.current changes
//     // But note: you can't watch ref.current directly in dependency array.
//     // You can watch activeSection and run some logic

//     if (activeSection === 'home' && sectionRefs?.current) {
//       // Do something, e.g., scroll into view or trigger animation
//       console.log('Active section is home and ref is ready!');
//     }
//   }, [activeSection, sectionRefs]);
  // Apply theme to document root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
const toggleDarkMode = () => {
  setDarkMode(prev => {
    const newValue = !prev;
    localStorage.setItem('darkMode', JSON.stringify(newValue));
    return newValue;
  });
};

  return (
    <div
  ref={ref}
  className="z-50 fixed md:top-8 md:left-[2.5%] h-18 w-full md:w-[95%] max-md:rounded-none md:rounded-full
  text-black dark:text-black transition-colors duration-500
  bg-gray-600/70 dark:bg-white/70 rounded"
>
      <header className="flex justify-between p-4">
        {/* home, about, projects, contact links */}
         <button className="p-2 text-white rounded-md cursor-pointer md:justify-self-start top-4 left-4 dark:text-black md:hidden max-md:flex" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="relative w-6 h-6">
  {/* Close (X) icon */}
  <IoCloseOutline
    className={`absolute inset-0 transform text-xl transition-all duration-500
      ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
  />

  {/* Menu (hamburger) icon */}
  <RiMenu2Line
    className={`absolute inset-0 transform text-xl transition-all duration-500
      ${menuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
  />
</div>

      </button>
      <p className="flex items-center justify-center pl-5 text-lg text-white duration-500 dark:text-black demo">Alan </p>
        <div className={`${
  menuOpen ? 'flex' : 'flex opacity-0 pointer-events-none'
} absolute left-0 top-18 gap-3 text-black duration-500 flex-col md:flex justify-center w-full bg-white/10 backdrop-blur-md md:backdrop-blur-none
   p-4
  md:static md:flex-row md:justify-start md:opacity-100 md:pointer-events-auto md:w-auto md:bg-transparent md:dark:bg-transparent md:rounded-none md:p-0
  dark:text-white`}
>
            
          {["home", "about",  "skills", "project", "contact"].map((section) => (
            <a
              key={section}
              className={` px-4 py-2 mr-4 font-semibold cursor-pointer border-none no-underline duration-500 border hover:border-blue-600 rounded-2xl hover:bg-blue-400  ${
                activeSection === section
                  ? "text-blue-500 active"
                  : " dark:md:text-gray-700 text-gray-800 dark:text-white md:text-white hover:bg-gray-200 "
              }
              `}
              onClick={() =>{
                setActiveSection(section);
                sectionRefs?.[section]?.current.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
            }
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

            </a>
          ))}
        </div>
<button
  onClick={toggleDarkMode}
  className="w-12 h-12 flex items-center justify-center cursor-pointer text-white bg-[#0767ac] border-none rounded-full outline-none dark:bg-gray-400 dark:text-black"
>
  {/* Icon Container */}
  <div className="relative w-6 h-6">
    {/* Light Mode Icon */}
    <CiDark
      className={`absolute inset-0 m-auto transition-all duration-500 transform
        ${darkMode ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
      size={25}
    />
    {/* Dark Mode Icon */}
    <CiLight
      className={`absolute inset-0 m-auto transition-all duration-500 transform
        ${darkMode ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
      size={25}
    />
  </div>
</button>

        {/* svg of sun in assets for light mode and moon for dark mode */}
            
        
      </header>
     
    </div>
  );
});

export default Header;
