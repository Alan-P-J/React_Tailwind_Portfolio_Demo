import React, { forwardRef} from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlay, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiReact, SiSpringboot, SiMongodb, SiPostgresql, SiTailwindcss, SiRedis, SiDocker, SiAwslambda } from 'react-icons/si';

const Projects = forwardRef((props,ref) => {
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
     
      liveDemo: "https://api.alanj.dev",
      sourceCode: "https://github.com/alanj/api-gateway",
      status: "completed"
    }
  ];

  return (
    <section ref={ref} id="project" className="py-20 bg-white pt-33 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Things I've built to solve real problems</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="cursor-pointer group">
              <div className="relative mb-4 overflow-hidden bg-gray-100 rounded-xl dark:bg-gray-800 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-10" />
                
                <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
                  <a href={project.liveDemo} className="p-2 bg-white rounded-lg">
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a href={project.sourceCode} className="p-2 bg-white rounded-lg">
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>
              
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-3 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;