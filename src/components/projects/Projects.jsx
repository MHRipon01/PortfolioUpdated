import { useState, useEffect } from "react";
import { FaGithub, FaGlobe, FaBriefcase, FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import foodfirst from "/src/components/projects/foodfirst.png";
import skillsurge from "/src/components/projects/skillsurge.png";
import buyease from "/src/components/projects/buyease.png";
import dazzling from "/src/components/projects/dazzling days.png";
const projects = [
  {
    title: "BuyEase",
    desc: "Full-stack e-commerce platform featuring secure payment integration, comprehensive product management, and inventory tracking.",
    img:  `${buyease}`, 
    live_link: "https://buyease-620c4.web.app/",
    github_link: "https://github.com/MHRipon01/BuyEase-shopping-client",
  },
  {
    title: "SkillSurge",
    desc: "Online learning platform enabling students to enroll in courses, participate in live classes, and submit assignments with real-time feedback.",
    img: `${skillsurge}`,
    live_link: "https://skillsurge-8233a.web.app/",
    github_link: "https://github.com/MHRipon01/skillSurge-server",
  },
  {
    title: "FoodFirst",
    desc: "Community-driven food distribution platform connecting donors with individuals in need through a transparent and efficient request system.",
    img: `${foodfirst}`,
    live_link: "https://food-first-7508b.web.app/",
    github_link: "https://github.com/MHRipon01/foodFirst-client",
  },
  {
    title: "Dazzling Days",
    desc: "Event management platform providing comprehensive event planning services and vendor connections for weddings, corporate events, and celebrations.",
    img: `${dazzling}`,
    live_link: "https://dazzling-days-event.web.app/",
    github_link: "https://github.com/MHRipon01/dazzling-days",
  },
];

export default function Projects({ isDark }) {
  // 🔁 Rotating Icons + Gradient BG
  const headerIcons = [
    {
      icon: <FaBriefcase />,
      bg: "from-blue-500 to-purple-500",
    },
    {
      icon: <FaCode />,
      bg: "from-green-400 to-emerald-600",
    },
    {
      icon: <FaRocket />,
      bg: "from-pink-500 to-red-500",
    },
    {
      icon: <FaLaptopCode />,
      bg: "from-indigo-500 to-cyan-500",
    },
  ];

  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % headerIcons.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-20 px-6 ${
        isDark ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
              headerIcons[currentIcon].bg
            } flex items-center justify-center text-white shadow-lg transition-all duration-500`}
          >
            <div className="animate-bounce text-xl">
              {headerIcons[currentIcon].icon}
            </div>
          </div>

          <h2 className="text-2xl font-bold">Things I've Built</h2>
        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-4 flex-wrap">
          <span className="px-4 py-1 rounded-full border text-sm">
            ✨ Quality Projects
          </span>
          <span className="px-4 py-1 rounded-full border text-sm">
            ☕ Powered by Coffee
          </span>
        </div>

        {/* Description */}
        <p
          className={`max-w-2xl mb-12 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Every project is a story of curiosity turned into code. I build things
          that not only function but feel right.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </div>

              {/* Icons */}
              <div className="absolute top-3 right-3 flex gap-2">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur p-2 rounded-full hover:scale-110 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur p-2 rounded-full hover:scale-110 transition"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MHRipon01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition"
          >
            View Full Projects →
          </a>
        </div>
      </div>
    </section>
  );
}