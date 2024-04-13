import { useState } from "react";
import { addNewUser } from "../../services/UserService";
import { toast } from "react-toastify";

function AddUserModal() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleAddUser = () => {
        addNewUser(
            username,
            firstName,
            lastName,
            password,
            confirmPassword,
        ).then(response => {
            console.log(response);
            if (response && response.status === 201)
                toast.success(
                    `Tạo thành công người dùng có id: ${response.data.item.id} với username: ${response.data.item.username}`,
                );
        });
    };

    return (
        <div
            className="modal fade"
            id="addUser"
            tabindex="-1"
            aria-labelledby="addUserLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addUserLabel">
                            Thêm mới
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <label for="username" class="form-label">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="username"
                            placeholder="viethoang2024"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />

                        <label for="firstName" class="form-label">
                            Tên
                        </label>
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="firstName"
                            placeholder="Hoang"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />

                        <label for="lastName" class="form-label">
                            Họ đệm
                        </label>
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="lastName"
                            placeholder="Nguyen Viet"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />

                        <label for="password" class="form-label">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            id="password"
                            class="form-control mb-3"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />

                        <label for="confirmPassword" class="form-label">
                            Xác nhận mật khẩu
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            class="form-control"
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Đóng
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddUser}
                        >
                            Hoàn tất
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUserModal;
