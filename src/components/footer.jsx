import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-white bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="text-sm text-center text-gray-400">
          © {currentYear} Alan P J. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;