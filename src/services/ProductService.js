import axios from "axios";

const fetchAllProducts = pageIndex => {
    return axios.get(
        `http://localhost:8080/api/v1/products?pageIndex=${pageIndex}`,
    );
};

const addNewProduct = (name, price) => {
    return axios.post;
};

export { fetchAllProducts };
