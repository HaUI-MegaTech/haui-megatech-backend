import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWV0aG9hbmciLCJpYXQiOjE3MTI5Njk3MjEsImV4cCI6MTcxMjk3MTE2MX0.t0YdeM94yRcbcwTba4SQNCGGSEtPXgLigrIYdWiciVY";

const fetchAllActiveUsers = pageIndex => {
    return axios.get(
        `${BASE_URL}/api/v1/users/active?pageIndex=${pageIndex}&pageSize=10`,
    );
};

const fetchAllDeletedUsers = pageIndex =>
    axios.get(
        `${BASE_URL}/api/v1/users/deleted?pageIndex=${pageIndex}&pageSize=10`,
    );

const addNewUser = (
    username,
    firstName,
    lastName,
    password,
    confirmPassword,
) => {
    return axios.post(BASE_URL + "/api/v1/users", {
        username,
        firstName,
        lastName,
        password,
        confirmPassword,
    });
};

const temporarilyDeleteUser = user =>
    axios.patch(BASE_URL + "/api/v1/users/temporarily-delete/" + user.id);

export {
    fetchAllActiveUsers,
    fetchAllDeletedUsers,
    temporarilyDeleteUser,
    addNewUser,
};
