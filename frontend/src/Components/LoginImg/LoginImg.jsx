import React from 'react'

import hand from "../../assets/hand.png";



const ProjectImg = ({src}) => {
  return (<>
    <div className='imagee'>
        <img  src={hand} alt="" />
    </div>
    <div className="image">
    <h1>Login</h1>
    <div className="home-contact">
      <p>Home</p>
      <p>Login</p>
    </div>
    </div>
    <div className="Project-imgs">
        <img src={src} alt="" />
    </div>

    </>
  )
}
    export default ProjectImg;
    