// src/pages/WatchPage.js

import React from 'react';
import './WatchPage.css';
import logo from '../assets/netflix_logo.png'; // Correct path to the logo
import movie1 from '../assets/movie1.jpg'; // Example path to movie posters


const WatchPage = () => {
  return (
    <div className="watch-page">
      <header className="watch-header">
        <img src={logo} alt="Netflix Logo" className="logo" />
        <nav className="watch-nav">
          <a href="/">Home</a>
          <a href="/">TV Shows</a>
          <a href="/">Movies</a>
          <a href="/">New & Popular</a>
          <a href="/">My List</a>
        </nav>
        <div className="watch-actions">
          <button className="sign-in">Sign In</button>
        </div>
      </header>
      <div className="watch-content">
        <div className="featured">
          <h1 className="title">Civil War</h1>
          <div className="details">
            <span className="match">70.19% Match</span>
            <span className="date">2024-04-10</span>
          </div>
          <p className="description">
            In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.
          </p>
          <div className="actions">
            <button className="play-button">Play</button>
            <button className="info-button">More Info</button>
          </div>
        </div>
        <div className="row">
          <h2>Trending Now</h2>
          <div className="posters">
            <img src={movie1} alt="Movie 1" />
            <img src={movie1} alt="Movie 2" />
            <img src={movie1} alt="Movie 3" />
            <img src={movie1} alt="Movie 4" />
            <img src={movie1} alt="Movie 5" />
          </div>
        </div>
        <div className="row">
          <h2>Top Rated</h2>
          <div className="posters">
            <img src={movie1} alt="Movie 6" />
            <img src={movie1} alt="Movie 7" />
            <img src={movie1} alt="Movie 8" />
            <img src={movie1} alt="Movie 9" />
            <img src={movie1} alt="Movie 10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
