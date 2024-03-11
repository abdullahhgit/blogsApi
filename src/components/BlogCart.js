import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementViews } from '../ViewsSlice';

const BlogCart = ({ visibleBlogs }) => {
  const [blogs, setBlogs] = useState([]);

  // Initialize local state for views
  const [views, setViews] = useState({});

  useEffect(() => {
    fetch('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        // Initialize views state with default values (0 for each blog)
        const initialViews = {};
        data.forEach(blog => {
          initialViews[blog.id] = 0;
        });
        setViews(initialViews);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  // Function to handle click on a blog post
  const handleBlogClick = (id) => {
    // Increment views for the clicked blog post
    setViews(prevViews => ({
      ...prevViews,
      [id]: prevViews[id] + 1
    }));
  };

  return (
    blogs.slice(0, visibleBlogs).map(blog => (
      <Link to={blog.id} key={blog.id} className='blogCart' style={{ textDecoration: 'none' }} onClick={() => handleBlogClick(blog.id)}>
        <div className='blogImage'>
          <img src={blog.Image} alt="Blog" />
        </div>
        <div className='uploadedDetails'>
          <div className='date'>Posted on October 6th 2021</div>
          <div className='counter'>
            <i className="fa-light fa-eye"></i>
            {/* Display views from local state */}
            <span>{views[blog.id]} views</span>
          </div>
        </div>
        <h2 className='blogTitle'>{blog.Title}</h2>
        <p className='blogSubTitle'>{blog.Subtitle}</p>
      </Link>
    ))
  );
}

export default BlogCart;
