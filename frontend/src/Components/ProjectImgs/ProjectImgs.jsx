
import './ProjectImgs.css'
import React, { useState } from 'react';

const ProjectImgs = ({src}) => {
  const [showText, setShowText] = useState(false);
  const handleMouseEnter = () => {
    setShowText(true);
  };
  const handleMouseLeave = () => {
    setShowText(false);
  };
  return (<>
  <div  style={{
        position: 'relative',  // Positioning context for the text box
        display: 'inline-block',  // Keep the image and text inline
        width: '410px',  // Image width (you can adjust this)
        height: '520px',
      }}
      >

    
        <img 
           
           src={src}
           alt="Project"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           
           style={{
            width: '100%',  // Make sure the image takes up the full container width
            height: 'auto', // Maintain aspect ratio of the image
            cursor: 'pointer',
            borderRadius: '8px',
          }}
         />
         
        {showText && (
          <div
            style={{
              position: 'absolute',   // Positioning relative to the parent div
              top: '50%',  // Vertically center the text box within the image
              left: '50%', // Horizontally center the text box within the image
              transform: 'translate(-50%, -50%)',  // This makes sure it's truly centered
              padding: '10px',
              border: 'none',
              borderRadius: '25px',
              backgroundColor: 'white', // Slight transparency for better readability
              width: '300px',  // Set text box width
              height:'90px',
              textAlign: 'center',
              zIndex: 1,  // Ensure text box is above the image
              color:'#5b5b5b',
              font:'20px',
            }}
          >
            <h2>
              Digital Transformation
            </h2>
            <p>Software Developer</p>
          </div>
        )}</div>
    </>
    
  )
}

export default ProjectImgs