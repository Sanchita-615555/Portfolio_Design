export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 min-h-screen flex items-center
                 bg-gradient-to-r from-[#071A2C] to-[#0B3C6F]"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center gap-8">

          {/* TEXT */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#EAF2F8] mb-3">
           Hi, I’m <span className="text-[#2EC4F1]">Sanchita Sinha</span>
            </h1>

            <p className="text-[#2EC4F1] text-lg font-medium mb-4">
               Full Stack Developer
            </p>

<p className="text-[#9FB3C8] leading-relaxed">
  <span className="text-[#EAF2F8] font-semibold">3rd-year BCA student</span> with
  strong knowledge of the <span className="text-[#2EC4F1] font-medium">MERN stack</span>,
  passionate about building <span className="text-[#EAF2F8]">clean</span>,
  <span className="text-[#EAF2F8]"> scalable</span>, and
  <span className="text-[#EAF2F8]"> modern</span> web applications.
</p>

          </div>

          {/* PHOTO */}
          <div className="flex justify-center">
            <div
              className="w-64 h-80 rounded-3xl p-1
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
          <div className="flex gap-4 mt-1">
            <a
              href="/CV.pdf"
              download
              className="px-5 py-3 rounded-lg
                         bg-[#2EC4F1] text-[#071A2C]
                         font-semibold hover:opacity-80 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg
                         border border-[#2EC4F1]
                         text-[#2EC4F1]
                         hover:bg-[#2EC4F1] hover:text-[#071A2C]
                         transition"
            >
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}