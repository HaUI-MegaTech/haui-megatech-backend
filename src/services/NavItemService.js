const BASE_HOMEPAGE_URL = "/home";
const BASE_USER_URL = "/users";
const BASE_PRODUCT_URL = "/products";
const BASE_BRAND_URL = "/brands";
const BASE_PROMOTION = "/promotions";
const BASE_FEEDBACK = "/feedbacks";
const BASE_INVOICE = "/invoices";
const BASE_PROFILE = "/profile";
const BASE_SYSTEM_URL = "/systems";

const navItems = [
    {
        id: 1,
        icon: "bi bi-house",
        title: "Trang chủ",
        url: BASE_HOMEPAGE_URL,
    },
    {
        id: 2,
        icon: "bi bi-people",
        title: "Quản lý người dùng",
        url: BASE_USER_URL,
        child: [
            {
                id: 21,
                title: "Danh sách",
                url: BASE_USER_URL + "/active",
            },
            {
                id: 22,
                title: "Thùng rác",
                url: BASE_USER_URL + "/deleted",
            },
            {
                id: 23,
                title: "Thống kê",
                url: BASE_USER_URL + "/statistic",
            },
            {
                id: 24,
                title: "Lịch sử",
                url: BASE_USER_URL + "/history",
            },
        ],
    },
    {
        id: 3,
        icon: "bi bi-laptop",
        title: "Quản lý sản phẩm",
        url: BASE_PRODUCT_URL,
        child: [
            {
                id: 31,
                title: "Danh sách",
                url: BASE_PRODUCT_URL + "/active",
            },
            {
                id: 32,
                title: "Thùng rác",
                url: BASE_PRODUCT_URL + "/deleted",
            },
            {
                idL: 33,
                title: "Thống kê",
                url: BASE_PRODUCT_URL + "/statistic",
            },
            {
                id: 34,
                title: "Lịch sử",
                url: BASE_PRODUCT_URL + "/history",
            },
        ],
    },
    {
        id: 4,
        icon: "bi bi-badge-ad",
        title: "Quản lý thương hiệu",
        url: BASE_BRAND_URL,
        child: [
            {
                id: 41,
                title: "Danh sách",
                url: BASE_BRAND_URL + "/active",
            },
            {
                id: 42,
                title: "Thùng rác",
                url: BASE_BRAND_URL + "/deleted",
            },
            {
                id: 43,
                title: "Thống kê",
                url: BASE_BRAND_URL + "/statistic",
            },
            {
                id: 44,
                title: "Lịch sử",
                url: BASE_BRAND_URL + "/history",
            },
        ],
    },
    {
        id: 5,
        icon: "bi bi-ticket-perforated",
        title: "Quản lý khuyến mại",
        url: BASE_PROMOTION,
        child: [
            {
                id: 51,
                title: "Danh sách",
                url: BASE_PROMOTION + "/active",
            },
            {
                id: 52,
                title: "Thùng rác",
                url: BASE_PROMOTION + "/deleted",
            },
            {
                id: 53,
                title: "Thống kê",
                url: BASE_PROMOTION + "/statistic",
            },
            {
                id: 54,
                title: "Lịch sử",
                url: BASE_PROMOTION + "/history",
            },
        ],
    },
    {
        id: 6,
        icon: "bi bi-chat-square-text",
        title: "Quản lý đánh giá",
        url: BASE_FEEDBACK,
        child: [
            {
                id: 61,
                title: "Danh sách",
                url: BASE_FEEDBACK + "/active",
            },
            {
                id: 62,
                title: "Thùng rác",
                url: BASE_FEEDBACK + "/deleted",
            },
            {
                id: 63,
                title: "Thống kê",
                url: BASE_FEEDBACK + "/statistic",
            },
            {
                id: 64,
                title: "Lịch sử",
                url: BASE_FEEDBACK + "/history",
            },
        ],
    },
    {
        id: 7,
        icon: "bi bi-receipt-cutoff",
        title: "Quản lý hoá đơn",
        url: BASE_INVOICE,
        child: [
            {
                id: 71,
                title: "Danh sách",
                url: BASE_INVOICE + "/active",
            },
            {
                id: 72,
                title: "Thùng rác",
                url: BASE_INVOICE + "/deleted",
            },
            {
                id: 73,
                title: "Thống kê",
                url: BASE_INVOICE + "/statistic",
            },
            {
                id: 74,
                title: "Lịch sử",
                url: BASE_INVOICE + "/history",
            },
        ],
    },
    {
        id: 8,
        icon: "bi bi-person-badge",
        title: "Thông tin cá nhân",
        url: BASE_PROFILE,
    },
    {
        id: 9,
        icon: "bi bi-building-gear",
        title: "Cài đặt hệ thống",
        url: BASE_SYSTEM_URL,
    },
];

const fetchAllNavItem = () => {
    return navItems;
};

export { fetchAllNavItem };
