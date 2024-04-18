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
                title: "Danh sách",
                url: BASE_USER_URL + "/active",
            },
            {
                title: "Thùng rác",
                url: BASE_USER_URL + "/deleted",
            },
            {
                title: "Thống kê",
                url: BASE_USER_URL + "/statistic",
            },
            {
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
                title: "Danh sách",
                url: BASE_PRODUCT_URL + "/active",
            },
            {
                title: "Thùng rác",
                url: BASE_PRODUCT_URL + "/deleted",
            },
            {
                title: "Thống kê",
                url: BASE_PRODUCT_URL + "/statistic",
            },
            {
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
                title: "Danh sách",
                url: BASE_BRAND_URL + "/active",
            },
            {
                title: "Thùng rác",
                url: BASE_BRAND_URL + "/deleted",
            },
            {
                title: "Thống kê",
                url: BASE_BRAND_URL + "/statistic",
            },
            {
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
                title: "Danh sách",
                url: BASE_PROMOTION + "/active",
            },
            {
                title: "Thùng rác",
                url: BASE_PROMOTION + "/deleted",
            },
            {
                title: "Thống kê",
                url: BASE_PROMOTION + "/statistic",
            },
            {
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
                title: "Danh sách",
                url: BASE_FEEDBACK + "/active",
            },
            {
                title: "Thùng rác",
                url: BASE_FEEDBACK + "/deleted",
            },
            {
                title: "Thống kê",
                url: BASE_FEEDBACK + "/statistic",
            },
            {
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
                title: "Danh sách",
                url: BASE_INVOICE + "/active",
            },
            {
                title: "Thùng rác",
                url: BASE_INVOICE + "/deleted",
            },
            {
                title: "Thống kê",
                url: BASE_INVOICE + "/statistic",
            },
            {
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
