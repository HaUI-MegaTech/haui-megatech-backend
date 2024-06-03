import axios from "axios";

import BASE_URL from "./Const";

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
        BASE_URL +
            "/api/v1/activity-logs?index=0&limit=10&direction=desc&fields=id",
        { headers },
        {},
    );
};

const fetchTopSoldProducts = () => {
    return axios.get(BASE_URL + "/api/v1/products/top-sold", { headers });
};

const fetchTotalSoldProducts = () => {
    return axios.get(BASE_URL + "/api/v1/products/total-sold", { headers });
};

const fetchTotalProductRevenue = () => {
    return axios.get(BASE_URL + "/api/v1/products/total-revenue", { headers });
};

const fetchTotalCustomers = () => {
    return axios.get(BASE_URL + "/api/v1/users/total-customers", { headers });
};

const fetchTotalLoggedIn = () => {
    return axios.get(BASE_URL + "/api/v1/login-statistics/total", { headers });
};

const fetchLatestOrders = () => {
    return axios.get(BASE_URL + "/api/v1/orders/latest", { headers });
};

export {
    fetchLoginStatistics,
    fetchBrandStatistics,
    fetchRecentActivities,
    fetchTopSoldProducts,
    fetchTotalSoldProducts,
    fetchTotalProductRevenue,
    fetchTotalCustomers,
    fetchTotalLoggedIn,
    fetchLatestOrders,
};
