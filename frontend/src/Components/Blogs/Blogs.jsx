import React from 'react'
import Navbar from '../Navbar/Navbar';
import BlogsImg from '../BlogsImg/BlogsImg';
import Blog from '../Blog/Blog';
import blog from "../../assets/blog.png";
import Footer from '../Footer/Footer';

const Blogs = () => {
  return (
    <div>
      <Navbar/>
      <BlogsImg/>
      <div className='blog-div blogss'>
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

export default Blogs