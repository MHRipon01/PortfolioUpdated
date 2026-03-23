import Typewriter from "typewriter-effect";

const Header = ({ isDark, toggleTheme }) => {
  return (
    <div
      className={` w-full bg-[linear-gradient(to_bottom,_#1a1b4b_0%,_#2d1b4d_50%,_#5c3a72_100%)] textbl  justify-between items-center px-[40px] 40px] ${isDark ? "border-b-[#3d3d4a] bg-[#242533]" : "bg-[#ffffff] border-b-[#e5e4e7]"} `}
    >
      <header
        className={` w-full flex justify-between items-center px-[40px] py-[40px]   } `}
        style={{}}
      >
        <h2 className={`m-0 text-2xl font-bold text-white `}>Ripon</h2>
        <button
          onClick={toggleTheme}
          className={`px-5 py-2.5 rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300 ease-in-out border-none
    ${isDark ? "bg-white text-[#242533]" : "bg-black text-white"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </header>
      <div className="h-[590px] w-full ">
        <div className="p-8 text-white w-full items-center flex justify-center  text-start h-full">
          <div className="relative lg:right-[250px]">
            <h2 className="text-xl">Hi, I'm</h2>
            <div className="flex gap-2">
              <div className="text-5xl font-bold tubelight flex flex-wrap">
                {"MEHEDI HASAN RIPON".split("").map((letter, index) => (
                  <span
                    key={index}
                    style={{ "--i": index }}
                    className={letter === " " ? "w-4" : ""}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 font-mono text-xl text-white">
              <span>
                Web browsers are my canvas and I love to paint them with{" "}
              </span>

              <span className="text-cyan-400 font-bold inline-block">
                <Typewriter
                  options={{
                    strings: [
                      "React",
                      "Next.js",
                      "Shopify",
                      "CSS..",
                      "JavaScript..",
                      "Liquid",
                      "Motion..",
                      "Tailwind..",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 120,
                  }}
                />
              </span>
            </div>

            <div className="mt-4 font-mono text-cyan-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
