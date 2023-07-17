import httpService from "./httpService";
import config from "../config.json";

const login = async (username, password) => {
  const response = await httpService.post(config.apiEndpoint + "login", {
    username,
    password,
  });
  // Handle the API response
  if (response.status === 200) {
    const { access_token } = response.data; // Extract the access_token from the response

    // Store the access_token in the browser's local storage
    localStorage.setItem("access_token", access_token);

    return response.data; // Return any relevant data from the response
  }
};

export { login };
