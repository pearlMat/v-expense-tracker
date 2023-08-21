import Client from "./clients/axios-client";

const resource = "/auth";

export default {
    register(payload) {
        return Client.post(`${resource}/email/register`, payload);
    },
}