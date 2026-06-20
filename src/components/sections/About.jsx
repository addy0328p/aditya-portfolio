// import { RevealOnScroll } from "../RevealOnScroll";

import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML", "CSS", 
    "React","Next.Js",
    "JavaScript",
    "TailwindCSS",
    ,
  ];

  const backendSkills = ["Node.js", "ORM", "Redis", "Expressjs", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Information Technology </strong> - Indian Institute of Information Technology,Bhopal
                  (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, OOPS, DBMS...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏆 Achievements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🔥 Solved <strong>500+</strong> problems on LeetCode and GFG, aiming for <strong>1000+</strong>, ranked in the top <strong>10%</strong> in LeetCode Contest 398.</li>
              <li>☁️ Completed the Google Cloud Skill Boost program, earning <strong>11 badges</strong>, and ranked in the top <strong>1000</strong> in the Arcade Game program by GDSC IIIT Bhopal.</li>
              <li>📈 Selected out of <strong>80,000+</strong> students from India for the Graphs Camp in December 2024.</li>
              <li>🎯 Ranked in the top <strong>2.8%</strong> among <strong>10 lakhs+</strong> students in IIT JEE Mains.</li>
              <li>📚 Received an offer for a Teaching Assistant role in the 4th semester for ranking among the top <strong>0.5%</strong> in my batch.</li>
            </ul>
          </div>
            </div>
          </div>
          </RevealOnScroll>
    </section>
  );
};