import axios from "axios";

const accessToken = localStorage.getItem("token");

const fetchAllProducts = pageIndex => {
    return axios.get(
        `http://localhost:8080/api/v1/products/active?index=${pageIndex}`,
    );
};

const addNewProduct = (name, price) => {
    return axios.post;
};

export { fetchAllProducts };
