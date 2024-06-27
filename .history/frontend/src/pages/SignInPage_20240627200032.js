import React, { useState } from 'react';
import axios from 'axios';
import './SignInPage.css';
import logo from '../assets/netflix_logo.png';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      setMessage('Sign-in successful');
      console.log('User:', res.data.user);
      console.log('Token:', res.data.token);
    } catch (err) {
      setMessage(err.response.data.msg); // Display error message from server
      console.error(err.response.data);
    }
  };

  return (
    <div className="signin-page">
      <header className="signin-header">
        <img src={logo} alt="Netflix Logo" className="logo" />
      </header>
      <div className="signin-content">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="signin-button" type="submit">Sign In</button>
          <div className="divider">OR</div>
          <button className="signin-code-button">Use a sign-in code</button>
          <div className="forgot-password">Forgot password?</div>
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="signup-now">
            New to Netflix? <a href="/signup">Sign up now.</a>
          </div>
          <div className="recaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/learn-more">Learn more.</a>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
