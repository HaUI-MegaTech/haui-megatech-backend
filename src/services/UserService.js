import axios from "axios";

import BASE_URL from "./Const";

const accessToken = localStorage.getItem("accessToken");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchAllActiveUsers = data => {
    return axios.get(
        `${BASE_URL}/api/v1/users/active?index=${data.index}&limit=${
            data.limit
        }&direction=${data.direction}&fields=${data.field}${
            data.keyword ? "&keyword=" + data.keyword : ""
        }`,
        { headers },
    );
};

const fetchAllDeletedUsers = data =>
    axios.get(
        `${BASE_URL}/api/v1/users/deleted?index=${data.index}&limit=${
            data.limit
        }&direction=${data.direction}&fields=${data.field}${
            data.keyword ? "&keyword=" + data.keyword : ""
        }`,
        {
            headers,
        },
    );

const addNewUser = payload => {
    return axios.post(BASE_URL + "/api/v1/users", payload, { headers });
};

const softDeleteUser = user =>
    axios.patch(
        BASE_URL + "/api/v1/users/soft-delete/" + user.id,
        {},
        {
            headers,
        },
    );

const updateUserInfo = data => {
    let formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("role", data.role);

    return axios.put(
        BASE_URL + `/api/v1/users/update-info/${data.id}`,
        formData,
        {
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "multipart/form-data",
            },
        },
    );
};

const updateMyInfo = data => {
    let formData = new FormData();
    data.firstName ?? formData.append("firstName", data.firstName);
    data.lastName ?? formData.append("lastName", data.lastName);
    data.email ?? formData.append("email", data.email);
    data.phoneNumber ?? formData.append("phoneNumber", data.phoneNumber);
    data.avatar != undefined ?? formData.append("avatar", data.avatar);

    return axios.put(BASE_URL + `/api/v1/users/update-info`, formData, {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "multipart/form-data",
        },
    });
};

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

const resetUserPassword = payload =>
    axios.patch(
        BASE_URL + `/api/v1/users/reset-password/${payload.id}`,
        {},
        { headers },
    );

const getMyInfo = () =>
    axios.get(BASE_URL + "/api/v1/users/my-info", { headers });

const getActivityLogs = data =>
    axios.get(
        `${BASE_URL}/api/v1/activity-logs?index=${data.index}&limit=${
            data.limit
        }&direction=${data.direction}&fields=${data.field}${
            data.keyword ? "&keyword=" + data.keyword : ""
        }`,
        { headers },
    );

const importUserExcel = data => {
    let formData = new FormData();

    formData.append("file", data.file);

    return axios.post(`${BASE_URL}/api/v1/users/import/excel`, formData, {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "multipart/form-data",
        },
    });
};

const softDeleteUserList = data => {
    console.log(typeof data);
    return axios.patch(
        `${BASE_URL}/api/v1/users/soft-delete/${data}`,
        {},
        {
            headers,
        },
    );
};

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
    resetUserPassword,
    getMyInfo,
    getActivityLogs,
    updateMyInfo,
    importUserExcel,
    softDeleteUserList,
};
