import React, { useState } from 'react';
import Demo from './Demo';
// import {Routes, Route, useNavigate} from 'react-router-dom';

function LoginPage() { 
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const Demo = () => {
  //   // 👇️ navigate to /
  //   navigate('/demo');
  // };



  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    fetch('http://localhost:8080/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          alert('Login and/or password is incorrect');
        }
        return response.json();
      })
      .then((response) => {
        alert("login successfully");
        localStorage.setItem('connectedUser', JSON.stringify(response));
        window.location.href = '/user';
      })
      .catch((error) => {
        console.error('POST request error', error);
      });
  }

  return (
    <div className="container">
      <div className="social-icons">
        <h2>Join Us</h2>
        <a href="#" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
        {/* <p>Don't have an account?</p> */}
        {/* <div>
        <div>
        <button onClick={Demo}>Register</button>
        </div>
        </div> */}
        <p>
          Don't have an account? <a href='/register'>Register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
