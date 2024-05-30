import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("accessToken");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

function authenticate(payload) {
    return axios.post(BASE_URL + "/api/v1/auth/authenticate", payload, {
        headers,
    });
}

export { authenticate };
