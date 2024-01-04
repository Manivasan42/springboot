import React from 'react';

function RegisterPage() {
  const handleRegister = (e) => {
    e.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const status = 'online'; // Assuming the status is online upon registration

    // Create an object with user information
    const user = {
      username: username,
      email: email,
      password: password,
      status: status,
    };

    fetch('http://localhost:8080/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        
        // Assuming the server responds with user data
        localStorage.setItem('connectedUser', JSON.stringify(data));
        // Redirect to the user page
        window.location.href = '/user';
      })
      .catch((error) => {
        console.error('POST request error:', error);
      });
  };

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
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
