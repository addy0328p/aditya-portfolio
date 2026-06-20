import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink, Code2, Sparkles } from "lucide-react";
import { AiProjectModal } from "../AiProjectModal";

export const Projects = () => {
  const [aiProject, setAiProject] = useState(null);

  const projects = [
    {
      title: "Prime Bid | Auction Platform",
      desc: [
        <>Developed a real-time auction platform handling <strong>100+ concurrent users</strong> and <strong>50+ bids/sec</strong>.</>,
        <>Streamlined admin dashboard to manage 1K+ users and 500+ listings, reducing manual effort by <strong>80%</strong>.</>,
        <>Automated auction management for 200+ monthly listings, achieving <strong>99.9% uptime</strong>.</>,
        <>Secured authentication with JWT + Bcrypt, preventing unauthorized access by <strong>95%</strong>.</>,
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary", "Nodemailer", "Node-Cron"],
      link: "https://github.com/addy0328p/mern_auction_platform_backend",
      live: "https://ephemeral-pegasus-ac7e2d.netlify.app/",
      accent: "indigo",
    },
    {
      title: "Vehiql | AI Vehicle Marketplace",
      desc: [
        <>Built an <strong>AI-driven vehicle marketplace</strong> capable of managing 1K+ listings using Supabase.</>,
        <>Integrated <strong>Google Gemini API</strong> for intelligent image recognition, improving search accuracy by <strong>70%</strong>.</>,
        <>Configured a drag-and-drop interface, increasing user discovery speed by <strong>50%</strong>.</>,
        <>Implemented secure authentication using <strong>ArcJet + Clerk</strong>, enhancing protection by <strong>90%</strong>.</>,
      ],
      tech: ["Next.js 15", "Prisma ORM", "Supabase", "Shadcn UI", "ArcJet", "Clerk", "Google Gemini API"],
      link: "https://github.com/addy0328p/Vehiql",
      live: "https://vehiql-b3uh.vercel.app/",
      accent: "purple",
    },
    {
      title: "ZeeCare | Hospital Management",
      desc: [
        <>Engineered a hospital management system with <strong>role-based access</strong> for 3+ user types.</>,
        <>Strengthened platform security with JWT + Bcrypt hashing, reducing unauthorized access by <strong>90%</strong>.</>,
        <>Built an appointment system handling <strong>100+ bookings/day</strong>, improving scheduling speed by <strong>40%</strong>.</>,
        <>Deployed secure file uploads via Fileupload + Cloudinary, cutting document access time by <strong>35%</strong>.</>,
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Axios", "Node.js", "Mongoose", "JWT", "Bcrypt", "Fileupload"],
      link: "https://github.com/addy0328p/Hospital-Management-MERN-Project",
      live: "https://hospital-management-system-addyhackf.netlify.app/appointment",
      accent: "emerald",
    },
    {
      title: "Image Generation using GAN",
      desc: [
        <>Developed an AI-driven image generation system using GANs trained on the CIFAR-10 dataset (50K+ images).</>,
        <>Designed and optimized separate Generator and Discriminator networks.</>,
        <>Implemented latent space manipulation to generate diverse image variations.</>,
        <>Integrated TensorFlow and Keras pipelines, automating visualization with NumPy and Matplotlib.</>,
      ],
      tech: ["Python", "Keras", "GANs", "CIFAR-10", "NumPy", "Matplotlib"],
      link: "https://github.com/addy0328p/Gen_AI_Project",
      accent: "rose",
    },
    {
      title: "Smart Context AI — LLM + Vector DB",
      desc: [
        <>Built a semantic document Q&A system using Vector embeddings for high accuracy.</>,
        <>Integrated LLMs for intelligent context retrieval.</>,
      ],
      tech: ["LangChain", "Pinecone", "Flask", "AWS"],
      link: "https://github.com/addy0328p/Project_LLMs_LangChain_Pinecone_Flask_AWS",
      accent: "cyan",
    },
    {
      title: "AI-Powered Resume Analyzer",
      desc: [
        <>Developed an AI-powered Resume Analysis System for automated resume extraction and structured data storage.</>,
      ],
      tech: ["Express.js", "MongoDB", "Gemini API"],
      link: "https://github.com/addy0328p/resume-analysis-app",
      accent: "amber",
    },
    {
      title: "Email Campaign Tool",
      desc: [
        <>Developed a backend service for bulk email campaigns utilizing efficient concurrency models in Golang.</>,
      ],
      tech: ["Go (Golang)"],
      link: "https://github.com/addy0328p/Email-Campaign-Tool-Golang",
      accent: "blue",
    },
    {
      title: "Crop Prediction — ML Model",
      desc: [
        <>Created a machine learning-based smart crop recommendation system using classification algorithms.</>,
      ],
      tech: ["Python", "scikit-learn"],
      link: "https://github.com/addy0328p/Crop_Prediction_using_ML",
      accent: "pink",
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
