import axios from "axios";
import store from "@/store";
import auth from "@/store/auth.module";


const baseDomain = import.meta.env.VITE_API_URL;
const baseURL = `${baseDomain}/api/v1`; // Incase of /api/v1;


const api = axios.create({
  baseURL,
});

api.interceptors.request.use((request) => {
  //add authorization header with jwt token to each request
  let user = auth.state.user;
  console.log(user?.token)
  if (user && user.token) {
      request.headers['Authorization'] = `Bearer ${user.token}`
  }
  //updateLoaderTo(true);
  return request;
});

export default api;
