import "../../assets/css/custom.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/hooks";
import { authenticate } from "../../services/AuthService";
import { toast } from "react-toastify";
import { logIn, logOut } from "../../store/actions";

function Login() {
    const MIN_LENGTH = 8;
    const SPACE_CHAR = " ";
    const EMAIL_PATTERN =
        /^(?=.{8,254}$)([a-zA-Z0-9])+@([a-zA-Z0-9-]+)(\.{1}([a-z]+))+$/;
    const UPPER_CASE_PATTERN = /[A-Z]/;
    const LOWER_CASE_PATTERN = /[a-z]/;
    const NUMBER_PATTERN = /[0-9]/;
    const SPECIAL_CHAR_PATTERN = /[!@#$%^&*]/;

    const [usernameFeedbackMessage, setUsernameFeedbackMessage] = useState("");
    const [passwordFeedbackMessage, setPasswordFeedbackMessage] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [state, dispatch] = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true);
        console.log(loading);
        await authenticate({ username, password })
            .then(response => {
                if (response && response.data.meta.status === "SUCCESS") {
                    console.log("logged in!");
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
    };

    useEffect(() => {
        setUsernameFeedbackMessage("");
    }, []);

    useEffect(() => {
        validateUsername();
    }, [username]);

    useEffect(() => {
        validatePassword();
    }, [password]);

    useEffect(() => {}, [isValidUsername]);
    useEffect(() => {}, [isValidPassword]);

    const validateUsername = () => {
        if (username.trim().length === 0) {
            setUsernameFeedbackMessage("Tên đăng nhập không được để trống.");
            setIsValidUsername(false);
            return;
        }

        if (username.length < MIN_LENGTH) {
            setUsernameFeedbackMessage(
                "Tên đăng nhập phải có tối thiểu 8 ký tự",
            );
            setIsValidUsername(false);
            return;
        }

        if (username.includes(SPACE_CHAR)) {
            setUsernameFeedbackMessage(
                "Tên đăng nhập không được chứa dấu cách.",
            );
            setIsValidUsername(false);
            return;
        }

        if (!username.match(EMAIL_PATTERN)) {
            setUsernameFeedbackMessage("Định dạng tên đăng nhập không hợp lệ.");
            setIsValidUsername(false);
            return;
        }

        setUsernameFeedbackMessage("Tên đăng nhập hợp lệ.");
        setIsValidUsername(true);
    };

    const validatePassword = () => {
        if (password.trim().length === 0) {
            setPasswordFeedbackMessage("Mật khẩu không được để trống.");
            setIsValidPassword(false);
            return;
        }

        if (password.length < MIN_LENGTH) {
            setPasswordFeedbackMessage("Mật khẩu phải có tối thiểu 8 ký tự.");
            setIsValidPassword(false);
            return;
        }

        if (password.includes(SPACE_CHAR)) {
            setPasswordFeedbackMessage("Mật khẩu không được chứa dấu cách.");
            setIsValidPassword(false);
            return;
        }

        if (!password.match(UPPER_CASE_PATTERN)) {
            setPasswordFeedbackMessage(
                "Mật khẩu phải chứa ít nhất một ký tự in hoa.",
            );
            setIsValidPassword(false);
            return;
        }

        if (!password.match(LOWER_CASE_PATTERN)) {
            setPasswordFeedbackMessage(
                "Mật khẩu phải chứa ít nhất một ký tự in thường.",
            );
            setIsValidPassword(false);
            return;
        }

        if (!password.match(NUMBER_PATTERN)) {
            setPasswordFeedbackMessage(
                "Mật khẩu phải chứa ít nhất một chữ số.",
            );
            setIsValidPassword(false);
            return;
        }

        if (!password.match(SPECIAL_CHAR_PATTERN)) {
            setPasswordFeedbackMessage(
                "Mật khẩu phải chứa ít nhất một ký tự đặc biệt.",
            );
            setIsValidPassword(false);
            return;
        }

        setPasswordFeedbackMessage("Mật khẩu hợp lệ.");
        setIsValidPassword(true);
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
                                                        type="email"
                                                        name="username"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required
                                                        onChange={e =>
                                                            setUsername(
                                                                e.target.value,
                                                            )
                                                        }
                                                        placeholder="example@gmail.com"
                                                    />
                                                    <div
                                                        className={`invalid-feedback show ${
                                                            isValidUsername
                                                                ? "text-success"
                                                                : "text-danger"
                                                        }`}
                                                    >
                                                        {
                                                            usernameFeedbackMessage
                                                        }
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
                                                <div
                                                    className={`invalid-feedback show ${
                                                        isValidPassword
                                                            ? "text-success"
                                                            : "text-danger"
                                                    }`}
                                                >
                                                    {passwordFeedbackMessage}
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
