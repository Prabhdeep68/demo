import React from 'react'
import './About.css'
import image3 from "../../assets/image3.png";


const About = () => {
  return (
    <div className='About'>
        <div className="about-img">
        <img src={image3} alt="" />
    </div>
    <div className="about-text">
        <h1>Know About Us</h1>
        <h2>The Future of Mobile <br /> Software Unleash Your <br /> Mobile</h2>
        <p>Et purus duis sollicitudin dign habitant. Egestas nulla quis<br/> venenatis cras sed eu massa eu faucibus Urna fusce Et purus<br/> duis sollicitudin dignissim habitant. Egestas nulla quis venenatis</p>
        <p>Et purus duis sollicitudin dignissim habitant</p>
        <p>venenatis cras sed eu massa eu faucibus uis</p>
    </div>
    </div>
  )
}

export default About;