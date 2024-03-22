import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({onLogin}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
const history = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {  
        email: formData.email,
        password: formData.password,
    
      };
    try {
      // Call your API to authenticate the user
      const response = await fetch('https://backend-maxlance.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.error === 'Invalid email or password') {
       return setMessage('Invalid email or password');
      }
      if(data.error === 'Email not verified'){
        return setMessage('Email not verified ,Please verify your email before logging in pz check you email');
      }
      localStorage.setItem('token', data.accessToken);
      onLogin()
      history('/')
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error, display error message to the user
    }
  };

  return (
    <div className="wrapper">
      <section className="form login">
        <header>Login to webapp</header>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="error-text"></div>
          <div className="field input">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          </div>
          <div className="field input">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required />
            <i className="fas fa-eye"></i>
          </div>
          <div className="field button">
            <input type="submit" name="submit" value="Continue to Login" />
          </div>
          {message && <div className="message">{message}</div>}
        </form>
        <div className="link">Not yet signed up? <a href="https://soumenmernapp.netlify.app/register">Signup now</a></div>
      </section>
    </div>
  );
};

export default LoginForm;
