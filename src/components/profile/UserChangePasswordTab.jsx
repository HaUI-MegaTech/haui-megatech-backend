import { useEffect } from "react";

function UserChangePasswordTab(props) {
    const { show } = props;

    useEffect(() => {
        show && (document.title = "Thay đổi mật khẩu");
    }, [show]);

    return (
        <div
            className={`tab-pane fade pt-3 ${show && "show active"}`}
            id="/use/change-password"
        >
            <form>
                <div className="row mb-3">
                    <label
                        htmlFor="currentPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                    >
                        Current Password
                    </label>
                    <div className="col-md-8 col-lg-9">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="currentPassword"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="newPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                    >
                        New Password
                    </label>
                    <div className="col-md-8 col-lg-9">
                        <input
                            name="newpassword"
                            type="password"
                            className="form-control"
                            id="newPassword"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="renewPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                    >
                        Re-enter New Password
                    </label>
                    <div className="col-md-8 col-lg-9">
                        <input
                            name="renewpassword"
                            type="password"
                            className="form-control"
                            id="renewPassword"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserChangePasswordTab;
