import httpService from "./httpService";
import config from "../config.json";

const accessToken = localStorage.getItem("access_token");

export function upload(formData) {
  return httpService.post(config.apiEndpoint + "upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function getProcessedImage(filename) {
  return config.apiEndpoint + `processed-images/${filename}`;
}
