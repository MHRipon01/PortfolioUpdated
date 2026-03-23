import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

const AboutMe = ({ isDark }) => {
  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >

      <div
        className={` py-16 px-4 flex justify-center ${isDark ? "border-2" : "border-0"} shadow-2xl border-2 rounded-2xl`}
      >
        <div className="max-w-4xl w-full  backdrop-blur-md rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 ">
            <img
             src="/src/assets/edited-removebg-preview.png"
             
              className="w-[140px] h-[140px] rounded-xl object-cover"
            />
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: isDark ? "#ffffff" : "#286745",

                marginBottom: "20px",
              }}
            >
              Who am i?
            </h2>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm">
              <MdWorkOutline /> Available for work
            </span>

            <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm">
              <FaRegClock /> 2+ Years of Experience
            </span>

            <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm">
              <IoLocationOutline /> Cumilla , Bangladesh 
            </span>
          </div>

          {/* Content */}
          <div className=" space-y-4 leading-relaxed">
            <p>
              I'm the developer who turns ideas into web experiences people
              enjoy using. My mission is to build applications that look great,
              load fast, and work for everyone.
            </p>

            <p>
              I'm a 23 year old CSE grad, and since beginning my programming
              journey in 2020, my curiosity has pushed me to dive deep into
              fullstack development, with a strong focus on accessibility,
              performance, and SEO.
            </p>

            <p>
              At ansrsource, I worked as a frontend developer, contributing from
              day one and developing the company's portfolio website, which
              boosted sales by 70%.
            </p>

            <p>
              Beyond coding, I enjoy music, meeting like minded people, and
              sharing ideas. Known as the “padhaku” among friends, I take pride
              in being a consistent academic topper and graduating in 2024. I'm
              currently open to fulltime roles and freelance opportunities.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1f2937] to-[#374151] text-white font-medium shadow-md hover:opacity-90 transition">
              Get my Resume
            </button>

            <button className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium shadow-md hover:bg-gray-700 transition flex items-center gap-2">
              Hire Me →
            </button>
          </div>
        </div>
      </div>
      );
    </section>
  );
};

export default AboutMe;
