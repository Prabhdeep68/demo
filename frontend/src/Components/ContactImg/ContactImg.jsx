import React from 'react'
import './ContactImg.css'
import hand from "../../assets/hand.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const ContactImg = () => {
  return (<>
    <div className='imagee'>
        <img  src={hand} alt="" />
    </div>
    <div className="image">
    <h1>Contact Us</h1>
    <div className="home-contact">
      <p>Home</p>
      <p>Contact</p>
    </div>
    </div>
    <div className="contact-text">
      <div className="contact-text1">
      <h1>Contact Us</h1>
      <h2>Get in Touch</h2></div>
      <div className="Contact-para">
      <p>IT Solution is a broad category that encompasses various <br/> technological solutions</p>
    </div></div>
    <form>
    <div className="form">
      <div className="form-details">
        <div className="name-email">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Your Email' />
        </div>
        <div className="Number-Subject">
        <input type="text" placeholder='Phone Number' />
        <input type="text" placeholder='Subject' />

        </div>
        <div className="textarea">
          <textarea rows={10} id=""></textarea>
        </div>
        <button>Submit Now</button>
        

      </div> 
      <div className="address">
        <div className="email">
        <FontAwesomeIcon icon={faEnvelope}  style={{ color: '#EC4814', fontSize: '24px' }} /> <h1>Email:</h1> 
<p>Prabh@gamil.com</p>
        </div>
        <div className="phone">
        <FontAwesomeIcon icon={faPhone} style={{ color: '#EC4814', fontSize: '24px' }} /> <h1> Phone:</h1>
        <p>97198XXXX</p> 
        </div>
        <div className="location">
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#EC4814', fontSize: '24px' }} /> <h1>Location:</h1> 
        <p>Muzaffarnagar</p>
        </div>

      </div></div>
      </form>
    
    </>
  )
}

export default ContactImg;