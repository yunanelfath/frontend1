import axios from "axios";

export function setupAxios() {
  axios.interceptors.request.use(
    config => {
      config.baseURL = 'http://192.168.99.100:5000';

      config.headers.common["Accept"] = "application/json";
      return config;
    },
    err => Promise.reject(err)
  );
}
