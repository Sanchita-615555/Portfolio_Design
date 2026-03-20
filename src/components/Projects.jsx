import React from "react";

const projects = [
  {
    title: "CIVIC SAFETY Website",
    description:
      "Civic Safety is a web application designed to enhance community safety by allowing users to report incidents and access local safety resources.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/CIVIC_SAFETY-"
  },
  {
    title: "Full Stack Note Taking CRUD Application",
    description:
      "A simple full-stack Note Taking app built with the MERN stack that lets you add, edit, update, and delete records.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/Note_Taking_CRUD"
  },
  {
    title: "JWT Project",
    description:
      "This project demonstrates secure user authentication with signup, login, and protected routes.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Sanchita-615555/JWT-Project"
  },
  {
    title: "GRAFIQORA Project",
    description:
      "A React-based web project designed to showcase services, features, and modern UI design.",
    tech: ["React.js"],
    github: "https://github.com/Sanchita-615555/Grafiqora"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 px-4
                 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F]
                 text-[#EAF2F8]"
      style={{ scrollMarginTop: "70px" }}
    >
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1300px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="h-1 w-28 bg-[#2EC4F1] mx-auto rounded mb-10"></div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#102A43] rounded-xl p-6
                         hover:shadow-[0_0_20px_#2EC4F1]
                         transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-[#9FB3C8] mb-3">
                {project.description}
              </p>

              <p className="text-[#2EC4F1] mb-3 text-sm">
                {project.tech.join(", ")}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#2EC4F1] font-medium hover:underline"
              >
                GitHub →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}