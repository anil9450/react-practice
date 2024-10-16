"use client";
import { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const button = document.getElementById("myButton");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      button?.textContent === "Dark Mode";
    } else {
      document.documentElement.classList.remove("dark");
      button?.textContent === "Light Mode";
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setText((prevText) => (prevText === "Dark!" ? "Light!" : "Dark!"));
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Theme Changer</h1>
        <button
          id="myButton"
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white dark:bg-yellow-500"
        >
          Set Mode {text}
        </button>
      </div>
    </div>
  );
};

export default ThemeChanger;
