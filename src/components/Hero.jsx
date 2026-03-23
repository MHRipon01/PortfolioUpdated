import React from "react";

const Hero = () => {
  return (
    <div className="h-[400px] w-full bg-[linear-gradient(to_bottom,_#1a1b4b_0%,_#2d1b4d_50%,_#5c3a72_100%)]">
      <div className="p-8 text-white w-full items-center flex justify-center border text-start h-full">
        <div className="relative lg:right-[250px]">
          <h2 className="text-xl">Hi, I'm</h2>
          <h1 className="text-5xl font-bold">Mehedi Hasan Ripon</h1>
          <p className="mt-4 font-mono">
            Web browsers are my canvas and I love to paint them with Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
