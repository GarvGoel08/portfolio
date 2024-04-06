import React, { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarLogo">
        <span className="bracket">&lt; </span>
        <div className="NavbarLogoText">Garv</div>
        <span className="bracket"> /&gt;</span>
      </div>
      <div className="NavbarLinks">
        <div className="NavbarLink NavbarLinkActive">
          <span className="bracket-nav">&lt; </span>
          <span>Home</span>
          <span className="bracket-nav"> /&gt;</span>
        </div>
        <a href="#projects" className="NavbarLink">
          <span className="bracket-nav">&lt; </span>
          <span>Projects</span>
          <span className="bracket-nav"> /&gt;</span>
        </a>
        <a href="#about" className="NavbarLink">
          <span className="bracket-nav">&lt; </span>
          <span>About</span>
          <span className="bracket-nav"> /&gt;</span>
        </a>
        <a href="#contact" className="NavbarLink">
          <span className="bracket-nav">&lt; </span>
          <span>Contact</span>
          <span className="bracket-nav"> /&gt;</span>
        </a>
      </div>
    </div>
  );
}
