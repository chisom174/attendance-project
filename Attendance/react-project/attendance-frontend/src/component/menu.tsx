// Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/user-card">User Card</Link></li>
        <li><Link to="/login">Login/Logout</Link></li>
        <li><Link to="/manager-login">Manager Login</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
