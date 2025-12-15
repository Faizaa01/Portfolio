import { BookOpen, Award } from "lucide-react";
import a1 from '../assets/4.png';
import a2 from '../assets/5.png';

const Education = () => {
  const education = {
    degree: "B.Sc. in Computer Science",
    institution: "City University",
    year: "2023 - 2027",
    description: "Focus on software development and machine learning.",
  };

  const courseCertificates = [
    {
      title: "CSE fundamentals with Phitron: Fall 2023",
      file: "../../public/certificate.pdf",
      image: a1,
    },
    {
      title: "Certificate of Achievement - CodeChef with 2 Stars Coder Rank",
      file: "../../public/code.pdf",
      image: a2,
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 min-h-screen flex flex-col items-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Education Headline */}
        <div className="mb-12 text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] transition-all duration-500 hover:scale-105">
            Education
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic qualifications
          </p>
        </div>

        {/* Education Card */}
        <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black rounded-2xl p-10 border border-purple-900/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] mb-16">
          <div className="flex items-center gap-4 mb-5">
            <BookOpen size={28} className="text-purple-400 transition-all duration-500" />
            <h4 className="text-2xl text-white font-bold">{education.degree}</h4>
          </div>

          <p className="text-slate-400 mb-2 font-semibold">
            {education.institution} | {education.year}
          </p>
          <p className="text-gray-400">{education.description}</p>
        </div>

        {/* Course Certificates Section */}
        <div className="text-center mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
        <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] transition-all duration-500 hover:scale-105">
            Course Certificates
        </h3>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            Professional and online course achievements
        </p>

        <div className="flex flex-col gap-6">
            {courseCertificates.map((cert, i) => (
            <div
                key={i}
                className="flex items-center gap-6 px-4 py-4 rounded-lg bg-gray-800/50 border border-purple-700/40 hover:bg-blue-700/30 hover:shadow-lg hover:border-blue-500/60 transition-all duration-300 text-gray-200"
            >
                {cert.image && (
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
                />
                )}
                <div className="flex-1">
                <h4 className="text-lg md:text-xl font-semibold text-white">
                    {cert.title}
                </h4>
                {/* Optional: short description or date */}
                {/* <p className="text-gray-300 text-sm mt-1">Completed: Fall 2023</p> */}
                </div>
            </div>
            ))}
        </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient {
          0%,100% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default Education;
