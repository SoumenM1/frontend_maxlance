import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    // Logic to handle successful login
    setIsAuthenticated(true); // Set isAuthenticated to true after successful login
  };

  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm onLogin={handleLogin}/>} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="https://soumenmernapp.netlify.app/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
  );
};

export default App;
