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
  SiFramer,
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

const skillLogos = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <SiTypescript />,
  <FaReact />,
  <SiNextdotjs />,
  <SiTailwindcss />,
  <SiRedux />,
  <FaNodeJs />,
  <SiExpress />,
  <SiMongodb />,
  <SiStripe />,
  <SiShopify />,
  <SiFigma />,
  <SiPostman />,
  <SiMailtrap />,
  <SiVercel />,
  <SiRender />,
];

export default function SuperPowers({isDark}) {
  const [currentLogo, setCurrentLogo] = useState(0);

  // Rotate logos every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % skillLogos.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section  className={`p-10 max-w-180 m-auto py-16  justify-center ${isDark ? "border border-[#00f2ffb4] bg-bg-dark" : "bg-[#FFFFFF"} shadow-2xl border-2 rounded-2xl`}>
      {/* Top-left logo */}
      <div className="flex w-full  gap-5 mb-16">
        <div className="  justify-center  text-5xl animate-bounce">
          {skillLogos[currentLogo]}
        </div>

        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          My SuperPowers
        </h2>
      </div>

      <p className="ps-6 mb-8 text-[#bfc8dc]">
        Every creator has their toolkit, but I like to think of mine as
        superpowers. From weaving clean UIs to powering up backends, these are
        the skills that help me turn ideas into experiences.
      </p>

      {/* Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: "Problem Solving",
            icon: <SiFramer className="text-3xl mx-auto" />,
          },
          {
            title: "Performance Optimization",
            icon: <FaReact className="text-3xl mx-auto" />,
          },
          {
            title: "Responsive Design",
            icon: <FaHtml5 className="text-3xl mx-auto" />,
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="mt-4 font-semibold">{card.title}</h3>
          </div>
        ))}
      </div> */}

<HoverCard/>


      {/* Skill sections */}
      <div className="space-y-6">
        {/* Crafting Interfaces */}
        <div>
          <h4 className="font-semibold mb-2">Crafting Stunning Interfaces</h4>
          <div className="flex flex-wrap gap-2">
            {[
              FaHtml5,
              FaCss3Alt,
              FaJs,
              SiTypescript,
              FaReact,
              SiNextdotjs,
              SiTailwindcss,
              SiFramer,
              SiRedux,
            ].map((Icon, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                <Icon /> {Icon.displayName || Icon.name}
              </span>
            ))}
          </div>
        </div>

        {/* Building Backends */}
        <div>
          <h4 className="font-semibold mb-2">Building Robust Backends</h4>
          <div className="flex flex-wrap gap-2">
            {[FaNodeJs, SiExpress, SiMongodb].map((Icon, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                <Icon /> {Icon.displayName || Icon.name}
              </span>
            ))}
          </div>
        </div>

        {/* Modern Tooling */}
        <div>
          <h4 className="font-semibold mb-2">Modern Tooling</h4>
          <div className="flex flex-wrap gap-2">
            {[
              FaGithub,
              SiStripe,
              SiShopify,
              SiFigma,
              SiPostman,
              SiMailtrap,
              SiVercel,
              SiRender,
            ].map((Icon, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                <Icon /> {Icon.displayName || Icon.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
