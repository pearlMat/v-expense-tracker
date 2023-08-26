import api from "./clients/axios-client";

const resource = '/auth';


export default {
    register(payload) {
        console.log(payload)
        return api.post(`${resource}/email/register`, payload);
    },

    login(payload) {
        
        return api.post(`${resource}/email/login`, payload);
    },
}