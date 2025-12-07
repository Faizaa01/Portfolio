import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      <div className="container mx-auto max-w-2xl relative z-10">

        {/* Header */}
        <div className="mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] transition-all duration-500 hover:scale-105">
            Get In Touch
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed transition-all duration-300 hover:text-gray-300 hover:translate-x-1">
            Whether it's a project, collaboration, or just a question, I'm open to connecting.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6">

          {/* Email */}
          <div className="group flex items-center gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black backdrop-blur-sm border border-purple-800/30 transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-600/30 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:bg-purple-500/40 transition-all duration-500"></div>
              <Mail
                className="relative text-purple-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                size={28}
              />
            </div>
            <a
              href="mailto:faizaniha0062@gmail.com"
              className="text-gray-300 text-lg transition-all duration-300 group-hover:text-purple-300 hover:translate-x-1"
            >
              faizaniha0062@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group flex items-center gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black backdrop-blur-sm border border-blue-800/30 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.35s_forwards]">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md group-hover:bg-blue-500/40 transition-all duration-500"></div>
              <Linkedin
                className="relative text-blue-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                size={28}
              />
            </div>
            <a
              href="https://bd.linkedin.com/in/faiza-noushin-priya-91aa17383"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-lg transition-all duration-300 group-hover:text-blue-300 hover:translate-x-1 break-all"
            >
              bd.linkedin.com/in/faiza-noushin-priya-91aa17383
            </a>
          </div>

          {/* Github */}
          <div className="group flex items-center gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black backdrop-blur-sm border border-gray-700/30 transition-all duration-500 hover:border-gray-400/60 hover:shadow-2xl hover:shadow-gray-500/30 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-400/20 rounded-lg blur-md group-hover:bg-gray-400/40 transition-all duration-500"></div>
              <Github
                className="relative text-gray-300 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(229,231,235,0.8)]"
                size={28}
              />
            </div>
            <a
              href="https://github.com/Faizaa01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-lg transition-all duration-300 group-hover:text-white hover:translate-x-1"
            >
              github.com/Faizaa01
            </a>
          </div>

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

export default Contact;