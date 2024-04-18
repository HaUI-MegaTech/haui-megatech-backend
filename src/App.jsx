import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { privateRoutes } from "./routes";

function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="*" element={<Navigate to="/home" />} />
                {privateRoutes.map((route, index) => {
                    const Page = route.page;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Page />}
                        />
                    );
                })}
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Footer />
        </>
    );
}

export default App;
