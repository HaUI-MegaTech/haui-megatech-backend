import { useEffect } from "react";

function UserChangePasswordTab(props) {
    const { show } = props;

    useEffect(() => {
        show && (document.title = "Thay đổi mật khẩu");
    }, [show]);

    return (
        <div
            class={`tab-pane fade pt-3 ${show && "show active"}`}
            id="/use/change-password"
        >
            <form>
                <div class="row mb-3">
                    <label
                        for="currentPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                    >
                        Current Password
                    </label>
                    <div class="col-md-8 col-lg-9">
                        <input
                            name="password"
                            type="password"
                            class="form-control"
                            id="currentPassword"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="newPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                    >
                        New Password
                    </label>
                    <div class="col-md-8 col-lg-9">
                        <input
                            name="newpassword"
                            type="password"
                            class="form-control"
                            id="newPassword"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="renewPassword"
                        class="col-md-4 col-lg-3 col-form-label"
                    >
                        Re-enter New Password
                    </label>
                    <div class="col-md-8 col-lg-9">
                        <input
                            name="renewpassword"
                            type="password"
                            class="form-control"
                            id="renewPassword"
                        />
                    </div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary">
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserChangePasswordTab;
