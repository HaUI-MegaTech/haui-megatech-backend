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

const getActiveBrands = data =>
    axios.get(
        `${BASE_URL}/api/v1/brands/active?index=${data.index}&limit=${
            data.limit
        }&direction=${data.direction}&fields=${data.field}${
            data.keyword ? "&keyword=" + data.keyword : ""
        }`,
        {
            headers,
        },
    );

export {
    fetchTotalBrandRevenue,
    fetchTotalSoldByBrand,
    fetchTotalViewByBrand,
    getActiveBrands,
};
