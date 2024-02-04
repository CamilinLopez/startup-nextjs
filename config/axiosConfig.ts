import axios, { AxiosInstance } from "axios";
const BACK_PRODUCTION_URL = process.env.BACK_PRODUCTION_URL;

const AxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://protolylab.onrender.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
