import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";
import Blank from "./pages/Blank";
import { Navigate, Route, Routes } from "react-router-dom";
import ActiveUsers from "./pages/users/ActiveUsers";
import DeletedUsers from "./pages/users/DeletedUsers";
import UsersStatistic from "./pages/users/UsersStatistic";
import UsersHistory from "./pages/users/UsersHistory";
import Home from "./pages/home/Home";
import UserProfile from "./pages/users/UserProfile";
import ActiveProducts from "./pages/products/ActiveProducts";
import DeletedProducts from "./pages/products/DeletedProducts";
import ProductsStatistic from "./pages/products/ProductsStatistic";
import ProductsHistory from "./pages/products/ProductsHistory";

function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/users/active" element={<ActiveUsers />}></Route>
                <Route path="/users/deleted" element={<DeletedUsers />}></Route>
                <Route
                    path="/users/statistic"
                    element={<UsersStatistic />}
                ></Route>
                <Route path="/users/history" element={<UsersHistory />}></Route>

                <Route
                    path="/products/active"
                    element={<ActiveProducts />}
                ></Route>
                <Route
                    path="/products/deleted"
                    element={<DeletedProducts />}
                ></Route>
                <Route
                    path="/products/statistic"
                    element={<ProductsStatistic />}
                ></Route>
                <Route
                    path="/products/history"
                    element={<ProductsHistory />}
                ></Route>

                <Route path="/user/detail" element={<UserProfile />}></Route>
                <Route path="/user/update" element={<UserProfile />}></Route>
                <Route path="/user/settings" element={<UserProfile />}></Route>
                <Route
                    path="/user/change-password"
                    element={<UserProfile />}
                ></Route>
                <Route path="/faq" element={<Blank />}></Route>
                <Route path="/logout" element={<Blank />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
