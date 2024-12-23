import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectImg from '../ProjectImg/ProjectImg'
import ProjectImgs from '../ProjectImgs/ProjectImgs'
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import Footer from '../Footer/Footer';

const Projects = () => {
  return (<>
    <div>
      <Navbar/>
      <ProjectImg/></div><div className="project-div">
      <div className="project-div1">
      <ProjectImgs src={project1}
         
      />
      <ProjectImgs src={project2}/>
      <ProjectImgs src={project3}/></div>
      <div className="project-div2">
      <ProjectImgs src={project4}/>
      <ProjectImgs src={project5}/>
      <ProjectImgs src={project6}/></div></div>
      <Footer/>
    </>
  )
}

export default Projects