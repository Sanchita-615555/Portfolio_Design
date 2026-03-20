import React from "react";

const achieve = [
  {
    title: "Certificate in Information Technology",
    description:
      'Achieved an "Excellent" grade (83%) in the Certificate in Information Technology from National Youth Computer (Govt. Registered, ISO 9001:2015 Certified), 2018.'
  },
  {
    title: "MERN Stack Internship Certification – TopStack Technologies",
    description:
      "Gained hands-on experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js..."
  },
  {
    title: "Basic Software Testing – Skill Assessment",
    description:
      "Successfully qualified in an evaluation-based certification program issued by ALPHABETZ (2024)."
  },
  {
    title: "Drawing Competition Recognition",
    description:
      "Recognized for excellent performance in a Drawing Competition organized by ANANDABAZAR PATRIKA (2019)."
  },
  {
    title: "Web Development Internship – H & P Projects",
    description:
      "Completed a Web Development Internship with real-world project experience (Aug–Sep 2025)."
  }
];

export default function Achieve() {
  return (
    <section
      id="achieve"
      className="w-full min-h-screen py-20 px-4
                 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F]
                 text-[#EAF2F8] flex flex-col items-center"
    >
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1300px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 text-center">
          Achievements & Certificates
        </h2>
        <div className="h-1 w-72 bg-[#2EC4F1] mx-auto rounded mb-10"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {achieve.map((item, index) => (
            <div
              key={index}
              className="bg-[#102A43] rounded-xl p-5 lg:p-6
                         hover:shadow-[0_0_20px_#2EC4F1] 
                         transition duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#EAF2F8]">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#9FB3C8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}