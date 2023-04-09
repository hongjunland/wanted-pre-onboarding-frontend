import axios from "axios";
import { getAccessToken } from "../utils/authUtils";

// const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";
const BASE_URL = "http://localhost:8000/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default instance;
