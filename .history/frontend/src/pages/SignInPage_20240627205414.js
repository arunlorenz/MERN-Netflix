import React, { useState } from 'react';
import './SignInPage.css';
import axios from 'axios';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ email, password });

      const res = await axios.post('http://localhost:5000/api/auth/signin', body, config);
      console.log(res.data); // Handle response data, like saving the token in localStorage

      // Handle further actions like redirecting to another page or updating state

    } catch (err) {
      console.error(err.response.data);
      // Handle error scenarios, such as displaying an error message to the user
      // alert('Sign-in failed. Please try again.');
    }
  };

  return (
    <div className="signin-page">
      <form className="signin-form" onSubmit={onSubmit}>
        <h1>Sign In</h1>
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
        <button className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
