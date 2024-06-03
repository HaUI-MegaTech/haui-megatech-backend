import axios from "axios";

import BASE_URL from "./Const";

const accessToken = localStorage.getItem("accessToken");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchTotalBrandRevenue = () =>
    axios.get(BASE_URL + "/api/v1/brands/total-revenue", { headers });

const fetchTotalSoldByBrand = () =>
    axios.get(BASE_URL + "/api/v1/brands/total-sold", { headers });

const fetchTotalViewByBrand = () =>
    axios.get(BASE_URL + "/api/v1/brands/total-view", { headers });

export { fetchTotalBrandRevenue, fetchTotalSoldByBrand, fetchTotalViewByBrand };