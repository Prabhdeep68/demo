import React from 'react'
import './AboutMainText.css'
import aboutmain from "../../assets/aboutmain.png";
import aboutvideo from "../../assets/aboutvideo.png";

const AboutMainText = () => {
  return (<>
    <div className='AboutMainText'>
        <div className="aboutmaintext1">
            <h1>About Us</h1>
            <h2>Empower Your Business With IT Most <span>TheSolutions</span></h2>
            <p>IT Solution is a broad category that encompasses various technological solutions aimed at solving problems or improving efficiency in the field of information technology the best it design in the field</p>
      <div className="about-video">
        <div className="about-img">
       <img src={aboutvideo} alt="" />
     
       </div>
       <div className="about-video-text">
        <p>Cloud Connect IT Services </p>
        <p>Cyber Shield Technologies </p>
        <p>Digital Transfer Solutions 
        </p>
        <p>IT Consulting and Support</p>
        <button>Read More</button>
        
       </div>
       </div>
       
        </div>
        <div className="aboutmaintext2">
          <img src={aboutmain} alt="" />
        </div>
    </div></>
  )
}

export default AboutMainText