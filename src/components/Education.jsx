import { BookA, BookAlert, BookOpen, Building, Calendar, MapPin, University} from "lucide-react";
import a1 from '../assets/4.png';
import a2 from '../assets/5.png';
import img from '../assets/uni.jpg';

const Education = () => {
  const education = {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "City University",
    year: "2023 - 2027",
    location: "Savar, Dhaka, Bangladesh",
    description:
      "Pursuing a Bachelor's degree in Computer Science & Engineering with a strong focus on software development, problem solving, and core computer science concepts.",
    topics: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Software Engineering Principles",
      "Operating Systems (foundations)",
      "Web & Backend Development",
    ],
  };

  const certificates = [
    {
      title: "CSE Fundamentals with Phitron (Spring 2024)",
      institution: "Phitron",
      year: "2024 - 2025",
      location: "Online Platform",
      image: a1,
      bullets: [
        "Programming Languages: C, C++, Python",
        "Data Structures & Algorithms, Problem Solving",
        "Software Development concepts & Backend fundamentals",
        "Frontend: HTML, CSS, Bootstrap, Tailwind, React",
        "Backend: Django, Django REST Framework",
        "Database: PostgreSQL, MySQL",
      ],
    },
    {
      title: "CodeChef – 2★ Coder",
      institution: "Phitron",
      year: "2025",
      location: "Online Platform",
      image: a2,
      bullets: [
        "Achieved 2-star rating, demonstrating solid",
        "competitive programming ability using C++ and Python",
        "Enhanced algorithmic thinking and problem-solving skills",
        "Solved diverse coding challenges on CodeChef platform",
      ],
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

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Education
          </h3>
          <p className="text-slate-400 text-lg">
            Academic background & certifications
          </p>
        </div>

        {/* Education Card */}
        <div className="relative w-full bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-black rounded-2xl p-8 border border-purple-900/30 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 mb-16 flex flex-col md:flex-row gap-10">
         <img
            src={img}
            alt="University"
            className="w-36 h-36 md:w-100 md:h-76 object-cover rounded-xl flex-shrink-0"
          />
          
          <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen size={24} className="text-purple-400" />
                <h4 className="text-2xl text-white font-bold">{education.degree}</h4>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <University size={16} />
                <span>{education.institution}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <Calendar size={16} />
                <span>{education.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                <MapPin size={16} />
                <span>{education.location}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{education.description}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400 text-sm">
                {education.topics.map((topic, i) => (
                  <li key={i}>• {topic}</li>
                ))}
              </ul>
            </div>
          </div>

        {/* Certificates */}
        <div className="text-center mb-8">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Course Certificates
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Practical learning and skill validation
          </p>

          <div className="flex flex-col gap-6">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-6 px-6 py-6 rounded-lg bg-gray-800/50 border border-purple-700/40 hover:bg-blue-700/30 hover:shadow-lg hover:border-blue-500/60 transition-all duration-300 text-gray-200"
              >
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-110 h-80 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex-1 text-left">
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                    {cert.title}
                  </h4>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <University size={16} />
                    <span>{cert.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar size={16} />
                    <span>{cert.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                    <MapPin size={16} />
                    <span>{cert.location}</span>
                  </div>

                  {/* <ul className="list-disc list-inside text-gray-300 text-sm mb-2">
                    {cert.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul> */}

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-100 text-sm">
                    {cert.bullets.map((bullet, i) => (
                      <li key={i}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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
