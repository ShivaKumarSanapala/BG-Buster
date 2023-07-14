// auth.js

import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/login', {
      username,
      password,
    });

    // Handle the API response
    if (response.status === 200) {
      const { access_token } = response.data; // Extract the access_token from the response

      // Store the access_token in the browser's local storage
      localStorage.setItem('access_token', access_token);

      return response.data; // Return any relevant data from the response
    } else {
      // Login failed
      throw new Error('Login failed');
    }
  } catch (error) {
    // Handle any errors that occurred during the API request
    console.error('Login error:', error);

    // Display an error message to the user
    alert('Login failed. Please check your credentials and try again.');

    throw error;
  }
};

export { login };
