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
    const [email, setEmail] = useState("");

    const clearInput = () => {
        setUsername("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
    };

    const handleAddUser = () => {
        addNewUser({
            username,
            firstName,
            lastName,
            password,
            confirmPassword,
            email,
        })
            .then(response => {
                console.log(response);
                if (response && response.status === 201) {
                    toast.success(response.data.meta.message);
                    handleUpdateTable();
                    handleClose();
                    clearInput();
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.response.data.meta.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>Thêm mới người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label htmlFor="username" className="form-label">
                    Tên đăng nhập
                </label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />

                <label htmlFor="firstName" className="form-label">
                    Tên
                </label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />

                <label htmlFor="lastName" className="form-label">
                    Họ đệm
                </label>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />

                <label htmlFor="password" className="form-label">
                    Mật khẩu
                </label>
                <input
                    type="password"
                    id="password"
                    className="form-control mb-3"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <label htmlFor="confirmPassword" className="form-label">
                    Xác nhận mật khẩu
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="form-control mb-3"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />

                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
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
