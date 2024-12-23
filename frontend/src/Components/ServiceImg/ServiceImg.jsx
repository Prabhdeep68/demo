import React from 'react'
import './ServiceImg.css'
import hand from "../../assets/hand.png";



const ServiceImg = ({src}) => {
  return (<>
    <div className='imagee'>
        <img  src={hand} alt="" />
    </div>
    <div className="image">
    <h1>Services</h1>
    <div className="home-contact">
      <p>Home</p>
      <p>Services</p>
    </div>
    </div>
    <div className="Project-imgs">
        <img src={src} alt="" />
    </div>

    </>
  )
}
    export default ServiceImg;
    