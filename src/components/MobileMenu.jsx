export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                     transition-all duration-500 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
      style={{
        background: menuOpen ? "rgba(3, 0, 20, 0.95)" : "transparent",
        backdropFilter: menuOpen ? "blur(20px)" : "none",
      }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white text-xl flex items-center justify-center focus:outline-none hover:bg-white/10 transition-all"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {links.map((link, idx) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-300 hover:text-white my-3 transform transition-all duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }        
              `}
          style={{ transitionDelay: menuOpen ? `${idx * 80}ms` : "0ms" }}
        >
          <span className="text-xs font-mono text-indigo-400/50 mr-2">{String(idx + 1).padStart(2, "0")}.</span>
          {link.label}
        </a>
      ))}
    </div>
  );
};
