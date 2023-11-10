import React, { useState } from 'react';
import './LoginForm.css';
import diaryLogo from './diary.png';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('Libro@gmail.com');
  const [password, setPassword] = useState('1234');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="login-container">
      <h2>Bienvenido a My Diary</h2>
      <img src={diaryLogo} alt="My Diary Logo" className="logo-image" />
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
