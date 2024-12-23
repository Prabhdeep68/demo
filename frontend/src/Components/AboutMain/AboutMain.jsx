import React from 'react'
import AboutMainImg from '../AboutMainImg/AboutMainImg'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import AboutMainText from '../AboutMainText/AboutMainText'
import AboutNumber from '../AboutNumber/AboutNumber'
import AboutChoose from '../AboutChoose/AboutChoose'

const AboutMain = () => {
  return (
    <div>
      <Navbar/>
      <AboutMainImg/>
      <AboutMainText/>
      <AboutNumber/>
      <AboutChoose/>
     <Footer/>
    
    </div>
  )
}

export default AboutMain