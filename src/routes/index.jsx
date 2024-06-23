import { Navigate } from "react-router-dom";
import Blank from "../pages/Blank";
import Home from "../pages/home/Home";
import ActiveProducts from "../pages/products/ActiveProducts";
import DeletedProducts from "../pages/products/DeletedProducts";
import ProductsHistory from "../pages/products/ProductsHistory";
import ProductsStatistic from "../pages/products/ProductsStatistic";
import UserProfile from "../pages/profiles/UserProfile";
import ActiveUsers from "../pages/users/ActiveUsers";
import DeletedUsers from "../pages/users/DeletedUsers";
import UsersHistory from "../pages/users/UsersHistory";
import UsersStatistic from "../pages/users/UsersStatistic";
import Login from "../pages/auth/Login";
import BrandsStatistic from "../pages/brand/BrandsStatistic";
import ActiveBrands from "../pages/brand/ActiveBrands";

const publicRoutes = [
    { path: "/login", page: Login },
    { path: "/forgot-password", page: Login },
];

const privateRoutes = [
    // home
    { path: "/home", page: Home },

    // users
    { path: "/users/active", page: ActiveUsers },
    { path: "/users/deleted", page: DeletedUsers },
    { path: "/users/statistic", page: UsersStatistic },
    { path: "/users/history", page: UsersHistory },

    // products
    { path: "/products/active", page: ActiveProducts },
    { path: "/products/deleted", page: DeletedProducts },
    { path: "/products/statistic", page: ProductsStatistic },
    { path: "/products/history", page: ProductsHistory },

    // brands
    { path: "/brands/active", page: ActiveBrands },
    { path: "/brands/statistic", page: BrandsStatistic },

    // profile
    { path: "/user/detail", page: UserProfile },
    { path: "/user/update", page: UserProfile },
    { path: "/user/settings", page: UserProfile },
    { path: "/user/change-password", page: UserProfile },
    { path: "/faq", page: Blank },
    { path: "/logout", page: Blank },
];

export { publicRoutes, privateRoutes };
