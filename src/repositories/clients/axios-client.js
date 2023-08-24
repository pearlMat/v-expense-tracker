import axios from "axios";

const baseDomain = import.meta.env.VITE_API_URL;

export const baseURL = `${baseDomain}/api/v1`; // Incase of /api/v1;


export default axios.create({
 baseURL,
  /*headers: {
    // "Authorization": "Bearer xxxxx"
  }*/
});