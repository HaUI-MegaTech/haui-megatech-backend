import axios from "axios";
import BASE_URL from "./Const";

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
