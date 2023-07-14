import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Track the login status

  const handleLogout = () => {
    // Perform the logout action
    // For example, clear the access token from local storage and update the login status
    localStorage.removeItem('access_token');
    setLoggedIn(false);
  };

  return (
    <div className="top-bar">
      <div className="logo">Logo</div>
      <div className="pricing">Pricing</div>
      {loggedIn ? (
        <div className="profile-dropdown">
          <button className="profile-button">Profile</button>
          <div className="dropdown-content">
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        <>
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/signup" className="signup">
            Signup
          </Link>
        </>
      )}
    </div>
  );
};

export default TopBar;
