import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <div className="projectsMain" id="projects">
      <div className="SideBar">
        <div className="sideBarCircleMain"></div>
      </div>
      <div className="projects">
        <div className="sectionHead">{"< Projects />"}</div>
        <div className="ProjectsHeading">My Web Projects..</div>
        {/* Project Card */}
        <div className="projectsList">
          <ProjectCard link="https://ezinterview.vercel.app" title="Ez-Interview" description="A revolutionary website to prevent cheating during hiring." image="/Images/EzInerviewLogo.jpeg"/>
          <ProjectCard link="https://item-zilla-frontend.vercel.app/" title="ItemZilla" description="ecommerce website made by utilizing RazorPay payment" image="/Images/ItemZilla.png"/>
          <ProjectCard link="https://taskongo.vercel.app/" title="TaskOnGo" description="Create and manage your tasks with TaskOnGo" image="/Images/TOG_Logo.png"/>
          <ProjectCard link="https://sheets-theta.vercel.app/" title="Docs" description="Website to collaboratively share documents" image="/Images/Docs.png"/>
        </div>
      </div>
    </div>
  )
}
