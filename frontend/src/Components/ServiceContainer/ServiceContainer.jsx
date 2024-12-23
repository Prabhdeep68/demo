import React from 'react'
import './ServiceContainer.css'
const ServiceContainer = ({src,heading,paragraph}) => {
  return (
    <div className='ServiceContainer'>
        <img src={src} alt="" />
        <h1>{heading}</h1>
        <p>{paragraph}</p>


    </div>
  )
}

export default ServiceContainer