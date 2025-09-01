zzimport React from 'react'
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
          <ProjectCard link="https://devicode.vercel.app/" title="Devicode" description="A No Code Backend tool for developers." image="/Images/Devicode.jpg"/>
          <ProjectCard link="https://ezinterview.vercel.app" title="Ez-Interview" description="A revolutionary website to prevent cheating during hiring." image="/Images/EzInerviewLogo.jpeg"/>
          <ProjectCard link="https://labiotic.vercel.app/" title="Labiotic" description="AI-Powered tool that automates the process of creating lab reports." image="/Images/LabioticsLogo.png"/>
          <ProjectCard link="https://docongoai.vercel.app/" title="Docongo" description="A doctor powered by AI available for you at all times" image="/Images/DocOnGoLogo.png"/>
          <ProjectCard link="https://dev-links-one-rust.vercel.app" title="DevLinks" description="A platform for developers to share their social links." image="/Images/DevLinks.png"/>
          <ProjectCard link="https://item-zilla-frontend.vercel.app/" title="ItemZilla" description="ecommerce website made by utilizing RazorPay payment" image="/Images/ItemZilla.png"/>
          <ProjectCard link="https://taskongo.vercel.app/" title="TaskOnGo" description="Create and manage your tasks with TaskOnGo" image="/Images/TOG_Logo.png"/>
          <ProjectCard link="https://sheets-theta.vercel.app/" title="Docs" description="Website to collaboratively share documents" image="/Images/Docs.png"/>
        </div>
      </div>
    </div>
  )
}
