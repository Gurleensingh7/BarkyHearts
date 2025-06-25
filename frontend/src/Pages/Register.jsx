import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const userData = { email, password };

    try {
      const response = await fetch('https://barkyhearts-1.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/Login");
      } else {
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('Server error. Please try again later.');
    }
  };
  

  return (
    
    <div class="background-container" style={{ backgroundImage: "url('https://wallpapercave.com/wp/EtRor5S.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(90%)",
      width: "100%",
      height: "100vh", 
      marginTop:"-20px"}}> <br /><br />
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p className="login-footer">
          Already have an account? <a href="/login" className="link">Sign In</a>
        </p>
    </div>
    </div>
  );
};

export default Register;
