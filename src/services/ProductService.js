import axios from "axios";

import BASE_URL from "./Const";

const accessToken = localStorage.getItem("accessToken");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const getActiveProducts = data => {
    return axios.get(
        `${BASE_URL}/api/v1/products/active?index=${data.index}&direction=${
            data.direction
        }&limit=${data.limit}&fields=${data.field}${
            data.keyword ? "&keyword=" + data.keyword : ""
        }`,
        {
            headers,
        },
    );
};

const getProductDetail = id =>
    axios.get(`${BASE_URL}/api/v1/products/${id}`, { headers });

const updateProduct = data =>
    axios.put(`${BASE_URL}/api/v1/products/update/${data.id}`, data, {
        headers,
    });

const addNewProduct = (name, price) => {
    return axios.post;
};

export { getActiveProducts, getProductDetail, updateProduct };
