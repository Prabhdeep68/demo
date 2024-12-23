import React from 'react'
import './PriceDesc.css'

const PriceDesc = ({heading1,heading2,src,list}) => {
    console.log('heading1');
  return (
    <div className="price-desc">
    <div className='PriceDesc'>
        <div className="price-heading">
        <h1>{heading1}</h1>
        <h2>{heading2}</h2></div>
        <div className="img">

        <img src={src} alt="" /></div>
        <ul className='unlist'>
        {list.map((item, index) => (  // `list` ko map karke har item ko list mein render kiya
          <li key={index}>{item}</li>
        ))}
        </ul>
        <button>Start Now</button>

        

    </div></div>
    
    
    

      
        
      
    
    
    

  )
}

export default PriceDesc;