import React, { useState } from 'react';

const ThemeButton = () => {
const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };



    return (
         <div
      className={isDark ? "dark" : "light"}
      style={{ minHeight: "100vh", padding: "20px", }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: isDark ? "#ffffff" : "#000000",
          color: isDark ? "#242533" : "#ffffff",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
    );
};

export default ThemeButton;