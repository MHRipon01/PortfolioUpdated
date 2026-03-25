import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiShopify,
  SiFigma,
  SiPostman,
  SiMailtrap,
  SiVercel,
  SiRender,
} from "react-icons/si";
import HoverCard from "./HoverCard";

export default function SuperPowers({ isDark }) {
  const [currentLogo, setCurrentLogo] = useState(0);

  // Rotating logos
  const skillLogos = [
    <FaHtml5 className="text-orange-500" />,
    <FaCss3Alt className="text-blue-500" />,
    <FaJs className="text-yellow-400" />,
    <SiTypescript className="text-blue-500" />,
    <FaReact className="text-sky-400" />,
    <SiNextdotjs className={isDark ? "text-white" : "text-black"} />,
    <SiTailwindcss className="text-sky-400" />,
    <SiRedux className="text-purple-500" />,
    <FaNodeJs className="text-green-500" />,
    <SiExpress className="text-gray-400" />,
    <SiMongodb className="text-green-500" />,
    <SiStripe className="text-indigo-500" />,
    <SiShopify className="text-lime-500" />,
    <SiFigma className="text-pink-400" />,
    <SiPostman className="text-orange-400" />,
    <SiMailtrap className="text-green-500" />,
    <SiVercel className={isDark ? "text-white" : "text-black"} />,
    <SiRender className="text-gray-400" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % skillLogos.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // ✅ Sections
  const sections = [
    {
      title: "Crafting Stunning Interfaces",
      skills: [
        { icon: FaHtml5, color: "text-orange-500", name: "HTML" },
        { icon: FaCss3Alt, color: "text-blue-500", name: "CSS" },
        { icon: FaJs, color: "text-yellow-400", name: "JavaScript" },
        { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
        { icon: FaReact, color: "text-sky-400", name: "React" },
        {
          icon: SiNextdotjs,
          color: isDark ? "text-white" : "text-black",
          name: "Next.js",
        },
        { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind" },
        { icon: SiRedux, color: "text-purple-500", name: "Redux" },
      ],
    },
    {
      title: "Building Robust Backends",
      skills: [
        { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
        { icon: SiExpress, color: "text-gray-400", name: "Express" },
        { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
      ],
    },
    {
      title: "Modern Tooling",
      skills: [
        {
          icon: FaGithub,
          color: isDark ? "text-white" : "text-black",
          name: "GitHub",
        },
        { icon: SiStripe, color: "text-indigo-500", name: "Stripe" },
        { icon: SiShopify, color: "text-lime-500", name: "Shopify" },
        { icon: SiFigma, color: "text-pink-400", name: "Figma" },
        { icon: SiPostman, color: "text-orange-400", name: "Postman" },
        { icon: SiMailtrap, color: "text-green-500", name: "Mailtrap" },
        {
          icon: SiVercel,
          color: isDark ? "text-white" : "text-black",
          name: "Vercel",
        },
        { icon: SiRender, color: "text-gray-400", name: "Render" },
      ],
    },
  ];

  return (
    <section
      className={`p-10 max-w-5xl mx-auto py-16 rounded-2xl shadow-2xl border ${
        isDark
          ? "bg-gray-900 border-cyan-400 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      {/* Top */}
      <div className="flex items-center gap-4 mb-10">
        <div className="text-5xl animate-bounce">{skillLogos[currentLogo]}</div>
        <h2 className="text-3xl font-bold">My Superpowers</h2>
      </div>

      <p className={`mb-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        Every creator has their toolkit. I turn ideas into real products using
        these technologies.
      </p>

      <HoverCard />
      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section, i) => (
          <div key={i}>
            <h4
              className={`font-semibold mb-3 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {section.title}
            </h4>
        
            <div className="flex flex-wrap gap-3">
              {section.skills.map(({ icon: Icon, color, name }, idx) => (
                <span
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <Icon className={`${color} text-lg`} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
