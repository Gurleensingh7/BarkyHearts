import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

export default function Footer(){
    return(
        <>
       <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h3>Barky Hearts</h3>
      <p>Your pet’s health and happiness are our top priority.</p>
    </div>
    <div className="footer-nav">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>Email: <a href="mailto:info@petcare.com">info@BarkyHearts.com</a></p>
      <p>Phone: (123) 456-7890</p>
      <p>Location: 123 Pet Street, Animal City</p>
    </div>
    <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="social-icon" target="_blank">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com" className="social-icon" target="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://twitter.com" className="social-icon" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.linkedin.com" className="social-icon" target="_blank">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}




