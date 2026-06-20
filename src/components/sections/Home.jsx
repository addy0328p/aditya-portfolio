import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import profileImg from "../../assets/profile.jpg";

const TypewriterText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-blink ml-0.5 text-indigo-400">|</span>
    </span>
  );
};

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <motion.div
        animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full blur-[150px] -z-10"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent)" }}
      />
      <motion.div
        animate={{ y: [30, -30, 30], x: [15, -15, 15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full blur-[180px] -z-10"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12), transparent)" }}
      />

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 z-10 px-4 relative max-w-6xl mx-auto">
          {/* Profile Image with animated ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0 group"
          >
            {/* Animated gradient ring */}
            <div className="absolute -inset-1 rounded-full animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "conic-gradient(from 0deg, #6366f1, #a855f7, #22d3ee, #6366f1)",
                padding: "3px",
                borderRadius: "9999px",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#030014]" />
            </div>
            
            <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-transparent">
              <img 
                src={profileImg}
                alt="Aditya Pandey" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#0a0a2e]/90 backdrop-blur-xl border border-emerald-500/30 rounded-full px-4 py-1.5 shadow-lg">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-emerald-300 whitespace-nowrap">Open to work</span>
            </div>
          </motion.div>

          <div className="text-center md:text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-number mb-4 block">Software Developer</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight pb-2">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Aditya Pandey
                </span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-10 h-8 font-medium"
            >
              <TypewriterText 
                texts={[
                  "SDE Intern @ CausalFunnel 🚀",
                  "Full Stack Developer (MERN + Next.js)",
                  "500+ DSA Problems Solved 🔥",
                  "LangChain | AI | Vector DB Explorer",
                  "Open Source Contributor 🌟"
                ]} 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center md:justify-start items-center gap-4 flex-wrap mb-10"
            >
              <a
                href="https://drive.google.com/file/d/1l1nBIZO8Dijh86XNu6qFeciSyMv6TDK-/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 py-3 px-7 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a855f7)",
                  boxShadow: "0 0 25px rgba(99, 102, 241, 0.3)",
                }}
              >
                Hire Me
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 glass-panel text-gray-300 hover:text-white py-3 px-7 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:border-indigo-500/30"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="flex justify-center md:justify-start items-center gap-5"
            >
              <a href="https://www.linkedin.com/in/aditya-p01/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/addy0328p" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="mailto:aditya12bone@gmail.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <span className="text-xs font-mono tracking-wider">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};
