import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("token");

const lang = "en";

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const authenticate = payload =>
    axios.post(BASE_URL + "/api/v1/auth/authenticate", payload, { headers });

export { authenticate };
