import React from 'react'
import './Card.css'


const Card = ({src,title,description}) => {
  return (
    <div className='Card'>
        <div className="card1">
        <img src={src} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
   <button>More About</button>
   </div></div>
  )
}

export default Card;