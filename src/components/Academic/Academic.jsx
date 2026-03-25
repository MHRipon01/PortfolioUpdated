import { useState, useEffect } from "react";
import { FaGraduationCap, FaTrophy, FaMedal, FaAward } from "react-icons/fa";

export default function Academic({ isDark }) {
  // 🔁 Icons + Background Colors
  const academicIcons = [
    { icon: <FaGraduationCap />, bg: "bg-orange-400" },
    { icon: <FaTrophy />, bg: "bg-blue-500" },
    { icon: <FaMedal />, bg: "bg-gray-500" },
    { icon: <FaAward />, bg: "bg-green-500" },
  ];

  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % academicIcons.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const education = [
    {
      title: "CCN University of Science and Technology",
      subtitle: "B.Sc in Computer Science",
      score: "Ongoing, Graduation 2028",
      date: "2024 — 2028",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Cumilla Shikkha Board Govt. Model College",
      subtitle: "Higher Secondary Certificate (HSC)",
      score: "Completed 2022",
      date: "April 2020 — Dec 2022",
      location: "Cumilla, Bangladesh",
    }, {
      title: "Government Laboratory High School",
      subtitle: "Secondary School Certificate (SSC)",
      score: "Completed 2020",
      date: "Jan 2015 — Feb 2020",
      location: "Cumilla, Bangladesh",
    },
   
  ];

  const achievements = [
    {
      icon: <FaMedal className="text-pink-500 text-2xl" />,
      title: "Blackbelt from PH (2023)",
    },
    {
      icon: <FaTrophy className="text-orange-500 text-2xl" />,
      title: "2⭐ Rank on CodeChef",
    },
  ];

  return (
    <section
      className={`py-20 px-6 ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-500 ${
              academicIcons[currentIcon].bg
            }`}
          >
            <div className="animate-bounce text-xl">{academicIcons[currentIcon].icon}</div>
          </div>

          <h2 className="text-2xl font-bold">My Academic Path</h2>
        </div>

        {/* Description */}
        <p className={`mb-10 max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          My journey in academics and programming has been exciting — from SSC to HSC, earning a
          blackbelt in coding, and now pursuing my B.Sc while challenging myself on platforms like CodeChef.
        </p>

        {/* Timeline */}
        <div className="space-y-6 mb-14">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className={`mt-2 w-8 h-8 flex items-center justify-center rounded-full ${
                  isDark ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                🎓
              </div>

              <div
                className={`flex-1 p-5 rounded-xl shadow-md border ${
                  isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
                }`}
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-semibold">{edu.title}</h3>
                    <p className="text-sm opacity-80">{edu.subtitle}</p>
                  </div>

                  <div className="text-sm text-right opacity-70">
                    <p>{edu.date}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>

                <p className="text-sm mt-2 text-orange-500">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h3 className="text-lg font-semibold mb-6">Academic Achievements</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md border ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
              }`}
            >
              <div className="mb-4">{item.icon}</div>
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}