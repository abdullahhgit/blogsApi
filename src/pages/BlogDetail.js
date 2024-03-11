import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementViews } from '../ViewsSlice';
import './blogDetails.css';
// import BlogDetailImage from '../assets/images/blog-detail-image.png';

const BlogDetail = () => {
  const { id } = useParams(); // Get the id from the route params
  const [blogDetail, setBlogDetail] = useState(null); // State to store the blog details
  const dispatch = useDispatch();
  const views = useSelector(state => state.views[id] || 0);

  useEffect(() => {
    dispatch(incrementViews({ blogId: id }));
  }, [dispatch, id]);

  useEffect(() => {
    fetch(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`)
      .then(response => response.json())
      .then(data => setBlogDetail(data))
      .catch(error => console.error('Error fetching blog details:', error));
  }, [id]); // Fetch blog details whenever the id changes

  if (!blogDetail) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  return (
    <div className='blogDetails'>
      <div className='blogContainer'>
        <div className='uploadedDetails'>
          <div className='date'>Posted on October 6th 2021</div>
          <div className='counter'>
            <i className="fa-light fa-eye"></i>
            <span>{views} views</span>
          </div>
        </div>
        <h2 className='blogTitle'>{blogDetail.Title}</h2>
        <div className='blogDetailImage'>
          <img src={blogDetail.Image} alt="Blog" />
        </div>
        <h5 className='blogSubtitle'>{blogDetail.Subtitle}</h5>
        <p className='blogContent'>{blogDetail.Article}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
