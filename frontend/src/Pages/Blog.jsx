import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog-posts">
          <article className="post">
            <img
              src="https://www.phidirect.com/hubfs/PHI-Blog%20Images/PHI-Blog-Compressed/PHI-Blog-What%20If%20I%20Dont%20Insure%20My%20Pet-Featured.jpg"
              alt="Blog Post Image"
              className="post-image"
            />
            <h2 className="post-title"><b>How to Keep Your Pet Healthy All Year Round</b></h2>
            <p className="post-meta">
              Posted on March 25, 2025 by <strong>Dr. Smith</strong>
            </p>
            <p className="post-summary">
              Learn how to take care of your pet’s health throughout the year with simple steps,
              routine checkups, and a healthy diet. This guide will give you all the tips you need!
            </p>
            <Link to="#readmore" className="read-more-btn">Read More</Link>
          </article>
          <article className="post">
            <img
              src="https://www.petprofessional.com.au/wp-content/uploads/2019/07/dog-grooming-academy-pet-carers.jpg"
              alt="Blog Post Image"
              className="post-image"
            />
            <h2 className="post-title"><b>Grooming Tips for Your Pet</b></h2>
            <p className="post-meta">
              Posted on March 20, 2025 by <strong>Sarah</strong>
            </p>
            <p className="post-summary">
              Grooming your pet is essential for their health and appearance. Discover simple yet
              effective grooming tips to ensure your pet always looks its best!
            </p>
            <Link to="#readmore" className="read-more-btn">Read More</Link>
          </article>
          <article className="post">
            <img
              src="https://www.petcarebytes.com/wp-content/uploads/2023/10/Understanding-Pet-Anxiety.png"
              alt="Blog Post Image"
              className="post-image"
            />
            <h2 className="post-title"><b>Dealing with Pet Anxiety</b></h2>
            <p className="post-meta">
              Posted on March 15, 2025 by <strong>Dr. Turner</strong>
            </p>
            <p className="post-summary">
              Pets can experience anxiety just like humans. This post discusses signs of anxiety in pets and provides
              solutions to help them feel more comfortable and secure.
            </p>
            <Link to="#readmore" className="read-more-btn">Read More</Link>
          </article>
        </div>
        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <ul className="recent-posts">
              <li>
                <Link to="#">How to Keep Your Pet Healthy All Year Round</Link>
              </li>
              <li>
                <Link to="#">Grooming Tips for Your Pet</Link>
              </li>
              <li>
                <Link to="#">Dealing with Pet Anxiety</Link>
              </li>
              <li>
                <Link to="#">Choosing the Right Pet Food</Link>
              </li>
              <li>
                <Link to="#">Understanding Your Pet's Behavior</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Reviews</h3>
            <ul className="reviews unstyled">
              <li className="review-item">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John D." className="review-avatar" />
                <div className="review-content">
                  <strong>John D.</strong>
                  <p>"Great tips! Helped my dog stay healthy."</p>
                </div>
              </li>
              <li className="review-item">
                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Emily R." className="review-avatar" />
                <div className="review-content">
                  <strong>Emily R.</strong>
                  <p>"Loved the grooming advice! Very helpful."</p>
                </div>
              </li>
              <li className="review-item">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Mike S." className="review-avatar" />
                <div className="review-content">
                  <strong>Mike S.</strong>
                  <p>"The pet anxiety guide was a lifesaver!"</p>
                </div>
              </li>
              <li className="review-item">
                <img src="https://damanhairstyles.com/wp-content/uploads/2021/12/simple-short-mens-professional.jpeg" alt="John D." className="review-avatar" />
                <div className="review-content">
                  <strong>John D.</strong>
                  <p>"Great tips! Helped my dog stay healthy."</p>
                </div>
              </li>
              <li className="review-item">
                <img src="https://tse4.mm.bing.net/th?id=OIP.FPZyXSa90cCNZxVWgZ-niwHaHa&rs=1&pid=ImgDetMain" alt="John D." className="review-avatar" />
                <div className="review-content">
                  <strong>John D.</strong>
                  <p>"Great tips! Helped my dog stay healthy."</p>
                </div>
              </li>
              <li className="review-item">
                <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Sophia L." className="review-avatar" />
                <div className="review-content">
                  <strong>Sophia L.</strong>
                  <p>"So much useful information in one place."</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="social-icon">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;