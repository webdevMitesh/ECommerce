import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  let navigate = useNavigate();

  let shopNowClick = () => {
    navigate('/prolist');
  };

  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our e-commerce platform! We are dedicated to providing the best products and services to our customers. Our mission is to deliver high-quality products with an exceptional shopping experience, making your life easier and more enjoyable.
        </p>
        <p>
          We handpick products from trusted suppliers and provide detailed product information so that you can make informed decisions. Whether you're looking for the latest tech gadgets, home essentials, or fashion items, we've got you covered!
        </p>
        <div className="about-button-container">
          <button className="cta-button" onClick={shopNowClick}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
