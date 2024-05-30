import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes } from "../routes";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PrivateContent from "./PrivateContent";

function PublicContent() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.page;
                return (
                    <Route key={index} path={route.path} element={<Page />} />
                );
            })}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default PublicContent;
