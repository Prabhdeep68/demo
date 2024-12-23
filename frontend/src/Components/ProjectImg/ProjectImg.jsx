import React from 'react'
import './ProjectImg.css'
import hand from "../../assets/hand.png";



const ProjectImg = ({src}) => {
  return (<>
    <div className='imagee'>
        <img  src={hand} alt="" />
    </div>
    <div className="image">
    <h1>Projects</h1>
    <div className="home-contact">
      <p>Home</p>
      <p>Projects</p>
    </div>
    </div>
    <div className="Project-imgs">
        <img src={src} alt="" />
    </div>

    </>
  )
}
    export default ProjectImg;
    