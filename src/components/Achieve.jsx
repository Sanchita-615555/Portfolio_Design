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
      "Gained hands-on experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js, including integrating RESTful APIs with frontend components and enhancing problem-solving skills through real-world application scenarios (June–October 2025)."
  },
  {
    title: "Basic Software Testing – Skill Assessment",
    description:
      "Successfully qualified in an evaluation-based certification program issued by ALPHABETZ, demonstrating foundational knowledge of software testing concepts (2024)."
  },
  {
    title: "Drawing Competition Recognition",
    description:
      "Recognized for excellent performance in a Drawing Competition organized by ANANDABAZAR PATRIKA and received a travel gift as a token of appreciation (2019)."
  },
  {
    title: "Web Development Internship – H & P Projects (Vision Bharat Trust)",
    description:
      "Successfully completed a Web Development Internship, gaining practical experience in front-end development, responsive UI implementation, and professional collaboration within a real-world project environment (Aug–Sep 2025)."
  }
];

export default function Achieve() {
  return (
    <section
      id="achieve"
      className="pt-28 py-20 px-6  bg-gradient-to-r from-[#071A2C] to-[#0B3C6F] text-[#EAF2F8] min-h-screen flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">
        Achievements & Certificates
      </h2>
      <div className="h-1 w-72 bg-[#2EC4F1] mx-auto rounded mb-10"></div>

      {/* Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {achieve.map((item, index) => (
    <div
      key={index}
      className="bg-[#102A43] rounded-xl p-4 sm:p-5 lg:p-6 w-full
                 hover:shadow-[0_0_20px_#2EC4F1] transition"
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
    </section>
  );
}