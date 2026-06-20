import { RevealOnScroll } from "../RevealOnScroll";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "CausalFunnel",
      date: "Nov 2025 – Present",
      isCurrent: true,
      tech: ["MongoDB", "Python", "Remix", "React.js", "REST APIs", "JavaScript"],
      points: [
        <>Contributed to core <strong>Heatmap</strong> and <strong>User Journey</strong> analytics tools — improved frontend responsiveness by <strong>25%</strong>.</>,
        <>Resolved <strong>30+ API/JSON</strong> issues and implemented backend fixes using <strong>Firebase & Python</strong>, reducing API error rate by <strong>40%</strong>.</>,
        <>Enhanced React-based <strong>A/B Testing UI</strong> and API handling, increasing experiment reliability by <strong>30%</strong>.</>,
        <>Fixed layout and component alignment across the company <strong>WordPress</strong> site — updated <strong>50+ components</strong> to improve UI.</>,
      ],
      color: "indigo",
    }
  ];

  const colorMap = {
    indigo: {
      dot: "bg-indigo-400",
      dotShadow: "shadow-[0_0_15px_rgba(99,102,241,0.8)]",
      border: "hover:border-indigo-500/30",
      shadow: "hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)]",
      badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      bullet: "text-indigo-400",
      tech: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      icon: "bg-indigo-500/20",
    },
    purple: {
      dot: "bg-purple-400",
      dotShadow: "shadow-[0_0_15px_rgba(168,85,247,0.8)]",
      border: "hover:border-purple-500/30",
      shadow: "hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)]",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      bullet: "text-purple-400",
      tech: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      icon: "bg-purple-500/20",
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-[150px] -z-10" />

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <span className="section-number">02 / Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              Work Experience
            </h2>
          </div>

          <div className="relative">
            {experiences.map((exp, idx) => {
              const colors = colorMap[exp.color];

              return (
                <div key={idx} className="relative mb-16 flex flex-col items-center w-full">
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className={`glass-panel p-7 md:p-10 rounded-2xl w-full max-w-4xl mx-auto ${colors.border} ${colors.shadow} transition-all duration-300 relative`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <div className={`flex items-center gap-2 text-xs mt-3 md:mt-0 ${colors.badge} border inline-flex px-3 py-1.5 rounded-full`}>
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.date}
                        {exp.isCurrent && (
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse ml-1" />
                        )}
                      </div>
                    </div>
                    <h4 className={`text-base ${colors.bullet} font-semibold mb-5 flex items-center gap-2`}>
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className={`text-[11px] ${colors.tech} border px-2 py-0.5 rounded-md`}>{tech}</span>
                      ))}
                    </div>

                    <ul className="text-gray-300 space-y-2.5 leading-relaxed text-sm">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className={`${colors.bullet} mt-0.5 text-xs`}>▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
