import React from 'react'

import './Photos.css'

import { FaArrowRight } from 'react-icons/fa';  // Font Awesome Right Arrow

import { FaArrowLeft } from 'react-icons/fa';  // Material Design Left Arrow
import girl from "../../assets/girl.png";
import girl2 from "../../assets/girl2.png";
import girl3 from "../../assets/girl3.png";
import girl4 from "../../assets/girl4.png";


 


const Photos = () => {
  return (<>
    <div className='Photos'>
        <div className="Photos-text">
            <h1>Recent Projects</h1>
            <h2>Reach New Heights with<br/>
Digital Marketing
</h2></div>
<div className="arrow-container">
<FaArrowLeft size={30} color="#EC4814" />
<FaArrowRight size={30} color="#EC4814" />






        </div></div>
           <div className="image-slider-wrapper">
        <div className="image-slider">
        <div className="images-container">
            <img src={girl} alt="" />
            <img src={girl2} alt="" />
            <img src={girl3} alt="" />
            <img src={girl4} alt="" />
            <img src={girl} alt="" />
            <img src={girl2} alt="" />
            <img src={girl3} alt="" />
            <img src={girl4} alt="" />
        </div></div>
        </div></>

    
  )
}

export default Photos;