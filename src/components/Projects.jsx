import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlay, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiReact, SiSpringboot, SiMongodb, SiPostgresql, SiTailwindcss, SiRedis, SiDocker, SiAwslambda } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "fullstack",
      features: [
        "User authentication & authorization",
        "Shopping cart & wishlist functionality",
        "Payment integration with Stripe",
        "Admin dashboard for product management"
      ],
      techStack: {
        frontend: [{ icon: SiReact, name: "React", color: "text-blue-500" }, { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" }],
        backend: [{ icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" }],
        database: [{ icon: SiMongodb, name: "MongoDB", color: "text-green-600" }],
        tools: [{ icon: SiRedis, name: "Redis", color: "text-red-500" }]
      },
      liveDemo: "https://ecommerce-demo.alanj.dev",
      sourceCode: "https://github.com/alanj/ecommerce-platform",
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "fullstack",
      features: [
        "Real-time task updates with WebSockets",
        "Drag-and-drop task organization",
        "Team collaboration & comments",
        "Progress tracking & analytics"
      ],
      techStack: {
        frontend: [{ icon: SiReact, name: "React", color: "text-blue-500" }],
        backend: [{ icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" }],
        database: [{ icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" }],
        tools: [{ icon: SiDocker, name: "Docker", color: "text-blue-400" }]
      },
      liveDemo: "https://taskmanager.alanj.dev",
      sourceCode: "https://github.com/alanj/task-management-app",
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "frontend",
      features: [
        "Location-based weather forecasts",
        "Interactive weather maps",
        "7-day forecast with charts",
        "Mobile-responsive design"
      ],
      techStack: {
        frontend: [{ icon: SiReact, name: "React", color: "text-blue-500" }, { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" }],
        api: [{ name: "OpenWeather API", color: "text-orange-500" }]
      },
      liveDemo: "https://weather.alanj.dev",
      sourceCode: "https://github.com/alanj/weather-dashboard",
      status: "completed"
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A microservices API gateway with authentication, rate limiting, and request routing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "backend",
      features: [
        "JWT-based authentication",
        "Rate limiting & throttling",
        "Request routing & load balancing",
        "API documentation with Swagger"
      ],
      techStack: {
        backend: [{ icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" }],
        database: [{ icon: SiRedis, name: "Redis", color: "text-red-500" }],
        cloud: [{ icon: SiAwslambda, name: "AWS Lambda", color: "text-orange-500" }],
        tools: [{ icon: SiDocker, name: "Docker", color: "text-blue-400" }]
      },
      liveDemo: "https://api.alanj.dev",
      sourceCode: "https://github.com/alanj/api-gateway",
      status: "completed"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-500 bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-2xl group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20" />
                
                {/* Project Links */}
                <div className="absolute flex gap-2 top-4 right-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 transition-all duration-300 bg-white rounded-full dark:bg-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 transition-all duration-300 bg-white rounded-full dark:bg-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110"
                    title="Source Code"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="flex items-center gap-2 mb-2 font-semibold text-gray-900 dark:text-white">
                    <FaPlay className="text-blue-600" size={12} />
                    Key Features
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-blue-600">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="flex items-center gap-2 mb-3 font-semibold text-gray-900 dark:text-white">
                    <FaCode className="text-blue-600" size={14} />
                    Tech Stack
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(project.techStack).map(([category, technologies]) => (
                      <div key={category} className="flex items-center gap-3">
                        <span className="w-20 text-xs font-medium text-gray-500 capitalize dark:text-gray-400">
                          {category}:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 ${tech.color || 'text-gray-700 dark:text-gray-300'}`}
                            >
                              {tech.icon && <tech.icon className={tech.color} />}
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-medium text-center text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-medium text-center text-gray-700 transition-colors duration-300 border border-gray-300 rounded-lg dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <FaGithub size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <div className="text-lg text-gray-400 dark:text-gray-600">
              No projects found in this category.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;