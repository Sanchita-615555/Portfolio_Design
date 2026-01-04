import React from "react";

const projects = [
  {
    title: "CIVIC SAFETY Website",
    description: "Civic Safety is a web application designed to enhance community safety by allowing users to report incidents and access local safety resources.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/CIVIC_SAFETY-"
  },
  {
    title: "Full Stack Note Taking CRUD Application",
    description: "A simple full-stack Note Taking app built with the MERN stack that lets you add, edit, update, and delete student records (name, roll, subject, address, email).",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/Note_Taking_CRUD"
  },
  {
    title: "JWT Project",
    description: "This project demonstrates secure user authentication with signup, login, and protected routes.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/JWT-Project"
  },
  {
    title: "GRAFIQORA Project",
    description: "A React-based web project designed to showcase services, features, and modern UI design with responsive layout.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/Grafiqora"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"  
      className="py-20 px-6 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F] text-[#EAF2F8] min-h-screen flex flex-col items-center"
      style={{ scrollMarginTop: "70px" }}     >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div className="h-1 w-30 bg-[#2EC4F1] mx-auto rounded mb-10"></div>

      <div className="w-full max-w-4xl flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#102A43] rounded-xl p-6 w-full mb-6
                       hover:shadow-[0_0_20px_#2EC4F1] transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-[#EAF2F8] mb-3">{project.description}</p>
            <p className="text-[#2EC4F1] mb-3">{project.tech.join(", ")}</p>
            <a href={project.github} target="_blank" rel="noreferrer" className="text-[#2EC4F1] font-medium">
              GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}