import axios from "axios";

const accessToken = localStorage.getItem("token");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchAllProducts = pageIndex => {
    return axios.get(
        `http://localhost:8080/api/v1/products/active?index=${pageIndex}`,
        { headers },
    );
};

const addNewProduct = (name, price) => {
    return axios.post;
};

export { fetchAllProducts };
