import { Code2, Database, Layout, Server } from "lucide-react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiRender,
  SiCplusplus,
  SiC,
  SiCodechef,
} from "react-icons/si";

const skillIconMap = {
  "React.js": FaReact,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: FaBootstrap,

  Django: SiDjango,
  "Django REST Framework": SiDjango,
  Python: FaPython,
  "REST APIs": FaDatabase,

  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  SQL: FaDatabase,

  Git: FaGitAlt,
  GitHub: FaGithub,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Render: SiRender,

  C: SiC,
  "C++": SiCplusplus,
  "DSA": FaCogs,
  "Problem-solving": SiCodechef,
};

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Layout,
      items: ["React.js", "JavaScript", "HTML", "Tailwind CSS", "CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Python", "Django", "Django REST Framework", "REST APIs"],
    },
    {
      category: "Databases",
      icon: Database,
      items: ["PostgreSQL", "MySQL", "Supabase", "SQL"],
    },
    {
      category: "Tools & Deployment",
      icon: Code2,
      items: ["Git", "GitHub", "Vercel", "Netlify", "Render"],
    },
    {
      category: "Other Skills",
      icon: Code2,
      items: ["C", "C++", "DSA", "Problem-solving"],
    },
  ];

  const colors = [
    "border-purple-700/40 hover:bg-purple-600/30 hover:border-purple-500/70 hover:shadow-purple-500/50",
    "border-blue-700/40 hover:bg-blue-600/30 hover:border-blue-500/70 hover:shadow-blue-500/50",
    "border-indigo-700/40 hover:bg-indigo-600/30 hover:border-indigo-500/70 hover:shadow-indigo-500/50",
    "border-violet-700/40 hover:bg-violet-600/30 hover:border-violet-500/70 hover:shadow-violet-500/50",
    "border-cyan-700/40 hover:bg-cyan-600/30 hover:border-cyan-500/70 hover:shadow-cyan-500/50",
    "border-sky-700/40 hover:bg-sky-600/30 hover:border-sky-500/70 hover:shadow-sky-500/50",
  ];

  const marqueeSkills = [
  "C",
  "C++",
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Django",
  "Python",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "Render",
];

  return (
    <section
      id="skills"
      className="py-24 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] transition-all duration-500 hover:scale-105">
            Skills & Technologies
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl transition-all duration-300 hover:text-slate-300 hover:translate-x-1">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        

        <div className="relative overflow-hidden py-6 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => {
              const Icon = skillIconMap[skill];
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center w-16 h-16 rounded-full 
                    bg-gray-900/70 backdrop-blur-sm border
                    transition-all duration-300
                    ${colors[i % colors.length]}
                  `}
                >
                  {Icon && <Icon className="text-3xl text-white" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => {
            const CategoryIcon = group.icon;
            return (
              <div
                key={group.category}
                className="group relative bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black rounded-2xl p-7 border border-purple-900/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:bg-blue-500/30 transition-all duration-500"></div>
                      <CategoryIcon
                        className="relative text-purple-400 transition-all duration-500 group-hover:text-blue-400 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                        size={28}
                      />
                    </div>
                    <h4 className="text-xl text-white font-semibold transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text">
                      {group.category}
                    </h4>
                  </div>

                  {/* Skill Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, i) => {
                      const SkillIcon = skillIconMap[skill];
                      return (
                        <span
                          key={skill}
                          className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded border text-gray-300 bg-gray-900/40 backdrop-blur-sm transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg cursor-default ${
                            colors[i % colors.length]
                          }`}
                        >
                          {SkillIcon && (
                            <SkillIcon className="text-base opacity-80 group-hover:opacity-100" />
                          )}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

      `}</style>
    </section>
  );
};

export default Skills;
