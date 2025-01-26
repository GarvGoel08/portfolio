import React, { useEffect } from "react";
import "./About.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xt256 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function About() {
    useEffect(() => {
      // Find the pre tag by traversing the DOM
      const preTags = document.querySelectorAll("pre");
      preTags.forEach((preTag) => {
        // Check if the pre tag's parent node is the package container
        // Apply background color
        preTag.style.backgroundColor = "#14121c";
      });
    }, []);
    const code = `class Garv {
    constructor() {
      this.name = "Garv Goel"
      this.email = "garvgoel2927@gmail.com"
      this.contact = "9871812115"
    }
    workExperience() {
      return [
        { "Dec 2024 - Present" : "Full Stack Development Intern at PocketClass" },
        { "Feb 2024 - May 2024" : "Web Developer Intern at Neon Shark" }
      ]
    }
    education() {
      return [
        { "2022-2026": "B.Tech in Electrical Engineering from Delhi Technological University" },
      ]
    }
    skills() {
      return [ 
       "HTML/CSS/JS",
       "Node.js", 
       "Bootstrap", 
       "npm/yarn/pnpm", 
       "GIT", 
       "Web Sockets", 
       "Firebase", 
       "MongoDB", 
       "C++", 
       "ReactJS", 
       "NextJS", 
       "DSA", 
       "ExpressJS"  
      ]
    }
  }`;
  return (
    <div className="aboutMain" id="about">
      <div className="SideBar">
        <div className="sideBarCircleMain"></div>
      </div>
      <div className="about">
        <div className="sectionHead">{"< About />"}</div>
        {/* Project Card */}

        <SyntaxHighlighter
          language="javascript"
          wrapLines={true}
          wrapLongLines={true}
          style={xt256}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
