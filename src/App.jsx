import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import "./index.css";
import SuperPowers from "./components/SuperPowers";
import Projects from "./components/projects/Projects";
import Academic from "./components/Academic/Academic";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
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
      <Projects isDark={isDark} />
      <Academic isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
