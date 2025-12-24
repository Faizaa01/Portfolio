import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-gray-400 py-12 border-t border-purple-900/30">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Main content */}
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links with Icons */}
          <div className="flex space-x-6">
            {[
              { name: "GitHub", url: "#", icon: Github },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/faiza-noushin-priya", icon: Linkedin },
              { name: "Email", url: "mailto:faizaniha0062@email.com", icon: Mail }
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="group relative p-3 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 transition-all duration-500 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1"
                  aria-label={link.name}
                >
                  <Icon className="text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" size={20} />

                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <p className="text-sm transition-all duration-300 hover:text-purple-300 flex items-center gap-2">
            © {new Date().getFullYear()} Faiza Noushin Priya. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm" />
    </footer>
  );
};

export default Footer;