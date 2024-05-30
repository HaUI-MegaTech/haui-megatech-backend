import { Navigate, Route } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import { privateRoutes } from "../routes";

function PrivateContent() {
    return (
        <PrivateLayout>
            {privateRoutes.map((route, index) => {
                const Page = route.page;
                return (
                    <Route key={index} path={route.path} element={<Page />} />
                );
            })}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </PrivateLayout>
    );
}

export default PrivateContent;
