import axios from "axios";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJob2FuZyIsImlhdCI6MTcxMjkyNTA5MiwiZXhwIjoxNzEyOTI2NTMyfQ.7LF_f3NiPFRgt-jqLtiR2Fav0f2FufUusLQx9xTXXUU";

const fetchAllProducts = pageIndex => {
    return axios.get(
        `http://localhost:8080/api/v1/products?pageIndex=${pageIndex}`,
        {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        },
    );
};

const addNewProduct = (name, price) => {
    return axios.post;
};

export { fetchAllProducts };
