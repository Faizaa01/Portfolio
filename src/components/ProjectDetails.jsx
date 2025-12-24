import { ExternalLink, Github } from "lucide-react";
import projects from './ProjectData';
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div className="text-white text-center mt-20">Project not found</div>;

  return (
    <section className="py-24 px-6 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient transition-all duration-500 hover:scale-105">
            {project.title}
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{project.description}</p>
        </div>

        {/* Image Gallery */}
        <div className="flex overflow-x-auto gap-6 mb-8 py-2">
          {project.images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-80 md:w-max rounded-2xl shadow-xl overflow-hidden">
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-64 object-cover transition-all duration-700 hover:scale-105 hover:brightness-110"
              />
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-lg rounded border border-gray-700/50 bg-gray-900/50 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:bg-blue-800/50 hover:text-white hover:scale-105"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Full Description */}
        {project.fullDes && (
          <div className="mb-8">
            <h4 className="text-3xl font-semibold text-white mb-4">Project Details</h4>
            <div className="text-gray-300 font-mono text-xl space-y-2">
              {project.fullDes.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          {project.frontend_github && (
            <a
              href={project.frontend_github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-purple-700/40 rounded-lg hover:bg-purple-700/30 hover:text-white transition-all duration-300"
            >
              <Github size={16} /> Frontend
            </a>
          )}
          {project.backend_github && (
            <a
              href={project.backend_github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-purple-700/40 rounded-lg hover:bg-purple-700/30 hover:text-white transition-all duration-300"
            >
              <Github size={16} /> Backend
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-700/30 hover:text-white transition-all duration-300"
            >
              <Github size={16} /> Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-blue-900/50 hover:text-white transition-all duration-300"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default ProjectDetails;
