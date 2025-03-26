import React from "react";
import "../styles/Projects.css"; 

const Projects = () => {
  const projects = [
    {
      title: "Railway Ticket Booking System",
      description:
        "A web application to book railway tickets with real-time seat availability, user authentication, and online payment integration.",
      technologies: [
        { name: "React.js", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "API Integration", level: 75 },
      ],
      link: "https://nareshpanchal21.github.io/Railwayticketbooking/",
    },
    {
      title: "Books Selling Website",
      description:
        "An e-commerce platform for buying and selling books online with cart functionality, secure checkout, and user authentication.",
      technologies: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
      ],
      link: "https://nareshpanchal21.github.io/Books-website/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Skills Progress Bar */}
            <div className="skills-container">
              {project.technologies.map((tech, i) => (
                <div key={i} className="skill">
                  <span>{tech.name}</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${tech.level}%` }}>
                      {tech.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
