import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => (
  <section
    id="about"
    ref={ref}
    className="flex items-center justify-center h-screen text-black transition-colors duration-500 dark:bg-transparent dark:text-white"
  >
    <h1 className="text-4xl">About</h1>
    <p>edbegrtbgertbrtbgrthbrth</p>
  </section>
));

export default About;
