import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.classList.toggle("dark", !isDark);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName =
              entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1);
            setActiveSection(sectionName);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar
        active={activeSection}
        onToggleTheme={handleToggleTheme}
        isDark={isDark}
      />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
