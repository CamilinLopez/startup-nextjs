import axios, { AxiosInstance } from "axios";
const BACK_URL = process.env.BACK_PRODUCTION_URL;

const AxiosInstance: AxiosInstance = axios.create({
  baseURL: BACK_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
