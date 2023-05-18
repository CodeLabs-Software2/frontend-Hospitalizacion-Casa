import axios from "axios";
import { useGlobalState } from "../store/GlobalState";

const backend = axios.create({
  //baseURL: "http://localhost:8000",
  baseURL: "http://170.0.0.1:8000",
  withCredentials: true,
});

backend.interceptors.request.use((config) => {
  const token = useGlobalState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default backend;
