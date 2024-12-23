import React from 'react'
import Navbar from '../Navbar/Navbar'
import ServiceImg from '../ServiceImg/ServiceImg'
import image1 from "../../assets/image1.png";
import ServiceContainer from '../ServiceContainer/ServiceContainer'
import Footer from '../Footer/Footer'

const Services = () => {
  return (
    <>
    <Navbar/>
    <ServiceImg/>
    <div className="service-container-div">
      <div className="service-container-div1">
    <ServiceContainer
    src={image1}
    heading='Digital transformation manage IT'
    paragraph='IT solution is a broad catgur ncomapssess various technologies IT solution is a broad catgur ncomapssess various technologies'
    
    />
    <ServiceContainer
    src={image1}
    heading='Digital transformation manage IT'
    paragraph='IT solution is a broad catgur ncomapssess various technologies IT solution is a broad catgur ncomapssess vario'
    
    />
    <ServiceContainer
    src={image1}
    heading='Digital transformation manage IT'
    paragraph='IT solution is a broad catgur ncomapssess various technologies IT solution is a broad catgur ncomapssess vario'
    
    /></div>
    <div className="service-container-div2">
    <ServiceContainer
    src={image1}
    heading='Digital transformation manage IT'
    paragraph='IT solution is a broad catgur ncomapssess various technologies IT solution is a broad catgur ncomapssess vario'
    
    />
    <ServiceContainer
    src={image1}
    heading='Digital transformation manage IT'
    paragraph='IT solution is a broad catgur ncomapssess various technologies IT solution is a broad catgur ncomapssess vario'
    
    />
    <ServiceContainer
    src={image1}
    heading='Digital transformation manage IT'
    paragraph='IT solution is a broad catgur ncomapssess various technologies IT solution is a broad catgur ncomapssess vario'
    
    />
    </div></div>
    <Footer/>
    </>
    
  )
}

export default Services