import React from "react";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Database & Tools",
    items: ["MongoDB", "Postman", "Git", "GitHub", "VS Code", "Vercel", "Render"]
  }
];

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen py-20 px-4
                 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F]
                 text-[#EAF2F8]"
      style={{ scrollMarginTop: "70px" }}
    >
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1300px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 text-center">
          Technical Skills
        </h2>
        <div className="h-1 w-40 bg-[#2EC4F1] mx-auto rounded mb-10"></div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#102A43] rounded-xl p-6
                         hover:shadow-[0_0_20px_#2EC4F1]
                         transition duration-300"
            >
              <h3 className="text-[#2EC4F1] text-xl font-semibold mb-3">
                {skill.category}
              </h3>

              <p className="text-[#EAF2F8] leading-relaxed">
                {skill.items.join(", ")}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;