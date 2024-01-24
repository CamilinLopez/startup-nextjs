import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const axiosHttpAdapter = require("axios-http-client");

// https://protolylab.onrender.com
// http://localhost:3001
const AxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://protolylab.onrender.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
