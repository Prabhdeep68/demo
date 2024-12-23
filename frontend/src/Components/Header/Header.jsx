import React from 'react'
import "../Header/Header.css"
import server from "../../assets/server.png";


const Header = () => {
  return (
    <div className='Header'>
        <h1 className='Header-heading'>Revolutionize Your Mobile
        </h1>
        <h2 className='header-head2'>With State Software</h2>
        <div className="person">
            <img src={server} alt="" />
        </div>
    </div>
  )
}

export default Header;