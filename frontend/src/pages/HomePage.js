// src/HomePage.jsx
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__background">
        <div className="homepage__overlay">
          <img
            className="homepage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
          <Link to="/signin">
          <button className="signin_button">Sign In</button>
        </Link>
          <div className="homepage__content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className="homepage__input">
            <Link to="/signup">
              <button>Let's Get Started</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
