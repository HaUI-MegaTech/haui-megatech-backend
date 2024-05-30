import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("accessToken");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchAllActiveUsers = pageIndex => {
    return axios.get(
        `${BASE_URL}/api/v1/users/active?index=${pageIndex}&limit=10`,
        { headers },
    );
};

const fetchAllDeletedUsers = pageIndex =>
    axios.get(`${BASE_URL}/api/v1/users/deleted?index=${pageIndex}&limit=10`, {
        headers,
    });

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

const softDeleteUser = user =>
    axios.patch(
        BASE_URL + "/api/v1/users/soft-delete/" + user.id,
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

const hardDeleteUser = user =>
    axios.delete(BASE_URL + `/api/v1/users/hard-delete/${user.id}`, {
        headers,
    });

const changeUserPassword = (
    user,
    oldPassword,
    newPassword,
    confirmNewPassword,
) =>
    axios.patch(
        BASE_URL + `/api/v1/users/update-password/${user.id}`,
        { oldPassword, newPassword, confirmNewPassword },
        { headers },
    );

const getOneUser = id =>
    axios.get(BASE_URL + `/api/v1/users/${id}`, { headers });

export {
    fetchAllActiveUsers,
    fetchAllDeletedUsers,
    softDeleteUser,
    updateUserInfo,
    addNewUser,
    restoreUser,
    hardDeleteUser,
    changeUserPassword,
    getOneUser,
};
