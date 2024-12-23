import React from 'react';
import './Team.css';  // Styling for Card Component

const Team = ({ title,mentor, progress,designer, imgSrc }) => {
  return (<>
   
    <div className="team">
    <div className="Team">
      <div className="left">
        <h2>{title}</h2>
        <p>{mentor}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{designer}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="right">
        <img src={imgSrc} alt="card-img" />
      </div>
    </div></div></>
  );
};

export default Team;
