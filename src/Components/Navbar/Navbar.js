import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className={`Navbar ${navbar ? "Navbar-Show MobileNav" : ""}`}>
      <div className="MobNav">
        <div className="NavbarLogo">
          <span className="bracket">&lt; </span>
          <div className="NavbarLogoText">Garv</div>
          <span className="bracket"> /&gt;</span>
        </div>
        <button
          className="NavbarToggle"
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className={`NavbarLinks ${navbar ? "Navbar-Show" : ""}`}>
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
