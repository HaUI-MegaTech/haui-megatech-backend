import { useEffect, useState } from "react";
import { useAuth } from "../../store/hooks";
import { authenticate } from "../../services/AuthService";
import { toast } from "react-toastify";
import { logIn, logOut } from "../../store/actions";

function Login() {
    const [state, dispatch] = useAuth();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true);
        console.log(loading);
        await authenticate({ username, password })
            .then(response => {
                console.log(response);
                // setInterval(() => {
                //     console.log(Math.random());
                //     localStorage.setItem("test", Math.random());
                // }, 1000);
                if (response && response.data.meta.status === "SUCCESS") {
                    localStorage.setItem(
                        "accessToken",
                        response.data.data.accessToken,
                    );
                    localStorage.setItem(
                        "loggedInUser",
                        JSON.stringify(response.data.data.loggedInUser),
                    );
                    toast.success(response.data.meta.message);
                    dispatch(logIn());
                }
            })
            .catch(error => {
                error.code === "ERR_NETWORK"
                    ? toast.error("Lỗi kết nối đến máy chủ.")
                    : toast.error(error.response.data.meta.message);
            });
        setLoading(false);
        console.log(loading);
    };

    return (
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a
                                        href="index.html"
                                        className="logo d-flex align-items-center w-auto"
                                    >
                                        <img src="assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">
                                            HaUI MegaTech
                                        </span>
                                    </a>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>
                                            <p className="text-center small">
                                                Enter your username & password
                                                to login
                                            </p>
                                        </div>

                                        <form className="row g-3 needs-validation">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourUsername"
                                                    className="form-label"
                                                >
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span
                                                        className="input-group-text"
                                                        id="inputGroupPrepend"
                                                    >
                                                        @
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required
                                                        onChange={e =>
                                                            setUsername(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your
                                                        username.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required
                                                    onChange={e =>
                                                        setPassword(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="remember"
                                                        value="true"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    disabled={loading}
                                                    type="button"
                                                    onClick={handleLogin}
                                                >
                                                    {loading && (
                                                        <div
                                                            className="spinner-border spinner-border-sm"
                                                            role="status"
                                                        >
                                                            <span className="visually-hidden">
                                                                Loading...
                                                            </span>
                                                        </div>
                                                    )}
                                                    &nbsp;Login
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Don't have account?{" "}
                                                    <a href="pages-register.html">
                                                        Create an account
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;