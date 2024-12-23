import React from 'react'
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Card from '../Card/Card';

import image from "../../assets/image.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import phone from "../../assets/phone.png";
import man from "../../assets/man.png";
import blog from "../../assets/blog.png";
import About from '../About/About';
import Logo from '../Logo/Logo';
import Choose from '../Choose/Choose';
import Photos from '../Photos/Photos';
import Price from '../Price/Price';
import PriceDesc from '../PriceDesc/PriceDesc';
import ImageLink from '../ImageLink/ImageLink';
import TeamText from '../TeamText/TeamText';
import Team from '../Team/Team';
import BlogText from '../BlogText/BlogText';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';





const Home = () => {
  const itemList = [
    'Mistake To Avoid',
    'Your Startup',
    'knew About Fonts',
    'Your Startup',
    'Knew About Fonts',
  ];
  return (
    <div>
      <Navbar/>
      
      <Header/>
      <div className='Card-div'>
        <Card 
          src={image} 
          title="Prestige Management" 
          description="Real estate is a lucrative ind involves the is a buying selling and reproperties. It is a good encompasses residential"
        />
        <Card 
          src={image1} 
          title="Luxury Living" 
          description="Real estate is a lucrative ind involves the is a buying selling and reproperties. It is a good encompasses residential"
        />
        <Card 
          src={image2} 
          title="Property Investment" 
          description="Real estate is a lucrative ind involves the is a buying selling and reproperties. It is a good encompasses residential"
        />
        
      </div>
      <About/>
      <Logo/>
      <Choose/>
      <Photos/>
      <Price/>
         
    <div className='PriceDesc-div'>
      <PriceDesc
      heading1="Basic"
      heading2="$29/month"
      src={phone}
      
      list={itemList}

      />
        <PriceDesc
      heading1="Basic"
      heading2="$29/month"
      src={phone}
      list={itemList}

      />
        <PriceDesc
      heading1="Basic"
      heading2="$29/month"
      src={phone}
      list={itemList}

      /></div>
      <div style={{marginBottom:'450px',}}>
      <ImageLink/></div>
      <TeamText/>
      <div className="row">
        <Team 
          title="Bessie Copper" 
          mentor='Mentor'
          designer='Designer'
          progress={70} 
          imgSrc={man}
        />
        <Team
          title="Frahn khan" 
              mentor='Mentor'
          designer='Designer'
          progress={50} 
          imgSrc={man} 
        />
      </div>
      
      <div className="row">
        <Team 
          title="Ashish Singh"
          mentor='Mentor'
          designer='Designer' 
          progress={90} 
          imgSrc={man} 
        />
        <Team
          title="Javed Mukta"
          mentor='Mentor'
          designer='Designer' 
          progress={30} 
          imgSrc={man}
        />
      </div>
      <BlogText/>
      <div className='blog-div'>
      <Blog

      img={blog}
      para1='Oct 19,2022'
      para2='Mesbaah'
      heading='Inspire meets brands with digital technology'
      />
        <Blog
      img={blog}
      para1='Oct 19,2022'
      para2='Mesbaah'
      heading='Inspire meets brands with digital technology'
      />
        <Blog
      img={blog}
      para1='Oct 19,2022'
      para2='Mesbaah'
      heading='Inspire meets brands with digital technology'
      /></div>
      <Footer/>
      </div>
  )
}

export default Home;