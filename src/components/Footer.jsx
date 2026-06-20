import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-mono text-lg font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              &lt;AP /&gt;
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/aditya-p01/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/addy0328p"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:aditya12bone@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600 flex items-center justify-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-rose-500" /> by Aditya Pandey · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
