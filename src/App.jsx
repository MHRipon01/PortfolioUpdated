import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import "./index.css";
import SuperPowers from "./components/SuperPowers";
// import Hero from "./components/Hero";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      {/* <Hero /> */}
      <AboutMe isDark={isDark} />
      <SuperPowers isDark={isDark}/>
    </div>
  );
}

export default App;
