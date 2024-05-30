import axios from "axios";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWV0aG9hbmciLCJpYXQiOjE3MTI5Njk3MjEsImV4cCI6MTcxMjk3MTE2MX0.t0YdeM94yRcbcwTba4SQNCGGSEtPXgLigrIYdWiciVY";

const fetchAllProducts = pageIndex => {
    return axios.get(
        `http://localhost:8080/api/v1/products/active?pageIndex=${pageIndex}`,
    );
};

const addNewProduct = (name, price) => {
    return axios.post;
};

export { fetchAllProducts };
