import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/authSlice";

const TopBar = () => {
  const loggedIn = useSelector((x) => x.auth.value) ? true : false;
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Perform the logout action
    // For example, clear the access token from local storage and update the login status
    localStorage.removeItem("access_token");
    // setLoggedIn(false);
    dispatch(authActions.logout());
    window.location = "/";
  };

  return (
    <div className="top-bar">
      <div className="logo">Logo</div>
      <div className="pricing">Pricing</div>
      {loggedIn ? (
        <>
          <Link to="/upload" className="upload">
            Upload
          </Link>
          <div className="profile-dropdown">
            <button className="profile-button">Profile</button>
            <div className="dropdown-content">
              {/* eslint-disable-next-line */}
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/auth/login" className="login">
            Login
          </Link>
          <Link to="/auth/signup" className="signup">
            Signup
          </Link>
        </>
      )}
    </div>
  );
};

export default TopBar;
