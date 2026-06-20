import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Brain, Cloud, GraduationCap, Trophy, Target, Star, Award, Medal, BookOpen } from "lucide-react";

export const About = () => {
  const techStack = {
    Languages: ["C++", "C", "JavaScript", "TypeScript", "Python", "Go", "Java", "SQL"],
    Frontend: ["React", "Next.js", "Redux", "TailwindCSS", "Bootstrap", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express.js", "Flask", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma", "Supabase"],
    "AI / ML": ["LangChain", "PyTorch", "Pinecone", "Scikit-Learn", "NumPy", "Pandas"],
    DevOps: ["AWS", "GCP", "Docker", "Vercel", "Linux", "Git", "Postman", "Cloudinary"],
  };

  const cpProfiles = [
    { name: "LeetCode", stat: "500+ Problems", url: "https://leetcode.com/u/addyRT2817p/", color: "text-yellow-400", accent: "bg-yellow-500/10 border-yellow-500/20" },
    { name: "Codeforces", stat: "Max 1410", url: "https://codeforces.com/profile/aditya12bone", color: "text-blue-400", accent: "bg-blue-500/10 border-blue-500/20" },
    { name: "CodeChef", stat: "3★ (1717)", url: "https://www.codechef.com/users/main_atom_88/", color: "text-amber-600", accent: "bg-amber-500/10 border-amber-500/20" },
    { name: "GeeksForGeeks", stat: "200+ Problems", url: "https://www.geeksforgeeks.org/profile/aditya1ffgc", color: "text-green-500", accent: "bg-green-500/10 border-green-500/20" },
    { name: "Google Skills", stat: "Cloud Badges", url: "https://www.skills.google/public_profiles/c56c4a79-dd72-406c-8810-c0ea84697193", color: "text-blue-400", accent: "bg-blue-500/10 border-blue-500/20" }
  ];

  const achievements = [
    { value: "2.8%", label: "Top Percentile", desc: "IIT JEE Mains (10L+ students)", icon: <Trophy className="w-5 h-5 text-yellow-400" /> },
    { value: "AIR 224", label: "National Rank", desc: "TCS CodeVita (1L+ participants)", icon: <Medal className="w-5 h-5 text-indigo-400" /> },
    { value: "Top 5%", label: "Batch Rank", desc: "Offered Teaching Assistant Role", icon: <Star className="w-5 h-5 text-purple-400" /> },
    { value: "11", label: "Cloud Badges", desc: "Google Cloud Skill Boost", icon: <Cloud className="w-5 h-5 text-cyan-400" /> },
    { value: "Top 25", label: "Camp Rank", desc: "Graph Theory (AlgoUniversity)", icon: <Award className="w-5 h-5 text-rose-400" /> }
  ];

  const coursework = [
    "Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", 
    "Computer Networks", "Operating Systems", "Artificial Intelligence", "Software Engineering"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const getIconForCategory = (category) => {
    const icons = {
      Languages: <Code2 className="w-4 h-4 text-indigo-400" />,
      Frontend: <Layout className="w-4 h-4 text-purple-400" />,
      Backend: <Database className="w-4 h-4 text-cyan-400" />,
      "AI / ML": <Brain className="w-4 h-4 text-rose-400" />,
      DevOps: <Cloud className="w-4 h-4 text-blue-400" />,
    };
    return icons[category] || <Code2 className="w-4 h-4" />;
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-[150px] -z-10" />

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-number">01 / About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent pb-2">
              About Me
            </h2>
          </div>

          {/* Bio Card */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 mb-14 relative overflow-hidden group hover:border-indigo-500/15 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center font-light relative z-10">
              I am a 4th Year B.Tech IT student at IIIT Bhopal and a passionate developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs while exploring System Design and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            
            {/* Tech Stack */}
            <div className="lg:col-span-2 glass-panel p-7 rounded-2xl hover:border-indigo-500/15 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-7 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))" }}>
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Object.entries(techStack).map(([category, skills], idx) => (
                  <div key={idx} className="rounded-xl p-4 bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      {getIconForCategory(category)}
                      <h4 className="text-sm font-semibold text-gray-300">{category}</h4>
                    </div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-1.5">
                      {skills.map((tech, key) => (
                        <motion.span variants={itemVariants} key={key} className="bg-white/[0.03] text-gray-400 border border-white/5 py-1 px-2.5 rounded-md text-xs hover:border-indigo-500/30 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all cursor-default">
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Programming */}
            <div className="glass-panel p-7 rounded-2xl hover:border-purple-500/15 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(34,211,238,0.2))" }}>
                  <Target className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Coding Profiles</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-5 flex-grow">
                {cpProfiles.map((profile, idx) => (
                  <a key={idx} href={profile.url} target="_blank" rel="noopener noreferrer" className={`${profile.accent} border rounded-xl p-3 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 group relative overflow-hidden animate-[pulse_3s_ease-in-out_infinite] hover:animate-none ${idx === cpProfiles.length - 1 && cpProfiles.length % 2 !== 0 ? 'col-span-2' : ''}`}>
                    <div className="absolute inset-0 bg-white/5 blur-md group-hover:bg-white/10 transition-colors" />
                    <span className="relative z-10 font-semibold text-gray-300 group-hover:text-white transition-colors text-center text-xs mb-0.5">{profile.name}</span>
                    <span className={`relative z-10 text-xs ${profile.color} font-bold text-center drop-shadow-md`}>{profile.stat}</span>
                  </a>
                ))}
              </div>
              
              <div className="overflow-hidden rounded-xl bg-white/[0.02] border border-white/5 p-1.5">
                 <img src="https://leetcard.jacoblin.cool/addyRT2817p?theme=dark&font=Baloo&ext=heatmap" alt="LeetCode Stats" className="w-full opacity-80 hover:opacity-100 transition-opacity rounded-lg" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Achievements */}
            <div className="glass-panel p-7 rounded-2xl hover:border-yellow-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(234,179,8,0.2), rgba(245,158,11,0.2))" }}>
                  <Trophy className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">Key Achievements</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((item, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-indigo-500/20 hover:bg-indigo-500/[0.02] transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold text-white">{item.value}</span>
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-indigo-400 block">{item.label}</span>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-panel p-7 rounded-2xl hover:border-blue-500/10 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2))" }}>
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl mb-5">
                <h4 className="text-lg font-bold text-white mb-1">B.Tech in Information Technology</h4>
                <p className="text-sm font-semibold mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  IIIT Bhopal <span className="text-gray-500 font-normal text-xs ml-2">(2022 – 2026)</span>
                </p>
                <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-lg font-semibold text-sm">
                  CGPA: 7.80
                </div>
              </div>

              <div className="flex-grow">
                <h4 className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {coursework.map((course, idx) => (
                    <span key={idx} className="bg-white/[0.02] border border-white/5 text-gray-500 py-1 px-2.5 rounded-md text-xs hover:border-purple-500/30 hover:text-purple-300 transition-all cursor-default">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
