import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWV0aG9hbmciLCJpYXQiOjE3MTM5MzU2NTMsImV4cCI6MTcxNDAyMjA1M30.wpLFeR_4iqLo4u29ICTy3Amct79x52vx1Z-E9KBiI3g";

const lang = "vi";

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

export {
    fetchAllActiveUsers,
    fetchAllDeletedUsers,
    softDeleteUser,
    updateUserInfo,
    addNewUser,
    restoreUser,
    hardDeleteUser,
    changeUserPassword,
};
