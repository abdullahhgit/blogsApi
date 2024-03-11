import React from 'react'
import { useState } from 'react';
import './blogs.css'
import BlogCart from '../components/BlogCart'

const Blogs = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(6); // State to track visible blogs
    
    const handleLoadMore = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 6); // Increase visible blogs by 12
    };
  return (
    <div className='blogs'>
        <div className='blogContainer'>
        <BlogCart visibleBlogs={visibleBlogs} />
        <button className='load' onClick={handleLoadMore}>Load More</button>
        </div>
    </div>
  )
}

export default Blogs
