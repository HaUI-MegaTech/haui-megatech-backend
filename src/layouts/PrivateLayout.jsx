import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function PrivateLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>{children}</Routes>
            <Footer />
        </>
    );
}

export default PrivateLayout;
