import { useState, useEffect, forwardRef } from "react";

const Header = forwardRef(({ setActiveSection, activeSection, sectionRefs }, ref) => {
const getInitialDarkMode = () => {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    console.log("Loaded dark mode from storage:", JSON.parse(saved));  
    return JSON.parse(saved);  // will be true or false
     
  }
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
    console.log("Dark mode set to:", darkMode);
  }, [darkMode]);
const toggleDarkMode = () => {
  setDarkMode(prev => {
    const newValue = !prev;
    localStorage.setItem('darkMode', JSON.stringify(newValue));
    console.log("Dark mode toggled to:", newValue);
    return newValue;
  });
};

  return (
    <div
      ref={ref}
      className="fixed mb-6  text-black transition-colors duration-500 bg-gray-600 rounded w-full md:w-[95%] dark:text-black md:rounded-full max-md:rounded-none dark:bg-white"
    >
      <header className="flex justify-end p-4">
        {/* home, about, projects, contact links */}
         <button className="p-2 text-white rounded-md cursor-pointer top-4 right-4 dark:text-black md:hidden max-md:flex" onClick={() => setMenuOpen(!menuOpen)}>
       {menuOpen?<i className="text-xl transition-all duration-500 fa-solid fa-xmark ${menuOpen ? opacity-0 rotate-90 : opacity-100 rotate-0}"></i>:<i className="text-xl transition-all duration-500 fa-solid fa-list "></i>} 
      </button>
      
        <div className="flex mr-auto justify-self-start">
            
          {["home", "about", "projects", "skills"].map((section) => (
            <a
              key={section}
             
              className={`px-4 py-2 mr-4 font-semibold cursor-pointer text-white no-underline duration-500 border hover:border-blue-600  border-black rounded-2xl dark:border-white bg-none dark:text-black dark:hover:border-black dark:hover:text-amber-300 hover:bg-gray-800 ${
                activeSection === section
                  ? "bg-blue-600 text-white active"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() =>{
                setActiveSection(section);
                sectionRefs?.[section]?.current.scrollIntoView({
                  behavior: "smooth",
                })
            }
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

            </a>
          ))}
        </div>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-white bg-blue-500 border-none rounded-full outline-none dark:bg-gray-400 dark:text-black"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        
      </header>
     
    </div>
  );
});

export default Header;
