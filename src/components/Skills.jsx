import { Code2, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Layout,
      items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Django", "Django REST Framework", "Python", "REST APIs"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["PostgreSQL", "MySQL", "Supabase", "SQL"]
    },
    {
      category: "Tools & Deployment",
      icon: Code2,
      items: ["Git", "GitHub", "Vercel", "Netlify", "Render"]
    },
    {
      category: "Other Skills",
      icon: Code2,
      items: ["Problem-solving"]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Premium gradient background with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      {/* Animated ambient light orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Noise texture overlay for premium feel */}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black rounded-2xl p-7 border border-purple-900/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{animationDelay: `${0.2 + index * 0.15}s`}}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:bg-blue-500/30 transition-all duration-500"></div>
                      <Icon
                        className="relative text-purple-400 transition-all duration-500 group-hover:text-blue-400 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                        size={28}
                      />
                    </div>
                    <h4 className="text-xl font-semibold transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text">
                      {group.category}
                    </h4>
                  </div>

                  {/* SKILL PILL BUTTONS */}
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, i) => {
                      const colors = [
                        'border-purple-700/40 hover:bg-purple-600/30 hover:border-purple-500/70 hover:shadow-purple-500/50',
                        'border-blue-700/40 hover:bg-blue-600/30 hover:border-blue-500/70 hover:shadow-blue-500/50',
                        'border-indigo-700/40 hover:bg-indigo-600/30 hover:border-indigo-500/70 hover:shadow-indigo-500/50',
                        'border-violet-700/40 hover:bg-violet-600/30 hover:border-violet-500/70 hover:shadow-violet-500/50',
                        'border-cyan-700/40 hover:bg-cyan-600/30 hover:border-cyan-500/70 hover:shadow-cyan-500/50',
                        'border-sky-700/40 hover:bg-sky-600/30 hover:border-sky-500/70 hover:shadow-sky-500/50'
                      ];
                      return (
                        <span
                          key={i}
                          className={`px-3 py-1.5 text-sm rounded border text-gray-300 bg-gray-900/40 backdrop-blur-sm transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg cursor-default ${colors[i % colors.length]}`}
                        >
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
      `}</style>
    </section>
  );
};

export default Skills;