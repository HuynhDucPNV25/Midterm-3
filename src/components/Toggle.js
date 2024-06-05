import { useEffect, useState } from "react";
import "../App.css";
import "./Toggle.css"
export const Toggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor =
      theme === "dark" ? "var(--dark-color)" : "var(--light-color)";
    document.body.style.color =
      theme === "dark" ? "var(--light-color)" : "var(--dark-color)";
  }, [theme]);

  return (
    <div className="toggle-container">
      <button onClick={toggleTheme} className={`toggle-button ${theme}`}>
        <span>{theme === "light" ? "Light ☀️" : "Dark 🌙"}</span>
      </button>
    </div>
  );
};
