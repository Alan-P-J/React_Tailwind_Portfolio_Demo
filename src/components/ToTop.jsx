import React from "react";
import { GoArrowUp } from "react-icons/go";
// with extra smooth scroll-to-top button
const ToTop = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 flex items-center justify-center w-12 h-12 p-2
     text-lg text-white transition-colors duration-300 bg-[#0767ac] 
     rounded-full shadow-lg cursor-pointer bottom-8 right-8
      hover:bg-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-200"
    >
<GoArrowUp size={23}/>
    </button>
  );
};

export default ToTop;
