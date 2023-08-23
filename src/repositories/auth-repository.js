import Client from "./clients/axios-client";
//import { baseURL } from "./clients/axios-client";
import axios from "axios";

const baseURL ="http://localhost:3000/api/v1"
const resource = '/auth';

export default {
    register(payload) {
        console.log(payload)
        return Client.post(`${resource}/email/register`, payload);
    },
}