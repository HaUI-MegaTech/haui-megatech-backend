import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("accessToken");

// console.log(accessToken);

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchLoginStatistics = () => {
    return axios.get(BASE_URL + "/api/v1/login-statistics/daily", {
        headers,
    });
};

export { fetchLoginStatistics };
