const BASE_HOMEPAGE_URL = '/home'
const BASE_USER_URL = '/users'
const BASE_PRODUCT_URL = '/products'

const navItems = [
    {
        id: 1,
        icon: 'bi bi-house',
        title: 'Trang chủ',
        url: BASE_HOMEPAGE_URL
    },
    {
        id: 2,
        icon: 'bi bi-people',
        title: 'Quản lý người dùng',
        url: BASE_USER_URL,
        child: [
            {
                title: 'Danh sách',
                url: BASE_USER_URL + '/active'
            },
            {
                title: 'Thùng rác',
                url: BASE_USER_URL + '/deleted'
            },
            {
                title: 'Thống kê',
                url: BASE_USER_URL + '/statistic'
            },
            {
                title: 'Lịch sử',
                url: BASE_USER_URL + '/history'
            }

        ]
    },
    {
        id: 3,
        icon: 'bi bi-laptop',
        title: 'Quản lý sản phẩm',
        url: BASE_PRODUCT_URL,
        child: [
            {
                title: 'Danh sách',
                url: BASE_PRODUCT_URL + '/active'
            },
            {
                title: 'Thùng rác',
                url: BASE_PRODUCT_URL + '/deleted'
            },
            {
                title: 'Thống kê',
                url: BASE_PRODUCT_URL + '/statistic'
            },
            {
                title: 'Lịch sử',
                url: BASE_PRODUCT_URL + '/history'
            }

        ]
    }
]

const fetchAllNavItem = () => {
    return navItems;
}

export { fetchAllNavItem }