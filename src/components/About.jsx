import { Github, Linkedin, Mail, Code } from 'lucide-react';
import profileImg from '../assets/p.jpeg';

const About = () => {

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side */}
          <div className="space-y-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 animate-gradient bg-[length:200%_auto]">
              I am Faiza Noushin Priya
            </h2>

            <p className="text-2xl text-gray-400 transition-all duration-300 hover:text-purple-300 hover:translate-x-2">
              Full Stack Software Engineer
            </p>

            <p className="text-gray-300 leading-relaxed transition-all duration-300 hover:text-white hover:translate-x-1">
              Full-stack developer skilled in React, Django, and REST APIs.
              Experienced in building scalable, database-driven applications using
              PostgreSQL/MySQL, creating clean backend architectures, and improving
              frontend performance. Strong foundation in Python, JavaScript, C/C++,
              and problem-solving.
            </p>

            {/* Competitive Coding Buttons */}
            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href=" https://www.codechef.com/users/faizaniha_00"
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800/50 text-white border border-gray-700/50 rounded-md font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 hover:border-blue-500/50 hover:bg-blue-900/30"
              >
                CodeChef
              </a>
              <a
                href="https://codeforces.com/profile/Faiza_niha"
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800/50 text-white border border-gray-700/50 rounded-md font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 hover:border-purple-500/50 hover:bg-purple-900/30"
              >
                Codeforces
              </a>
              <a
                href="https://leetcode.com/u/pp181nfJE2"
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800/50 text-white border border-gray-700/50 rounded-md font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 hover:border-orange-500/50 hover:bg-orange-900/30"
              >
                LeetCode
              </a>
            </div>

            {/* Buttons & Socials */}
            <div className="flex flex-wrap gap-8 pt-4">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 hover:from-blue-800/60 hover:to-purple-800/60 text-white border border-gray-700/50 hover:border-purple-500/70 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-1">
                View Resume
              </a>
              
              <div className="flex gap-5 items-center">
                <a
                  href="https://github.com/Faizaa01"
                  target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/faiza-noushin-priya"
                  target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:faizaniha0062@gmail.com"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
                >
                  <Mail size={28} />
                </a>
              </div>
              
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
            <div className="relative group">

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700 animate-pulse group-hover:blur-3xl"></div>

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-blue-500/70 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-purple-900/50 group-hover:shadow-blue-500/50">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 scale-110 group-hover:scale-125 group-hover:border-blue-500/30 transition-all duration-700 animate-pulse"></div>
              
              <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-[1.15] group-hover:scale-[1.35] group-hover:border-purple-500/20 transition-all duration-700"></div>

            </div>
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

export default About;