import axios, { AxiosInstance } from "axios";
const BACK_PRODUCTION_URL = process.env.BACK_PRODUCTION_URL;

const AxiosInstance: AxiosInstance = axios.create({
  baseURL: BACK_PRODUCTION_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
