import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import resume from "/src/components/AboutMe/ResumeOfMehediHasanRipon.pdf";
import myPic from  "./edited-removebg-preview.png";

const AboutMe = ({ isDark }) => {

  // Resume Download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "ResumeOfMHRipon.pdf";
    link.click();
  };

  //Scroll to Contact Section
  const handleScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="p-10 max-w-200 m-auto ">
      <div
        className={` py-16 px-4 flex justify-center ${
          isDark
            ? "border border-[#00f2ffb4] bg-[#242533]"
            : "bg-[#FFFFFF"
        } relative lg:bottom-50  shadow-2xl border-2 rounded-2xl`}
      >
        <div className="max-w-4xl w-full  backdrop-blur-md rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 ">
            <img
              src={myPic}
             
              className="w-[140px] h-[140px] rounded-xl object-cover" alt="Mehedi Hasan Ripon"
            />
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: isDark ? "#ffffff" : "black",
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
         {/* Content */}
<div className="space-y-4 leading-relaxed">
  <p>
    I'm a curious and determined developer who loves turning ideas into real, working web experiences. My focus is on building applications that are fast, functional, and enjoyable for users.
  </p>

  <p>
    I started my programming journey in 2020, and since then I’ve explored full-stack development, DSA, and competitive programming. I’ve earned a blackbelt from Programming Hero and achieved a 2⭐ rank on CodeChef, constantly challenging myself to improve.
  </p>

  <p>
    Currently, I’m pursuing my B.Sc in Computer Science at CCN University of Science and Technology, set to graduate in 2028. I’m passionate about learning new technologies, creating meaningful projects, and pushing my skills further every day.
  </p>

  <p>
    Outside coding, I enjoy reading, exploring new ideas, and growing both mentally and physically. I’m open to full-time opportunities and freelancing, eager to contribute my skills to impactful projects.
  </p>
</div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1f2937] to-[#374151] text-white font-medium shadow-md hover:opacity-90 transition"
            >
              Get my Resume
            </button>

            <button
              onClick={handleScroll}
              className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium shadow-md hover:bg-gray-700 transition flex items-center gap-2"
            >
              Hire Me →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;