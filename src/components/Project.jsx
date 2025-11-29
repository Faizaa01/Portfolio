import { ExternalLink, Github } from "lucide-react";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const Project = () => {
  const projects = [
    {
      title: "Grocera – Online Grocery Store",
      description: "Multi-role e-commerce system with cart, wishlist, checkout, and payment flow.",
      tech: ["React", "DRF", "Tailwind", "Supabase", "JWT", "SSLCommerz"],
      image: img1,
      backend_github: "https://github.com/Faizaa01/Grocera",
      frontend_github: "https://github.com/Faizaa01/Grocera-client",
      live: "https://grocera-client-35zx.vercel.app"
    },
    {
      title: "Book-Heaven – Library System",
      description: "Borrow-return system with authentication, book management, and history tracking.",
      tech: ["React", "DRF", "Tailwind", "Supabase", "JWT"],
      image: img2,
      backend_github: "https://github.com/Faizaa01/BookHeaven",
      frontend_github: "https://github.com/Faizaa01/BookHeaven-Client",
      live: "https://book-heaven-client-xi.vercel.app"
    },
    {
      title: "Event-Master  – Event Management",
      description: "Event reservation platform with role-based access and structured workflows.",
      tech: ["Django", "Tailwind", "PostgreSQL"],
      image: img3,
      github: "https://github.com/Faizaa01/Event_management",
      live: "https://event-management-pmms.onrender.com"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Premium gradient background with animated glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      
      {/* Animated ambient light orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] transition-all duration-500 hover:scale-105">
            Featured Projects
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl transition-all duration-300 hover:text-slate-300 hover:translate-x-1">
            A selection of my most recent work showcasing full-stack development with modern technologies
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black rounded border border-gray-700/50 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/60 backdrop-blur-sm opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
              style={{animationDelay: `${0.2 + idx * 0.15}s`}}
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {p.title}
                </h4>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, i) => {
                    const shades = [
                      'bg-blue-900/40 text-blue-300 border-blue-700/40 group-hover:bg-blue-800/50 group-hover:border-blue-600/50',
                      'bg-purple-900/40 text-purple-300 border-purple-700/40 group-hover:bg-purple-800/50 group-hover:border-purple-600/50',
                      'bg-indigo-900/40 text-indigo-300 border-indigo-700/40 group-hover:bg-indigo-800/50 group-hover:border-indigo-600/50',
                      'bg-violet-900/40 text-violet-300 border-violet-700/40 group-hover:bg-violet-800/50 group-hover:border-violet-600/50',
                      'bg-cyan-900/40 text-cyan-300 border-cyan-700/40 group-hover:bg-cyan-800/50 group-hover:border-cyan-600/50',
                      'bg-sky-900/40 text-sky-300 border-sky-700/40 group-hover:bg-sky-800/50 group-hover:border-sky-600/50'
                    ];
                    return (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1.5 rounded border transition-all duration-300 ${shades[i % shades.length]}`}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-gray-800/50 group-hover:border-purple-800/50 transition-all duration-300">
                  <div className="flex gap-4 mb-3">
                    {p.frontend_github && (
                      <a
                        href={p.frontend_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 text-sm hover:scale-110 hover:translate-x-1"
                      >
                        <Github size={16} className="flex-shrink-0" /> 
                        <span>Frontend</span>
                      </a>
                    )}
                    {p.backend_github && (
                      <a
                        href={p.backend_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 text-sm hover:scale-110 hover:translate-x-1"
                      >
                        <Github size={16} className="flex-shrink-0" /> 
                        <span>Backend</span>
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 text-sm hover:scale-110 hover:translate-x-1"
                      >
                        <Github size={16} className="flex-shrink-0" /> 
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-800/60 hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-purple-900/50 text-gray-300 hover:text-white border border-gray-700/50 hover:border-purple-600/50 py-2.5 rounded transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]"
                  >
                    <ExternalLink size={16} /> View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
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

export default Project;