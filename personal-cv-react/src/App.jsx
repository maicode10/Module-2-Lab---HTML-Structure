import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const skills = [
    {
      category: "Web Development",
      subcategories: [
        { name: "Frontend", items: ["HTML5", "CSS", "JavaScript"] },
        { name: "Backend", items: ["MySQL"] }
      ]
    },
    { category: "Programming Languages", items: ["Java", "Python", "C", "PHP", "SQL"] },
    { category: "Development Tools", items: ["Git & GitHub", "Visual Studio Code", "NetBeans"] },
    { category: "Design Tools", items: ["Canva", "Figma"] },
    { category: "Database Management", items: ["MySQL"] },
    { category: "Productivity & Systems", items: ["Microsoft Office", "Operating Systems (Windows, Linux)"] },
    { category: "Soft Skills", items: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Time Management", "Adaptability"] }
  ];

  const education = [
    { level: "Doctorate", institution: "USTP – CDO Campus", year: "2034" },
    { level: "Masteral", institution: "USTP – CDO Campus", year: "2030" },
    { level: "College", institution: "USTP – CDO Campus", year: "2028" },
    { level: "Senior High School", institution: "Lourdes College", year: "2024" },
    { level: "Junior High School", institution: "Don Mariano Canoy Colleges", year: "2022" }
  ];

  const projects = [
    { name: "Tetris Game", description: "Tetris Game developed as part of a school project." },
    { name: "Functional Calculator", description: "A modern GUI calculator built with Java Swing." },
    { name: "Currency Converter", description: "A JavaFX desktop application for converting currencies." }
  ];

  const hobbies = [
    { name: "Music", description: "Singing and playing guitar" },
    { name: "Technology", description: "Exploring new programming languages" },
    { name: "Creative Design", description: "Creating digital artwork and web designs" },
    { name: "Learning", description: "Watching tech tutorials" }
  ];

  return (
    <div>
      <button id="themeToggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="container">
        <Header />
        <main>
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Projects projects={projects} />
          <Hobbies hobbies={hobbies} />
          <Contact />
        </main>
      </div>
      <footer>
        <p>&copy; 2026 Maira Lorraine Domaog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;