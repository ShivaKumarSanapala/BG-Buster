import React, { useState } from 'react';
import validator from 'validator';
import { login } from '../../services/auth';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the errors
    setErrors({});

    // Perform input validation
    let validationErrors = {};

    // ... input validation code ...

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // Call the login API
        console.log('Logging in...');
        // log username
        console.log(username);
        const response = await login(username, password);

        // Handle the login success
        console.log('Login successful:', response);

        // Update the login status
        setLoggedIn(true);

        // Redirect to the upload page with the access token as a URL parameter
        navigate(`/upload?token=${response.access_token}`);
      } catch (error) {
        // Handle the login failure
        console.error('Login failed:', error);
        // TODO: Display an error message to the user
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      {errors.username && <p>{errors.username}</p>}
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Login</button>

      {loggedIn ? null : (
        <>
          <Link to="/signup" className="signup">
            Signup
          </Link>
        </>
      )}
    </form>
  );
};

export default LoginForm;
