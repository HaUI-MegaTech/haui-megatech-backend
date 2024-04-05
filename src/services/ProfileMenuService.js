const BASE_URL = "/user";

const profileMenus = [
    {
        id: 1,
        icon: "bi bi-person-lines-fill",
        title: "Thông tin chi tiết",
        url: BASE_URL + "/detail",
    },
    {
        id: 2,
        icon: "bi bi-pencil-square",
        title: "Cập nhật thông tin",
        url: BASE_URL + "/update",
    },
    {
        id: 3,
        icon: "bi bi-person-gear",
        title: "Thiết lập tài khoản",
        url: BASE_URL + "/settings",
    },
    {
        id: 4,
        icon: "bi bi-key",
        title: "Thay đổi mật khẩu",
        url: BASE_URL + "/change-password",
    },
    {
        id: 5,
        icon: "bi bi-patch-question",
        title: "Câu hỏi thường gặp",
        url: "/faq",
    },
    {
        id: 6,
        icon: "bi bi-box-arrow-right",
        title: "Đăng xuất",
        url: "/logout",
    },
];

const fetchAllProfileMenus = () => {
    return profileMenus;
};

export { fetchAllProfileMenus };
