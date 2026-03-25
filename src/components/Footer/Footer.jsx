import { FaLinkedinIn, FaGithub, FaGoogle, FaXTwitter } from "react-icons/fa6";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`border-t ${
        isDark
          ? "bg-[#0f172a] border-gray-800 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Let’s Work Together
            </h2>
            <p className="text-sm mt-1 opacity-70">
              Collabs, roles, or big ideas? Let’s make it happen
            </p>

            {/* Icons */}
            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://www.linkedin.com/in/md-mehedi-hasan-ripon-93508b1b1/" className="hover:text-white transition">
               <img src="/src/components/Footer/li.svg" alt="" />
              </a>
              <a href="https://github.com/mhripon01" className="hover:text-white transition">
                <img src="/src/components/Footer/Githubsvg.svg" alt="" />
              </a>
              <a href="mailto:mhripon012@gmail.com" className="hover:text-white w-12 transition">
                <img  src="/src/components/Footer/Gmail.png" alt="" />
              </a>
              <a href="#" className="hover:text-white transition">
               <img src="/src/components/Footer/twittersvg.svg" alt="" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="text-left md:text-right">
            <p className="text-xs uppercase tracking-wider opacity-60">
              Response Time
            </p>
            <h3 className="text-lg font-semibold text-green-400 mt-1">
              &lt; 2 hours
            </h3>
            <p className="text-sm opacity-70">
              You’ll hear back from me quickly!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10  text-center text-sm opacity-70">
          <p>© 2025 Your Name. All rights reserved.</p>
          <p className="mt-1 text-sm">
            Made with <span className="text-xl text-pink-500 animate-pulse">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}