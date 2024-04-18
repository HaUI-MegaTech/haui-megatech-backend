import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWV0aG9hbmd2aXBwcm9tYXgiLCJpYXQiOjE3MTM0MjE3NjUsImV4cCI6MTcxMzUwODE2NX0.FG0emlA7lsGELD-eH6srfDXZVJz7mnELmZX1GAlIdBE";

const lang = "en";

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchAllActiveUsers = pageIndex => {
    return axios.get(
        `${BASE_URL}/api/v1/users/active?pageIndex=${pageIndex}&pageSize=10`,
        { headers },
    );
};

const fetchAllDeletedUsers = pageIndex =>
    axios.get(
        `${BASE_URL}/api/v1/users/deleted?pageIndex=${pageIndex}&pageSize=10`,
        { headers },
    );

const addNewUser = (
    username,
    firstName,
    lastName,
    password,
    confirmPassword,
) => {
    return axios.post(
        BASE_URL + "/api/v1/users",
        {
            username,
            firstName,
            lastName,
            password,
            confirmPassword,
        },
        { headers },
    );
};

const temporarilyDeleteUser = user =>
    axios.patch(
        BASE_URL + "/api/v1/users/temporarily-delete/" + user.id,
        {},
        {
            headers,
        },
    );

const updateUserInfo = (user, firstName, lastName, email, phoneNumber) =>
    axios.put(
        BASE_URL + `/api/v1/users/${user.id}`,
        {
            firstName,
            lastName,
            email,
            phoneNumber,
        },
        { headers },
    );

const restoreUser = user =>
    axios.patch(BASE_URL + `/api/v1/users/restore/${user.id}`, {}, { headers });

export {
    fetchAllActiveUsers,
    fetchAllDeletedUsers,
    temporarilyDeleteUser,
    updateUserInfo,
    addNewUser,
    restoreUser,
};
