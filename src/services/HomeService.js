import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("accessToken");

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

const fetchBrandStatistics = () => {
    return axios.get(BASE_URL + "/api/v1/brands/statistics", { headers });
};

const fetchRecentActivities = () => {
    return axios.get(
        BASE_URL + "/api/v1/activity-logs",
        { headers },
        { index: 0, limit: 6 },
    );
};

const fetchTopSoldProducts = () => {
    return axios.get(BASE_URL + "/api/v1/products/top-sold", { headers });
};

const fetchTotalSoldProducts = () => {
    return axios.get(BASE_URL + "/api/v1/products/total-sold", { headers });
};

export {
    fetchLoginStatistics,
    fetchBrandStatistics,
    fetchRecentActivities,
    fetchTopSoldProducts,
    fetchTotalSoldProducts,
};
