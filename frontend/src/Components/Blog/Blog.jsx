import React from 'react'
import './Blog.css'
const Blog = ({img,para1,para2,heading}) => {
  return (<>
  
    <div className="blog-comp">
        <img src={img} alt="" />
        <div className="paragraph">
        <p>{para1}</p>
        <p>{para2}</p></div>
        <h1>{heading}
        </h1>
        <button>Read More</button>

        </div></>
  )
}

export default Blog;