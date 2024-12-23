import React from 'react'
import './Footer.css'
import logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
<>
    <div className='Footer'>
      
    <div className="footer-img">
        <img src={logo2} alt="" />
        <p>Financial planners help people to gain<br/> knowledge aboutw</p>
        <p>Follow Us</p>
        <div className="social-links">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div></div><div className="links">
        <h1>Ouick Links</h1>
        <ul className="footer-list">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog Post</li>
            <li> Team Member</li>
        </ul></div>
        
        <div className="contact">
        <h1>Contact</h1>
        <h3>Address</h3>
        <h4 className='head1'>66 Broklyant,New India</h4>
        <h3 className='head2'>Phone Number </h3>
        <h4 className='head1'>9719870XXXX</h4>
        <h3 className='head2'>Prabh@gmail.com</h3>
        
        <h4 className='head1'>66 Broklyant,New India</h4>
        </div>
        <div className="newsletter">
        <h1>Newsletter</h1>
        <p>Sdipiscing elit. Sed sit amet<br/> rcus nunc her it goes</p></div>
    </div>
    <div className="bottom">
        <div className="bottom-para">
        <p>© Yoursitename 2024 | All Rights Reserved</p></div>
        <div className="bottom-para2">
            <div className="bottom-para3">
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p></div>
        
    </div></div>
    </>
    
  )
}

export default Footer;