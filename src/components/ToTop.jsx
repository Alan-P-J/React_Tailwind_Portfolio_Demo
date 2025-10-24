import React from "react";
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
      className="fixed p-3 text-white transition-colors duration-300 bg-gray-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-gray-700 dark:bg-white dark:text-black"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ToTop;
