import { useState } from "react";
import { addNewUser } from "../../services/UserService";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";

function AddUserModal(props) {
    const { show, handleClose, handleUpdateTable } = props;
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const clearInput = () => {
        setUsername("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleAddUser = () => {
        addNewUser(
            username,
            firstName,
            lastName,
            password,
            confirmPassword,
        ).then(response => {
            console.log(response);
            if (response && response.status === 201) {
                toast.success(response.data.message);
                handleUpdateTable();
                handleClose();
                clearInput();
            }
        });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>Thêm mới người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Huỷ
                </Button>
                <Button variant="primary" onClick={handleAddUser}>
                    Thêm mới
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddUserModal;
