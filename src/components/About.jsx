import React, { forwardRef } from "react";
import profileImg from "../assets/4300df04-1386-482a-b198-fc01290b561f.jpeg";
const AboutMe = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="bg-white md:pt-33 py-26 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="relative">
              <div className="mx-auto w-80 h-80 lg:mx-0">
                <div className="absolute inset-0 transform scale-105 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-6"></div>
                <img
                  src={profileImg}
                  alt="Alan P J"
                  className="relative z-10 object-cover w-full h-full shadow-2xl rounded-2xl"
                />
              </div>

              <div className="absolute z-10 p-4 bg-white shadow-xl -bottom-4 -right-4 dark:bg-gray-800 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Year Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Location:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Thrissur, Kerala, India
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Email:
                  </span>
                  <span className="font-medium text-blue-600">
                    alanpjpnc@gmail.com.com
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Language:
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      English, Malayalam, Hindi
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                My Journey in Tech
              </h3>

              <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate Full-Stack Developer who transitioned from a
                  different field, discovering my love for coding through
                  problem-solving and creative exploration.
                </p>
                <p>
                  Over the past year, I've honed my skills in technologies like
                  React, Spring Boot, and Mysql, building projects that range
                  from web applications to APIs.
                </p>
                <p>
                  I enjoy turning complex ideas into elegant, user-friendly
                  applications that balance functionality with great design. My
                  focus is on building scalable, maintainable systems where
                  thoughtful design meets strong engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
