import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './inicio';
import Login from './login'; 

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={loggedIn ? (
              <Inicio username={username} onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

