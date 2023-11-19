import axios from "axios";
import storage from "../storage/storage";

axios.defaults.baseURL = "http://127.0.0.1:8000";

axios.interceptors.request.use((config) => {
  const token = storage.get("authUser");
  config.withCredentials = true;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use((config) => {
  const token = storage.get("authUser");
  config.withCredentials = true;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axios;
