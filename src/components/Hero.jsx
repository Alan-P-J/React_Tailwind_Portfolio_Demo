// Hero.jsx
import React, { forwardRef } from 'react';

const Hero = forwardRef((props, ref) => {
  // const [darkMode, setDarkMode] = useState(null);

  // useEffect(() => {
  //   const saved = localStorage.getItem('darkMode');
  //   if (saved !== null) {
  //     setDarkMode(JSON.parse(saved));
  //   } else {
  //     const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     setDarkMode(isDarkMode);
  //   }
  // }, []);

  // useEffect(() => {
  //   document.documentElement.classList.toggle('dark', darkMode);
  //   localStorage.setItem('darkMode', darkMode);
  // }, [darkMode]);

  return (
    <section
      id="home"
      ref={ref}
      className="flex items-center justify-center py-10 transition-colors duration-500 pt-42"
    >
      <div className="p-6 mx-auto text-black duration-500 dark:text-white">
        <h1 className="mb-2 text-5xl font-bold ">Alan P J</h1>
        <p className="text-xl">Welcome to my portfolio website.</p>

        <div className="mt-4 space-x-4">
          <a
            href="#projects"
            className="px-4 py-2 font-semibold text-black no-underline duration-500 border border-black rounded-xl dark:border-white bg-none decoration-0 dark:text-white hover:bg-gray-800"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 font-semibold text-black duration-500 border border-blue-500 bg-none rounded-xl dark:text-white hover:bg-gray-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
});

export default Hero;
