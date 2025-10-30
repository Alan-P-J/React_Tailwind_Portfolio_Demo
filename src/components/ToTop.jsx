import React from "react";
import { GoArrowUp } from "react-icons/go";
// with extra smooth scroll-to-top button
const ToTop = ({onTop}) => {
 
  const scrollToTop = () => {
    
    window.scrollTo({
      
      top: 0,
      behavior: "smooth",
    });
    console.log("Scrolled to top");
    onTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className="totop fixed z-50 flex items-center justify-center w-12 h-12 p-2
     text-lg text-white transition-all duration-300 bg-[#0767ac] 
     rounded-full shadow-lg cursor-pointer bottom-8 md:right-8  right-4
      dark:bg-gray-600 dark:text-white"
    >
<GoArrowUp size={23}/>
    </button>
  );
};

export default ToTop;
