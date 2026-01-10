import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Contact = () => {
  const[name, setName] = useState('');
  const[email, setMail] = useState('');
  const[message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: `Message from: ${email}\n\n${message}`,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((result) => {
      console.log("Success!", result);
      setName('');
      setMail('');
      setMessage('');
      setButtonText('Sent');
      setIsSent(true);
      setTimeout(() => {
        setButtonText('Send');
        setIsSent(false);
      }, 2000);
    })
    .catch((error) => {
      console.log("Failed to send message.", error);
      setButtonText('Failed');
      setIsSent(true);
      setTimeout(() => {
        setButtonText('Send');
        setIsSent(false);
      }, 2000);
    });
  }

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-gradient-to-b from-gray-900/50 via-gray-800/50 to-black p-6 rounded-xl border border-purple-800/30 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-600/30">
              <h4 className="text-2xl text-white font-semibold mb-2 text-center">Send a Message</h4>
              <input 
              type="text"
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-900/50 border border-purple-800/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 transition-all duration-300"
              />
              
              <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setMail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-900/50 border border-purple-800/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 transition-all duration-300"
              />
              
              <textarea 
              placeholder="Your Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3} 
              className="px-4 py-2 rounded-lg bg-gray-900/50 border border-purple-800/30 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/60 transition-all duration-300 resize-none">
              </textarea>
              
              <button type="submit" 
              className={`mt-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-700/50
                ${isSent 
                  ? 'bg-gray-600/50 border-gray-600/70 shadow-lg hover:-translate-y-1'
                  : 'bg-gradient-to-r from-blue-900/60 to-purple-900/60 hover:from-blue-800/70 hover:to-purple-800/70 hover:scale-102 hover:shadow-lg hover:shadow-violet-500/40 hover:-translate-y-1'
                }`}
              >
                {buttonText}
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