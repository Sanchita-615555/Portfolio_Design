import { FaDatabase, FaNodeJs, FaReact, FaServer } from "react-icons/fa";

export default function About() {
  const skills = [
    { name: "MongoDB", icon: <FaDatabase size={30} /> },
    { name: "Express.js", icon: <FaServer size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "React.js", icon: <FaReact size={30} /> },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F] text-[#EAF2F8] px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="h-1 w-40 bg-[#2EC4F1] mx-auto rounded mb-6"></div>

        {/* About Text */}
       <p className="text-[#9FB3C8] text-lg md:text-base lg:text-lg leading-relaxed 
              max-w-3xl mx-auto mt-4 mb-10 text-justify">
  I am a <span className="font-semibold text-[#EAF2F8]">3rd-year BCA student </span> 
  with knowledge of the <span className="font-semibold text-[#2EC4F1]">MERN Stack</span>. 
  I am passionate about building clean and scalable web applications while continuously 
  learning and improving my skills in modern web development.
</p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#102A43] rounded-xl p-6 flex flex-col items-center
                         justify-center hover:shadow-[0_0_20px_#2EC4F1] transition"
            >
              <div className="mb-2">{skill.icon}</div>
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}