import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 text-white bg-gray-300 dark:bg-gray-800">
      <div className="container px-6 mx-auto">
        <div className="text-sm text-center text-gray-700 dark:text-gray-400">
          © {currentYear} Alan P J. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;