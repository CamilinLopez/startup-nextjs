import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const axiosHttpAdapter = require('axios-http-client');


const AxiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
