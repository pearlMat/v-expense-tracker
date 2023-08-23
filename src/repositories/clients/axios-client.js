import axios from "axios";

const baseDomain = import.meta.env.VITE_API_URL;

export const baseURL = `${baseDomain}/api/v1`; // Incase of /api/v1;

 //export default axios.defaults.baseURL = `${baseDomain}/api/v1`;

// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
 baseURL,
  /*headers: {
    // "Authorization": "Bearer xxxxx"
  }*/
});