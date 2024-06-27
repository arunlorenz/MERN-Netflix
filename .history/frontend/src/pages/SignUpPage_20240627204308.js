import React, { useState } from 'react';
import './SignUpPage.css';
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { email, password, confirmPassword } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ email, password }); // Ensure password is plain text

      const res = await axios.post('http://localhost:5000/api/auth/signup', body, config);
      console.log(res.data); // Handle response data, like saving the token in localStorage

      // Handle further actions like showing a success message or updating state

    } catch (err) {
      console.error(err.response.data);
      // Handle error scenarios, such as displaying an error message to the user
      // alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
