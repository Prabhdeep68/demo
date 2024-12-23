import React from 'react'

import hand from "../../assets/hand.png";



const ProjectImg = ({src}) => {
  return (<>
    <div className='imagee'>
        <img  src={hand} alt="" />
    </div>
    <div className="image">
    <h1>Sign Up</h1>
    <div className="home-contact">
      <p>Home</p>
      <p>Sign Up</p>
    </div>
    </div>
    <div className="Project-imgs">
        <img src={src} alt="" />
    </div>

    </>
  )
}
    export default ProjectImg;
    