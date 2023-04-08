import axios, { AxiosInstance } from "axios";

// const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";
const BASE_URL = "http://localhost:8000/";

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;