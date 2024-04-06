import React, { useRef, useState } from "react";
import "./ProjectCard.css";
export default function ProjectCard({ title, description, image, link }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const boundingRect = cardRef.current.getBoundingClientRect();
    const newRotateX =
      (event.clientY - boundingRect.top - boundingRect.height / 2) / 10;
    const newRotateY =
      -(event.clientX - boundingRect.left - boundingRect.width / 2) / 10;
    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  return (
    <div
      className="projectCard"
      ref={cardRef}

      onClick={() => {
        window.open(link, "_blank");
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX*2}deg) rotateY(${rotateY*2}deg)`
      }}
    >
      <div
        className="projectCardImage"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.9)), url(${image})`,
        }}
      >
        <div className="projectCardText">
          <div className="projectCardTitle">{title}</div>
          <div className="projectCardDescription">{description}</div>
        </div>
      </div>
    </div>
  );
}
