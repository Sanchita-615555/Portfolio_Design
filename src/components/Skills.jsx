import React from "react";

const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript(ES6+)", "React.js", "Tailwind CSS"]
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
      className="py-20 px-6 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F] text-[#EAF2F8] min-h-screen flex flex-col items-center"
      style={{ scrollMarginTop: "70px" }} 
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
      <div className="h-1 w-40 bg-[#2EC4F1] mx-auto rounded mb-6"></div>

      <div className="mt-10 w-full max-w-4xl flex flex-col items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#102A43] rounded-xl p-6 w-full max-w-md mb-6 flex flex-col items-center
                       hover:shadow-[0_0_20px_#2EC4F1] transition"
          >
            <h2 className="text-[#2EC4F1] text-xl font-semibold mb-2">{skill.category}</h2>
            <p className="text-[#EAF2F8] text-center">
              {skill.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;