import logo from "./logo.svg";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  useEffect(() => {
    // Function to scroll to the section corresponding to the hash in the URL
    function scrollToHashSection() {
      const hash = window.location.hash.substring(1);
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`No section found with id '${hash}'`);
      }
    }

    const hashChangeHandler = () => {
      scrollToHashSection();
    };

    scrollToHashSection(); // Scroll to section on initial mount

    window.addEventListener("hashchange", hashChangeHandler);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  return (
    <div className="Main">
      {/* Cursor Code */}
      <AnimatedCursor
        innerSize={3}
        outerSize={12}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".NavbarLink",
          ".projectCard",
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '255, 255, 255',
              outerAlpha: 0.6,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <Projects/>
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <Contact/>
    </div>
  );
}

export default App;
