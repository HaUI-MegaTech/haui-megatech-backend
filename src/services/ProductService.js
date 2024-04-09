import axios from "axios";

const fetchAllProducts = () => {
    return axios.get("http://localhost:8080/api/v1/products");
};

export { fetchAllProducts };
