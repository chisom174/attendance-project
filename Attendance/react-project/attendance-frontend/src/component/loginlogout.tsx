/*import React, { useState, useEffect } from 'react';
import useUserFunctions from './userFunctions';

const LoginLogout: React.FC = () => {
  const { loginUser, logoutUser } = useUserFunctions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState<number | null>(null);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  const startInterval = () => {
    const interval = setInterval(() => {
      // Do something in the interval
    }, 1000);

    setIntervalId(interval); // No error now
  };

  useEffect(() => {
    if (loggedIn) {
      const interval = setInterval(() => {
        setTotalElapsedTime(prevElapsedTime =>
          prevElapsedTime + 1
        );
      }, 1000);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
      if (loginTime !== null) {
        const elapsedTimeInSeconds = Math.floor((Date.now() - loginTime) / 1000);
        setTotalElapsedTime(prevElapsedTime =>
          prevElapsedTime + elapsedTimeInSeconds
        );
      }
      setLoginTime(null);
    }
  }, [loggedIn, loginTime, intervalId]);

  const handleLogin = () => {
    const successfulLogin = loginUser(email, password);

    if (successfulLogin) {
      setLoggedIn(true);
      setLoginTime(Date.now());
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in.</p>
          <p>Time logged in: {totalElapsedTime} seconds</p>
          <button onClick={handleLogout}>Logout</button>
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

export default LoginLogout;*/

/*import React, { useState, useEffect } from 'react';
import useUserFunctions from './userFunctions';

const LoginLogout: React.FC = () => {
  const { loginUser, logoutUser } = useUserFunctions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState<number | null>(null);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  const startInterval = () => {
    const interval = setInterval(() => {
      // Do something in the interval
    }, 1000);

    setIntervalId(interval);
  };

  useEffect(() => {
    if (loggedIn) {
      startInterval(); // Start the interval when logged in
    } else {
      clearInterval(intervalId); // Clear the interval when logged out
      if (loginTime !== null) {
        const elapsedTimeInSeconds = Math.floor((Date.now() - loginTime) / 1000);
        setTotalElapsedTime(prevElapsedTime =>
          prevElapsedTime + elapsedTimeInSeconds
        );
      }
      setLoginTime(null);
    }
    
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts or when logged out
    };
  }, [loggedIn, loginTime, intervalId]);

  const handleLogin = () => {
    const successfulLogin = loginUser(email, password);

    if (successfulLogin) {
      setLoggedIn(true);
      setLoginTime(Date.now());
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in.</p>
          <p>Time logged in: {totalElapsedTime} seconds</p>
          <button onClick={handleLogout}>Logout</button>
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

export default LoginLogout;*/
import React, { useState, useEffect, useRef } from 'react';
import useUserFunctions from './userFunctions';

const LoginLogout: React.FC = () => {
  const { loginUser, logoutUser } = useUserFunctions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState<number | null>(null);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const intervalIdRef = useRef<NodeJS.Timer | null>(null); // useRef to store intervalId

  useEffect(() => {
    if (loggedIn) {
      intervalIdRef.current = setInterval(() => {
        setTotalElapsedTime(prevElapsedTime =>
          prevElapsedTime + 1
        );
      }, 1000);
    } else {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      if (loginTime !== null) {
        const elapsedTimeInSeconds = Math.floor((Date.now() - loginTime) / 1000);
        setTotalElapsedTime(prevElapsedTime =>
          prevElapsedTime + elapsedTimeInSeconds
        );
      }
      setLoginTime(null);
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [loggedIn, loginTime]);

  const handleLogin = () => {
    const successfulLogin = loginUser(email, password);

    if (successfulLogin) {
      setLoggedIn(true);
      setLoginTime(Date.now());
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in.</p>
          <p>Time logged in: {totalElapsedTime} seconds</p>
          <button onClick={handleLogout}>Logout</button>
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

export default LoginLogout;



