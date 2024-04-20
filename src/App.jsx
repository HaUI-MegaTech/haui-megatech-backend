import "./App.css";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { privateRoutes } from "./routes";
import PrivateLayout from "./layouts/PrivateLayout";

function App() {
    return (
        <>
            <PrivateLayout>
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
            </PrivateLayout>

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
        </>
    );
}

export default App;
