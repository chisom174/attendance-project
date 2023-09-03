import React, { useState } from 'react';

const UserCard: React.FC = () => {
  const [cardId, setCardId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardScan = () => {
    // Simulate card reading and validation
    if (cardId === 'valid-card-id') {
      setLoggedIn(true);
      setErrorMessage('');
    } else {
      setLoggedIn(false);
      setErrorMessage('Invalid card.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCardId('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in using your card.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Card ID"
            value={cardId}
            onChange={(e) => setCardId(e.target.value)}
          />
          <button onClick={handleCardScan}>Scan Card</button>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
