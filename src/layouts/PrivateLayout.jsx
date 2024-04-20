import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function PrivateLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>
                {children}
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default PrivateLayout;
