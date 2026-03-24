import React from "react";

/**
 * Card data with unique IDs, titles, descriptions, and gradient color schemes.
 */
const cards = [
  {
    img: "💡",
    title: "Problem Solving",
    text: "Experience seamless transitions and elegant UI elements crafted with modern Tailwind CSS techniques.",
    gradient: "from-[#62636D] to-black",
  },
  {
    img: "⚡",
    title: "Performance Optimization",
    text: "Engage your users with interactive components that respond smoothly to every hover and click.",
    gradient: "from-[#62636D] to-black",
  },
  {
    img: "📱",
    title: "Responsive Design",
    text: "Built with React and Tailwind CSS to ensure high performance and maintainable codebases.",
    gradient: "from-[#62636D] to-black",
  },
];

/**
 * HoverCard Component
 *
 * Features a smooth "slide-up" animation where the gradient overlay
 * transitions from full-height to a small header bar on hover.
 */
const HoverCard = () => {
  return (
    <div className=" flex items-center justify-center  p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative w-full max-w-47.5 h-75 bg-white rounded-2xl shadow-xl overflow-hidden mx-auto cursor-pointer"
          >
            {/* Content Layer (Face 1)
                This layer is always present but only fully visible when the overlay slides up.
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ease-in-out">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {card.title}
              </h2>
            
            </div>

            {/* Gradient Overlay Layer (Face 2)
                Transitions from h-full to h-[60px] on hover.
                We use 'transition-all' to animate the height and 'duration-500' for smoothness.
            */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${card.gradient} transition-all duration-3000 ease-in-out group-hover:h-[80px] z-10`}
            >
              {/* Decorative Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none" />

              
              <div className="flex items-center justify-center h-full transition-all duration-3000 ease-in-out">
                <span className="text-white font-black transition-all duration-500 ease-in-out text- group-hover:text-3xl text-3xl group-hover:tracking-widest">
                  {/* <img className="text-xl font-bold" src={card.img} alt={card.title} /> 
                  */}
                  {card.img}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCard;
