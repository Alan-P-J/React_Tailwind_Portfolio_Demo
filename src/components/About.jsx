import React, { forwardRef } from "react";
import profileImg from "../assets/4300df04-1386-482a-b198-fc01290b561f.jpeg";
const AboutMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="py-16 bg-white md:pt-33 dark:bg-gray-900"
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
                    Role:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Full Stack Developer (Java Focus)
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Availability:
                  </span>
                  <span className="font-medium text-green-600">
                    Open to Opportunities
                  </span>
                </div>
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
                    alanpjpnc@gmail.com
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
                  I’m a Full Stack Developer with 1+ year of hands-on experience
                  working on enterprise-grade web applications using Java,
                  Spring Boot, and React. Currently, I contribute to building
                  and migrating payroll and HR systems with a strong focus on
                  backend development.
                </p>
                <p>
                  Over the past year, I've honed my skills in technologies like
                  React, Spring Boot, and Mysql, building projects that range
                  from web applications to APIs.My core strengths include
                  designing RESTful APIs, implementing business logic with
                  Spring Boot and JPA/Hibernate, and working with relational
                  databases like PostgreSQL and MySQL. I follow clean code
                  practices and enjoy building scalable, maintainable systems.
                </p>
                <p>
                  On the frontend, I use React to build responsive,
                  user-friendly interfaces that integrate seamlessly with
                  backend services. I enjoy working in Agile teams,
                  collaborating across roles, and continuously improving my
                  technical depth.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tech Stack: Java, Spring Boot, JPA/Hibernate, React,
                  PostgreSQL, MySQL, Git
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
