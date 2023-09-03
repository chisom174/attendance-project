import React, { useState } from 'react';
import useUserFunctions from './userFunctions';

const ManagerLogin: React.FC = () => {
  const { loginUser } = useUserFunctions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const expectedPassword = 'check123';
  
  const handleLogin = () => {
    // Call the loginUser function with email and password
    const successfulLogin = loginUser(email, password);
    
    if (successfulLogin && password === expectedPassword) {
      setLoggedIn(true);
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    // Implement manager logout functionality if needed
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in as a manager.</p>
          <button onClick={handleLogout}>Logout</button>
          <button>Read</button> {/* Display the "Read" button */}
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ManagerLogin;