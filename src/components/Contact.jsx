import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
    .then((result) => console.log(result.text))
    .catch((error) => console.log(error.text));
}

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      {/* Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient transition-all duration-500 hover:scale-105">
            Get In Touch
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether it's a project, collaboration, or just a question, I'm open to connecting.
          </p>
        </div>

        {/* Flex: Left Contact Info + Right Form */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left: Contact Cards */}
          <div className="lg:w-1/2 flex flex-col gap-9">
            {/* Email */}
            <div className="group flex items-center gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black backdrop-blur-sm border border-purple-800/30 transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-600/30 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:bg-purple-500/40 transition-all duration-500"></div>
                <Mail className="relative text-purple-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" size={28} />
              </div>
              <a href="mailto:xxahin08@gmail.com" className="text-gray-300 text-lg transition-all duration-300 group-hover:text-purple-300 hover:translate-x-1 break-all">
                xxahin08@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group flex items-center gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black backdrop-blur-sm border border-blue-800/30 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-600/30 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.35s_forwards]">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md group-hover:bg-blue-500/40 transition-all duration-500"></div>
                <Linkedin className="relative text-blue-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" size={28} />
              </div>
              <a href="https://www.linkedin.com/in/faiza-noushin-priya" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-lg transition-all duration-300 group-hover:text-blue-300 hover:translate-x-1 break-all">
                linkedin.com/in/faiza-noushin-priya
              </a>
            </div>

            {/* GitHub */}
            <div className="group flex items-center gap-5 p-6 rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black backdrop-blur-sm border border-gray-700/30 transition-all duration-500 hover:border-gray-400/60 hover:shadow-2xl hover:shadow-gray-500/30 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-400/20 rounded-lg blur-md group-hover:bg-gray-400/40 transition-all duration-500"></div>
                <Github className="relative text-gray-300 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(229,231,235,0.8)]" size={28} />
              </div>
              <a href="https://github.com/Faizaa01" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-lg transition-all duration-300 group-hover:text-white hover:translate-x-1">
                github.com/Faizaa01
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-1/2 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <form onSubmit={sendEmail} className="flex flex-col gap-3 bg-gradient-to-b from-black via-gray-950 to-black p-5 lg:p-8 rounded-xl border border-purple-800/30 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-600/30">
              <h4 className="text-2xl text-white font-bold mb-2 text-center lg:text-left">Send a Message</h4>
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-800/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 transition-all duration-300"/>
              <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-800/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 transition-all duration-300"/>
              <textarea name="message" placeholder="Your Message" rows={3} className="px-4 py-3 rounded-lg bg-gray-900/50 border border-purple-800/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 transition-all duration-300 resize-none"></textarea>
              <button type="submit" className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%,100% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
        }
        .animate-gradient { animation: gradient 3s ease infinite; background-size:200% auto; }
      `}</style>
    </section>
  );
};

export default Contact;