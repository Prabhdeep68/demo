import React from 'react'
import './AboutChoose.css'
import copy from "../../assets/copy.png";

const AboutChoose = () => {
  return (
    <div className='AboutChoose'>
        <img src={copy} alt="" />
        <div className="choose-container">

        <h1>Why Choose Us</h1>
        <h2>Stay Ahead With<br/>
        Cutting-Edge<span>technology</span></h2></div>
        <div className="choose-divs" >
            <h1>CloudConnect IT Services</h1>
            <p>IT Solution is a broad category that encompass the solutions aimed at solving problems or improving</p>
        </div>
        <div className="choose-divs" >
            <h1>Network Infrastructure Solutions</h1>
            <p>IT Solution is a broad category that encompass the solutions aimed at solving problems or improving</p>
        </div>
        <button>Read More</button>
    </div>
  )
}

export default AboutChoose