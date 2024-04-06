import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactMain" id="contact">
      <div className="SideBar">
        <div className="sideBarCircleMain"></div>
      </div>
      <div className="contact">
        <div className="sectionHead">{"< Contact />"}</div>
        <div className="contactHead">Find me on:</div>
        <div className="Socials">
          <a
            href="https://www.linkedin.com/in/garvgoel2908/"
            target="_blank"
            rel="noreferrer"
            className="SocialLink"
          >
            <img src="Images/linkedin-svgrepo-com.svg" className="SocialImg"/>
            <label className="SocialText">in/garvgoel2908</label>
          </a>
          <a
            href="https://github.com/GarvGoel08"
            target="_blank"
            rel="noreferrer"
            className="SocialLink"
          >
            <img src="Images/github-svgrepo-com.svg" className="SocialImg"/>
            <label className="SocialText">github.com/GarvGoel08</label>
          </a>
          <a
            href="https://www.instagram.com/garvgoel6/"
            target="_blank"
            rel="noreferrer"
            className="SocialLink"
          >
            <img src="Images/instagram-svgrepo-com.svg" className="SocialImg"/>
            <label className="SocialText">@garvgoel6</label>
          </a>
          <a
            href="mailto:garvgoel2927@gmail.com"
            rel="noreferrer"
            className="SocialLink"
          >
            <img src="Images/gmail-svgrepo-com.svg" className="SocialImg"/>
            <label className="SocialText">garvgoel2927</label>
          </a>
          
          <a
            href="tel:9871812115"
            rel="noreferrer"
            className="SocialLink"
          >
            <img src="Images/phone-svgrepo-com.svg" className="SocialImg"/>
            <label className="SocialText">9871812115</label>
          </a>
        </div>
        <div className="MadeBy">  
          <label className="MadeByText">Made with ❤️ by Garv Goel</label>
         </div>
      </div>
    </div>
  );
}
