import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { AiProjectModal } from "../AiProjectModal";

export const Projects = () => {
  const [aiProject, setAiProject] = useState(null);

  const projects = [
    {
      title: "TripAI | Multi-Agent Travel Planner",
      desc: [
        <>Built a <strong>multi-agent travel planning platform</strong> with supervisor-based routing across flight, hotel, weather, budget, and itinerary agents.</>,
        <>Integrated <strong>Tavily, AviationStack, and OpenWeather</strong> through MCP tools to provide live travel research with graceful service fallbacks.</>,
        <>Implemented <strong>human-in-the-loop approval</strong>, PostgreSQL workflow persistence, input guardrails, and a responsive animated interface; containerized the full stack with Docker.</>,
      ],
      aiSummary: "A multi-agent travel planning platform with supervisor-based routing across flight, hotel, weather, budget, and itinerary agents. It uses Tavily, AviationStack, and OpenWeather through MCP tools for live research, with graceful fallbacks. It includes human-in-the-loop approval, PostgreSQL workflow persistence, input guardrails, a responsive interface, and Docker deployment.",
      tech: ["Python", "FastAPI", "LangGraph", "LangChain", "MCP", "PostgreSQL", "Groq", "Docker"],
      link: "https://github.com/addy0328p/TripPlan_Ai",
      live: "https://tripplan-ai.onrender.com/",
      accent: "indigo",
    },
    {
      title: "Image Generation using GAN",
      desc: [
        <>Developed an <strong>AI image-generation system</strong> using GANs trained on the <strong>CIFAR-10 dataset of 50K+ images</strong>.</>,
        <>Designed and optimized independent <strong>Generator and Discriminator</strong> networks for stable adversarial training and diverse synthetic outputs.</>,
        <>Built TensorFlow/Keras training, evaluation, and visualization pipelines using <strong>NumPy and Matplotlib</strong>.</>,
      ],
      aiSummary: "An AI image-generation system using GANs trained on more than 50,000 CIFAR-10 images. Independent Generator and Discriminator networks support stable adversarial training and diverse outputs, with TensorFlow/Keras pipelines for training, evaluation, and visualization.",
      tech: ["Python", "TensorFlow", "Keras", "GANs", "CIFAR-10", "NumPy", "Matplotlib"],
      link: "https://github.com/addy0328p/Gen_AI_Project/tree/main",
      accent: "purple",
    },
    {
      title: "Prime Bid | Real-Time Auction Platform",
      desc: [
        <>Developed a real-time auction platform supporting <strong>100+ concurrent users</strong> and <strong>50+ bids per second</strong>.</>,
        <>Streamlined an admin dashboard for <strong>1K+ users</strong> and <strong>500+ listings</strong>, reducing manual effort by <strong>80%</strong>.</>,
        <>Automated auction management for <strong>200+ monthly listings</strong> and secured authentication with <strong>JWT and Bcrypt</strong>.</>,
      ],
      aiSummary: "A real-time auction platform supporting more than 100 concurrent users and over 50 bids per second. Its admin dashboard manages more than 1,000 users and 500 listings, while scheduled automation handles more than 200 monthly listings. Authentication uses JWT and Bcrypt.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary", "Node-Cron"],
      link: "https://github.com/addy0328p/mern_auction_platform_backend",
      live: "https://ephemeral-pegasus-ac7e2d.netlify.app/",
      accent: "emerald",
    },
  ];

  const accentColors = {
    indigo: {
      text: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      hoverBorder: "hover:border-indigo-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)]",
      hoverBg: "hover:bg-indigo-500/15",
      gradient: "from-indigo-500/20 to-indigo-500/0",
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      hoverBorder: "hover:border-purple-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)]",
      hoverBg: "hover:bg-purple-500/15",
      gradient: "from-purple-500/20 to-purple-500/0",
    },
    emerald: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(16,185,129,0.1)]",
      hoverBg: "hover:bg-emerald-500/15",
      gradient: "from-emerald-500/20 to-emerald-500/0",
    },
    rose: {
      text: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      hoverBorder: "hover:border-rose-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(244,63,94,0.1)]",
      hoverBg: "hover:bg-rose-500/15",
      gradient: "from-rose-500/20 to-rose-500/0",
    },
    cyan: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(6,182,212,0.1)]",
      hoverBg: "hover:bg-cyan-500/15",
      gradient: "from-cyan-500/20 to-cyan-500/0",
    },
    amber: {
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      hoverBorder: "hover:border-amber-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(245,158,11,0.1)]",
      hoverBg: "hover:bg-amber-500/15",
      gradient: "from-amber-500/20 to-amber-500/0",
    },
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]",
      hoverBg: "hover:bg-blue-500/15",
      gradient: "from-blue-500/20 to-blue-500/0",
    },
    pink: {
      text: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      hoverBorder: "hover:border-pink-500/30",
      hoverShadow: "hover:shadow-[0_10px_40px_rgba(236,72,153,0.1)]",
      hoverBg: "hover:bg-pink-500/15",
      gradient: "from-pink-500/20 to-pink-500/0",
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-[150px] -z-10" />

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-number">03 / Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project, idx) => {
              const colors = accentColors[project.accent];
              return (
                <div
                  key={idx}
                  className={`glass-panel p-7 rounded-2xl ${colors.hoverBorder} ${colors.hoverShadow} transition-all duration-300 group flex flex-col relative overflow-hidden`}
                >
                  {/* Top accent gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${colors.gradient}`} />

                  {/* Project number */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-mono text-gray-600 block mb-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="text-sm leading-relaxed flex-grow mb-5">
                    <ul className="list-none space-y-1.5 text-gray-400">
                      {project.desc.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={`${colors.text} mt-0.5 text-xs`}>▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {project.tech.map((tech, key) => (
                      <span
                        key={key}
                        className={`${colors.bg} ${colors.text} border ${colors.border} py-1 px-2.5 rounded-md text-[11px] ${colors.hoverBg} transition-colors`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank" rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 text-gray-500 hover:${colors.text} transition-colors text-xs font-medium`}
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank" rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 text-gray-500 hover:${colors.text} transition-colors text-xs font-medium`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => setAiProject(project)}
                      className="flex items-center gap-1.5 text-xs font-medium text-purple-400/70 hover:text-purple-300 transition-colors group/ai"
                    >
                      <Sparkles className="w-3.5 h-3.5 group-hover/ai:animate-pulse" />
                      Ask AI
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      {/* AI Project Modal */}
      <AiProjectModal
        project={aiProject}
        isOpen={!!aiProject}
        onClose={() => setAiProject(null)}
      />
    </section>
  );
};
