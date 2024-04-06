import React from "react";
import Navbar from "../Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const [topMargin, setTopMargin] = useState(0);

  useEffect(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const absoluteTop = rect.top + scrollTop;

      setTopMargin(absoluteTop);
    }
  }, []);
  return (
    <div className="HeroMain">
      <Navbar />
      <div
        className="heroSideBar"
        style={{ marginTop: topMargin, height: `calc(100% - ${topMargin}px)` }}
      >
        <div className="sideBarCircle"></div>
      </div>
      <div className="Hero">
        <div className="HeroText" ref={heroRef}>
          <div className="sectionHead">{"< Start />"}</div>
          <div className="flex flex-row" style={{ flexWrap: "wrap", gap: '8px' }}>
            <h1 className="NameHeading">Hi, my name is </h1>
            <div className="flex flex-row">
              <h1 className="Name NameHeading">G</h1>
              <h1 className="Name NameHeading">a</h1>
              <h1 className="Name NameHeading">r</h1>
              <h1 className="Name NameHeading">v</h1>
              <h1 className="Name Name-Start NameHeading">G</h1>
              <h1 className="Name NameHeading">o</h1>
              <h1 className="Name NameHeading">e</h1>
              <h1 className="Name NameHeading">l</h1>
            </div>
          </div>
          <h2 className="HeroSkills">I am a Full Stack Developer</h2>
          <div className="KnowMore">Wanna Know More about me? Lets go..</div>
        </div>
      </div>
    </div>
  );
}
