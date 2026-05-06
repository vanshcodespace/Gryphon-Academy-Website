import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isVisible, isFullWidth, logoSrc }) {
  const location        = useLocation();
  const currentPath     = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home",       to: "/" },
    { label: "Colleges",   to: "/colleges" },
    { label: "Corporate",  to: "/corporate" },
    { label: "Events",     to: "/events" },
    { label: "About Us",   to: "/about" },
    { label: "Contact",    to: "/contact" },
  ];

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = useCallback(
    (to) =>
      to === "/"
        ? currentPath === "/"
        : currentPath === to || currentPath.startsWith(`${to}/`),
    [currentPath],
  );

  return (
    <>
      {/* ── Desktop / scrolled nav bar ────────────────────────────── */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        role="navigation"
        aria-label="Main navigation"
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
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" aria-label="Gryphon Academy home">
              <img
                src={logoSrc}
                alt="Gryphon Academy"
                className="h-10 w-auto md:h-12 xl:h-14"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-5 font-medium text-white lg:gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? "page" : undefined}
                className={`px-2 py-1.5 transition-all duration-200 ${
                  isActive(link.to)
                    ? "text-transparent bg-clip-text bg-[linear-gradient(to_right,#68a1fc,#ff4d68)] font-semibold"
                    : "text-white hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,#68a1fc,#ff4d68)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="group relative hidden shrink-0 overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#01224F] transition-all hover:shadow-lg md:inline-block lg:px-5 lg:py-2.5 lg:text-base"
          >
            <span className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[linear-gradient(to_right,#1B3A6B,#7B1B2A)] opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Partner With Us
            </span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-drawer"
            onClick={() => setMenuOpen((o) => !o)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
          >
            {/* Animated hamburger → X icon */}
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" style={{ transition: "all 0.2s" }} />
                  <line x1="6" y1="6" x2="18" y2="18" style={{ transition: "all 0.2s" }} />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer overlay ─────────────────────────────────── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <aside
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col bg-[#01224F] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logoSrc} alt="Gryphon Academy" className="h-9 w-auto" />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white focus:outline-none"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5" aria-label="Mobile links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                isActive(link.to)
                  ? "bg-white/10 text-white font-semibold"
                  : "text-white/80 hover:bg-white/8 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#68a1fc]" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="border-t border-white/10 px-4 py-5">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-white py-3 text-base font-semibold text-[#01224F] shadow-lg transition-all hover:bg-blue-50"
          >
            Partner With Us
          </Link>
        </div>
      </aside>
    </>
  );
}
