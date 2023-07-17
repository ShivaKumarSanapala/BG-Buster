import React, { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        const response = await login(username, password);

        // Update the login status
        dispatch(authActions.login(response));

        // Redirect to the upload page with the access token as a URL parameter
        navigate(`/upload?token=${response.access_token}`);
        console.log("loginPage");
      } catch (error) {
        // Handle the login failure
        console.error("Login failed:", error.message);
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
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Login</button>

      <Link to="/signup" className="signup">
        Signup
      </Link>
    </form>
  );
};

export default LoginForm;
