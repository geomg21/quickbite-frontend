import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* Left section: Logo and Description */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="QuickBite Logo" className="footer-logo" />
          <p>
            QuickBite is your go-to food delivery service offering fresh, delicious meals delivered straight to your doorstep. We focus on quality, convenience, and customer satisfaction to ensure a smooth and reliable experience.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com/quickbite" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/quickbite" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com/company/quickbite" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center section: Company links */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Right section: Contact details */}
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>Phone: <a href="tel:+12124567890">+1-212-456-7890</a></li>
            <li>Email: <a href="mailto:contact@quickbite.com">contact@quickbite.com</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr />
      
      {/* Copyright Section */}
      <p className="footer-copyright">
        Copyright 2024 © QuickBite - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

