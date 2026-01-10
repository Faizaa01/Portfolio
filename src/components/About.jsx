import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/p.jpeg';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';
import { useState, useEffect } from 'react';
import RotatingText from './RotatingText';

const About = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${cursor.x * 0.01}px, ${cursor.y * 0.01}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '2s',
            transform: `translate(${cursor.x * -0.01}px, ${cursor.y * -0.01}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"
          style={{ transform: `translate(${cursor.x * 0.005}px, ${cursor.y * 0.005}px)` }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <h2 className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient transition-all duration-700 hover:scale-105 hover:translate-x-1 hover:translate-y-1">
              I am Faiza Noushin Priya
            </h2>
            <p className="text-2xl md:text-3xl font-mono tracking-wide">
              <RotatingText texts={[
                'Full Stack Developer',
                'Software Engineer',
                'Python & Django Enthusiast',
                'React & JavaScript Specialist',
                'Competitive Programmer & Problem-Solving Ninja',
                'Algorithm & DSA Lover',
              ]} />
            </p>

            <p className="text-gray-300 leading-relaxed transition-all duration-500 hover:text-white hover:translate-x-1 hover:scale-101">
              Full-stack developer skilled in React, Django, and REST APIs.
              Experienced in building scalable, database-driven applications using
              PostgreSQL/MySQL, creating clean backend architectures, and improving
              frontend performance. Strong foundation in Python, JavaScript, C/C++,
              and problem-solving.
            </p>

            {/* Competitive Coding Buttons */}
            <div className="flex flex-wrap gap-3 mt-3">
              {[{
                icon: SiCodechef,
                url: "https://www.codechef.com/users/faizaniha_00",
                label: "CodeChef",
                color: "blue"
              },{
                icon: SiCodeforces,
                url: "https://codeforces.com/profile/Faiza_niha",
                label: "Codeforces",
                color: "purple"
              },{
                icon: SiLeetcode,
                url: "https://leetcode.com/u/pp181nfJE2",
                label: "LeetCode",
                color: "orange"
              }].map((btn, idx) => {
                const Icon = btn.icon;
                return (
                  <a
                    key={idx}
                    href={btn.url} target="_blank" rel="noopener noreferrer"
                    className={`px-4 py-2 bg-gray-800/50 text-white border border-gray-700/50 rounded-md font-medium text-sm transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-${btn.color}-500/50 hover:border-${btn.color}-500/50 hover:bg-${btn.color}-900/30`}
                  >
                    <Icon className="inline mr-2" /> {btn.label}
                  </a>
                )
              })}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-8 pt-4">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 hover:from-blue-800/60 hover:to-purple-800/60 text-white border border-gray-700/50 hover:border-purple-500/70 rounded-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-1">
                View Resume
              </a>

              <div className="flex gap-5 items-center">
                {[{
                  icon: Github,
                  url: "https://github.com/Faizaa01",
                  color: "purple"
                },{
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/faiza-noushin-priya",
                  color: "blue"
                },{
                  icon: Mail,
                  url: "mailto:xxahin08@gmail.com",
                  color: "pink"
                }].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.url}
                      className={`text-gray-400 transition-all duration-500 hover:text-${s.color}-400 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={28} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_0.3s_forwards]">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-70"></div>
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-900/50 transition-all duration-700"
                style={{
                  transform: `rotateX(${(cursor.y/window.innerHeight-0.5)*15}deg) rotateY(${(cursor.x/window.innerWidth-0.5)*15}deg)`
                }}
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 scale-110 group-hover:scale-125 transition-all duration-700 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-[1.15] group-hover:scale-[1.35] transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from {opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }
        @keyframes gradient { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
        .animate-gradient { animation: gradient 3s ease infinite; background-size:200% auto; }
      `}</style>
    </section>
  );
};

export default About;
