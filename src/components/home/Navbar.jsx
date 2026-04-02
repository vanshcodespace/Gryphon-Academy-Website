export default function Navbar({ isVisible, isFullWidth, logoSrc }) {
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between px-3 py-2.5 sm:px-3.5 sm:py-3 transition-[width,border-radius,background-color,box-shadow,padding] duration-500 ease-in-out ${
          isFullWidth
            ? "rounded-none bg-[#01224F] shadow"
            : "rounded-xl bg-[#01224F]/95 shadow-lg"
        }`}
        style={{
          width: isFullWidth ? "100%" : "min(90vw, clamp(920px, 70vw, 1140px))",
        }}
      >
        <a href="#home" className="shrink-0">
          <img
            src={logoSrc}
            alt="Gryphon Academy"
            className="h-10 w-auto md:h-12 xl:h-14"
          />
        </a>

        <div className="hidden md:flex flex-1 items-center justify-center gap-8 font-medium text-white lg:gap-12 xl:gap-16">
          <a href="#why-us" className="hover:text-yellow-400 transition">
            Colleges
          </a>
          <a href="#why-us" className="hover:text-yellow-400 transition">
            Corporate
          </a>
          <a href="#events" className="hover:text-yellow-400 transition">
            Events
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            About us
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="group relative hidden shrink-0 overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#01224F] transition-all hover:shadow-lg md:inline-block lg:px-5 lg:py-2.5 lg:text-base"
        >
          <span className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-yellow-400 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100" />
          <span className="relative z-10 transition-colors duration-300">
            Partner With Us
          </span>
        </a>
      </div>
    </nav>
  );
}
