import "./App.css";
import { ToastContainer } from "react-toastify";
import PrivateContent from "./content/PrivateContent";
import PublicContent from "./content/PublicContent";
import { useAuth } from "./store/hooks";

function App() {
    const [state] = useAuth();

    return (
        <>
            {state ? <PrivateContent /> : <PublicContent />}

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
