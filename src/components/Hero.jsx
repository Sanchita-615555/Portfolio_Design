export default function Hero() {
  return (
<section
  id="hero"
  className="min-h-screen pt-20 flex items-center justify-center
             bg-gradient-to-r from-[#071A2C] to-[#0B3C6F] px-4"
>
  <div className="w-full px-6">
        <div className="flex flex-col items-center text-center gap-10">

          {/* TEXT */}
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Hi, I’m <span className="text-[#2EC4F1]">Sanchita Sinha</span>
            </h1>

            <p className="text-[#2EC4F1] text-base sm:text-lg font-medium mb-4">
              Full Stack Developer
            </p>

            <p className="text-[#9FB3C8] leading-relaxed text-sm sm:text-base">
              <span className="text-[#EAF2F8] font-semibold">
                3rd-year BCA student
              </span>{" "}
              with strong knowledge of{" "}
              <span className="text-[#2EC4F1] font-medium">
                MERN Stack
              </span>
              , passionate about building clean, scalable, and modern web apps.
            </p>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center">
            <div
              className="w-52 sm:w-64 h-72 sm:h-80 rounded-3xl p-1
                         bg-gradient-to-b from-[#2EC4F1] to-transparent shadow-xl"
            >
              <img
                src="/photo.jpg"
                alt="Sanchita Sinha"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/CV.pdf"
              download
              className="px-5 py-3 rounded-lg
                         bg-[#2EC4F1] text-[#071A2C]
                         font-semibold hover:opacity-80 transition text-center"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg
                         border border-[#2EC4F1]
                         text-[#2EC4F1]
                         hover:bg-[#2EC4F1] hover:text-[#071A2C]
                         transition text-center"
            >
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}