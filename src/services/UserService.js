import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWV0aG9hbmd2aXBwcm9tYXgiLCJpYXQiOjE3MTM0NDU1MzEsImV4cCI6MTcxMzUzMTkzMX0.qmrjhWDsN7iEg9dQPEMR77NjlCsBtYVfKBb04K8vmzU";

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

const permanentlyDeleteUser = user =>
    axios.delete(BASE_URL + `/api/v1/users/permanently-delete/${user.id}`, {
        headers,
    });

const changeUserPassword = (
    user,
    oldPassword,
    newPassword,
    confirmNewPassword,
) =>
    axios.patch(
        BASE_URL + `/api/v1/users/change-password/${user.id}`,
        { oldPassword, newPassword, confirmNewPassword },
        { headers },
    );

export {
    fetchAllActiveUsers,
    fetchAllDeletedUsers,
    temporarilyDeleteUser,
    updateUserInfo,
    addNewUser,
    restoreUser,
    permanentlyDeleteUser,
    changeUserPassword,
};
