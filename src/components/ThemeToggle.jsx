// components/ThemeToggle.jsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "cupcake" : "light"); // toggle between two themes
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline absolute top-4 right-4 z-10"
    >
      {theme === "light" ? "🌸 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
