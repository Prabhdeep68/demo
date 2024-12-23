import React from 'react'
import './AboutMainImg.css'
import hand from "../../assets/hand.png";



const AboutMainImg = ({src}) => {
  return (<>
    <div className='imagee'>
        <img  src={hand} alt="" />
    </div>
    <div className="image">
    <h1>About Us</h1>
    <div className="home-contact">
      <p>Home</p>
      <p>About Us</p>
    </div>
    </div>
    <div className="Project-imgs">
        <img src={src} alt="" />
    </div>

    </>
  )
}
    export default AboutMainImg;
    