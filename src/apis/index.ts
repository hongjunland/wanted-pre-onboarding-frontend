import axios, { AxiosInstance } from "axios";
import { getAccessToken } from "../utils/authUtils";

// const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";
const BASE_URL = "http://localhost:8000/";

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const instanceWithAuth: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export { instance, instanceWithAuth };
