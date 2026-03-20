import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#071A2C] shadow-md">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1300px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-[#2EC4F1]">
          Sanchita Sinha
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm text-[#EAF2F8]">
          <li><button onClick={() => handleScroll("hero")} className="hover:text-[#2EC4F1]">Home</button></li>
          <li><button onClick={() => handleScroll("about")} className="hover:text-[#2EC4F1]">About</button></li>
          <li><button onClick={() => handleScroll("skills")} className="hover:text-[#2EC4F1]">Skills</button></li>
          <li><button onClick={() => handleScroll("projects")} className="hover:text-[#2EC4F1]">Projects</button></li>
          <li><button onClick={() => handleScroll("achieve")} className="hover:text-[#2EC4F1]">Achievements</button></li>
          <li><button onClick={() => handleScroll("contact")} className="hover:text-[#2EC4F1]">Contact</button></li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#071A2C] border-t border-[#102A43]">
          <ul className="flex flex-col px-6 py-4 gap-4 text-[#EAF2F8]">
            <li><button onClick={() => handleScroll("hero")}>Home</button></li>
            <li><button onClick={() => handleScroll("about")}>About</button></li>
            <li><button onClick={() => handleScroll("skills")}>Skills</button></li>
            <li><button onClick={() => handleScroll("projects")}>Projects</button></li>
            <li><button onClick={() => handleScroll("achieve")}>Achievements</button></li>
            <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
}