import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress(Math.min((index / fullText.length) * 100, 100));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #030014 0%, #0a0a2e 50%, #030014 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]" style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />

      {/* Logo/Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8"
      >
        <div className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {text}
          <span className="animate-blink ml-1 text-purple-400">|</span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "200px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="w-[200px] h-[3px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
              transition: "width 0.1s ease",
            }}
          />
        </div>
        <div className="text-center mt-3 text-xs text-gray-500 font-mono tracking-wider">
          INITIALIZING
        </div>
      </motion.div>
    </motion.div>
  );
};
