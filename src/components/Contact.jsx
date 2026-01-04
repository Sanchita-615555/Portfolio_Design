
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F] text-[#EAF2F8] min-h-screen flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
      <div className="h-1 w-40 bg-[#2EC4F1] mx-auto rounded mb-6"></div>

      {/* Intro Text */}
      <p className="text-[#9FB3C8] text-center max-w-2xl mb-10">
        I am looking for job opportunities and stipend-based internships to apply my skills and gain
real-world experience. Feel free to connect with me through the platforms below.

      </p>

      {/* Contact Cards */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">

 {/* Location */}
        <div className="bg-[#102A43] rounded-xl p-6 flex items-center gap-4
                        hover:shadow-[0_0_20px_#2EC4F1] transition">
          <FaMapMarkerAlt size={28} className="text-[#2EC4F1]" />
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-[#9FB3C8] break-all">Debipur, India</p>
          </div>
        </div>



        {/* Email */}
        <div className="bg-[#102A43] rounded-xl p-6 flex items-center gap-4
                        hover:shadow-[0_0_20px_#2EC4F1] transition">
          <FaEnvelope size={28} className="text-[#2EC4F1]" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-[#9FB3C8] break-all">sanchitasinha628@gmail.com</p>
          </div>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Sanchita-615555"
          target="_blank"
          rel="noreferrer"
          className="bg-[#102A43] rounded-xl p-6 flex items-center gap-4
                     hover:shadow-[0_0_20px_#2EC4F1] transition"
        >
          <FaGithub size={28} className="text-[#2EC4F1]" />
          <div>
            <p className="font-semibold">GitHub</p>
            <p className="text-[#9FB3C8] break-all">github.com/Sanchita-615555</p>
          </div>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Sanchita_Sinha/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#102A43] rounded-xl p-6 flex items-center gap-4
                     hover:shadow-[0_0_20px_#2EC4F1] transition"
        >
          <FaCode size={28} className="text-[#2EC4F1]" />
          <div>
            <p className="font-semibold">LeetCode</p>
            <p className="text-[#9FB3C8] break-all">leetcode.com/Sanchita_Sinha</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/sanchita-sinha-9bb56528b"
          target="_blank"
          rel="noreferrer"
          className="bg-[#102A43] rounded-xl p-6 flex items-center gap-4
                     hover:shadow-[0_0_20px_#2EC4F1] transition"
        >
          <FaLinkedin size={28} className="text-[#2EC4F1]" />
          <div>
            <p className="font-semibold">LinkedIn</p>
            <p className="text-[#9FB3C8] break-all">linkedin.com/in/sanchita-sinha-9bb56528b</p>
          </div>
        </a>
      </div>
    </section>
  );
}