import React from 'react';
import { forwardRef } from 'react';
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, 
  FaPython, FaDatabase, FaServer, FaCode 
} from 'react-icons/fa';
import { 
  SiJavascript, SiSpringboot, SiVuedotjs, SiTailwindcss, 
  SiMongodb, SiPostgresql, SiLaravel, SiJest, SiMysql, SiKubernetes, SiTerraform, SiJenkins, 
  SiNodedotjs
} from 'react-icons/si';

const Skills = forwardRef((props,ref) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-xl text-blue-500" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" />, level: "proficient" },
        { name: "Vue.js", icon: <SiVuedotjs  className="text-green-700" />, level: "proficient" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: "proficient" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: "proficient" },
        { name: "HTML/CSS", icon: <FaCode className="text-blue-500" />, level: "proficient" },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-xl text-green-500" />,
      skills: [
        { name: "Springboot", icon: <SiSpringboot className="text-green-700" />, level: "proficient" },
         { name: "REST APIs", icon: <FaServer className="text-blue-500" />, level: "proficient" },
        { name: "Node.js", icon: <SiNodedotjs className="text-gray-800" />, level: "familiar" },
        { name: "Python", icon: <FaPython className="text-blue-600" />, level: "familiar" },
        { name: "PHP", icon: <SiLaravel className="text-pink-500" />, level: "familiar" },
       
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-xl text-blue-500" />,
      skills: [
        { name: "Mysql", icon: <SiMysql size={28} className="text-blue-900" />, level: "proficient" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "familiar" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: "familiar" },
 
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaDocker className="text-xl text-blue-500" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "proficient" },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: "proficient" },
        { name: "AWS", icon: <FaAws className="text-orange-500" />, level: "familiar" },

      ]
    }
  ];

  const getLevelStyles = (level) => {
    switch (level) {
      case "proficient":
        return "bg-blue-500 text-white";
      case "familiar":
        return "bg-blue-400 text-white";
      case "learning":
        return "bg-blue-300 text-blue-900";
      default:
        return "bg-blue-200 text-blue-900";
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case "proficient": return "Proficient";
      case "familiar": return "Familiar";
      case "learning": return "Learning";
      default: return "";
    }
  };

  return (
    <section id="skills" ref={ref} className="py-16 bg-none from-slate-50 to-blue-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-transparent dark md:text-4xl bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-slate-600">
            A comprehensive overview of my technical stack and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 transition-all duration-300 bg-white border shadow-lg dark:bg-gray-400 rounded-xl border-slate-200 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200 dark:border-gray-300">
                {category.icon}
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between p-3 transition-all duration-200 rounded-lg bg-none hover:bg-slate-100 hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center text-lg">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-slate-700">{skill.name}</span>
                    </div>
                    <div>
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getLevelStyles(skill.level)}`}
                      >
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;