import React, { forwardRef } from 'react';
import { FaCode, FaMobile, FaServer, FaCloud, FaReact, FaJava } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const Skills = forwardRef((props,ref) => {
//   const skillsLinks = [
//   { name: "React", link: "https://react.dev/", icon: <FaReact size={20}/> },
//   { name: "Spring Boot", link: "https://spring.io/projects/spring-boot", icon: <SiSpringboot size={20}/> },
//   { name: "Java", link: "https://docs.oracle.com/en/java/", icon: <FaJava size={20}/> },
// ];
  // const skills = [
  //   {
  //     icon: FaCode,
  //     title: 'Full-Stack Development',
  //     description: 'Building complete web solutions from UI to database with robust, scalable architectures.',
  //     technologies: ['React', 'Spring Boot', 'MongoDB', 'REST APIs'],
  //     technologyLinks:['https://react.dev/learn','https://docs.spring.io/spring-boot/index.html','https://www.mongodb.com/docs/','https://www.ibm.com/think/topics/rest-apis#:~:text=A%20REST%20API%20is%20an,to%20connect%20distributed%20hypermedia%20systems.']
  //   },
  //   {
  //     icon: FaMobile,
  //     title: 'Frontend Engineering',
  //     description: 'Creating responsive, high-performance interfaces focused on accessibility and user experience.',
  //     technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vue.js'],
  //     technologyLinks:['https://react.dev/learn','https://v2.tailwindcss.com/docs','https://www.w3schools.com/js/','https://vuejs.org/guide/introduction.html']
  //   },
  //   {
  //     icon: FaServer,
  //     title: 'Backend Engineering',
  //     description: 'Designing secure, high-efficiency APIs and microservices for seamless data flow and performance.',
  //     technologies: ['Spring Boot', 'Laravel', 'PostgreSQL', 'Redis'],
  //     technologyLinks:['https://docs.spring.io/spring-boot/index.html','https://laravel.com/docs/12.x','https://www.postgresql.org/docs/','https://redis.io/docs/latest/']
  //   },
  //   {
  //     icon: FaCloud,
  //     title: 'Cloud & DevOps',
  //     description: 'Automating deployment pipelines and managing scalable infrastructure across cloud platforms.',
  //     technologies: ['Docker', 'AWS', 'CI/CD', 'Git'],
  //     technologyLinks:['https://docs.docker.com/','https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html','https://aws.amazon.com/devops/what-is-devops/','https://git-scm.com/docs/git']
  //   },
  // ];

  const skills = [
  {
    icon: FaServer,
    title: 'Backend Development',
    description:
      'Designing and implementing secure REST APIs and business logic using Java and Spring Boot.',
    technologies: ['Java', 'Spring Boot', 'JPA/Hibernate', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    icon: FaReact,
    title: 'Frontend Development',
    description:
      'Building responsive, user-friendly interfaces using modern React ecosystem tools.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    icon: FaCode,
    title: 'Software Engineering Fundamentals',
    description:
      'Applying OOP principles, clean architecture, validation, and exception handling in scalable systems.',
    technologies: ['OOP', 'Collections', 'Exception Handling', 'JWT Authentication'],
  },
  {
    icon: FaCloud,
    title: 'Tools & Collaboration',
    description:
      'Version control, API testing, and Agile collaboration in team environments.',
    technologies: ['Git', 'GitHub', 'Postman', 'Agile'],
  },
];
  return (
    <section
    ref={ref}
      id="skills"
     className="py-20 transition-colors duration-300 bg-gray-100 md:pt-12 dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Technical expertise across the full development stack — from frontend interfaces to backend systems and deployment.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-8 transition-all duration-500 bg-white shadow-lg skills dark:bg-gray-800 rounded-2xl hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 text-blue-500 duration-500 bg-blue-100 rounded-lg dark:bg-blue-900 dark:text-blue-400">
                  <skill.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 duration-500 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              <p className="mb-5 text-gray-600 duration-500 dark:text-gray-400">
                {skill.description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;