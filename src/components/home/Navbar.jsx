export default function Navbar({ isVisible, logoSrc }) {
  return (
    <nav
      className={`fixed z-50 w-full bg-[#01224F] shadow transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <a href="#home" className="shrink-0">
          <img
            src={logoSrc}
            alt="Gryphon Academy"
            className="h-16 w-auto sm:h-15"
          />
        </a>

        <div className="hidden md:flex gap-8 font-medium text-white">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#why-us" className="hover:text-yellow-400 transition">
            Why Us
          </a>
          <a href="#events" className="hover:text-yellow-400 transition">
            Events
          </a>
          <a href="#blogs" className="hover:text-yellow-400 transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        <button className="bg-white text-[#01224F] px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Apply Now
        </button>
      </div>
    </nav>
  );
}
