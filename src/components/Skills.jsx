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

const extraSkills = [
  {
    category: "Soft Skills",
    items: ["Teamwork", "Time Management", "Leadership", "Effective Communication"]
  },
  {
    category: "Creative Skills",
    items: ["Drawing"]
  },
  {
    category: "Languages",
    items: ["English", "Bengali"]
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
      <div className="w-full max-w-[1300px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 text-center">
          Skills
        </h2>
        <div className="h-1 w-40 bg-[#2EC4F1] mx-auto rounded mb-10"></div>

        {/* 🔹 Technical Skills */}
        <h3 className="text-xl font-semibold mb-6 text-[#2EC4F1] text-center">
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#102A43] rounded-xl p-6
                         hover:shadow-[0_0_20px_#2EC4F1]
                         transition duration-300"
            >
              <h4 className="text-lg font-semibold mb-3">
                {skill.category}
              </h4>
              <p className="text-[#9FB3C8]">
                {skill.items.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Other Skills */}
        <h3 className="text-xl font-semibold mb-6 text-[#2EC4F1] text-center">
          Other Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extraSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#102A43] rounded-xl p-6
                         hover:shadow-[0_0_20px_#2EC4F1]
                         transition duration-300"
            >
              <h4 className="text-lg font-semibold mb-3">
                {skill.category}
              </h4>
              <p className="text-[#9FB3C8]">
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