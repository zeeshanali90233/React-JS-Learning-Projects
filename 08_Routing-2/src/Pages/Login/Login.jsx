import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    alert('Login successful!');
    navigate('/dashboard')
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;