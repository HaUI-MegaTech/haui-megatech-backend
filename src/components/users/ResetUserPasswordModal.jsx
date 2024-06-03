import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { resetUserPassword } from "../../services/UserService";
import { toast } from "react-toastify";

function ResetUserPasswordModal(props) {
    const { show, handleClose, targetUser } = props;

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleResetUserPassword = () => {
        resetUserPassword(targetUser)
            .then(response => {
                console.log(response);
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    handleClose();
                }
            })
            .catch(error => {
                toast.error(error.response.data.meta.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title>Khôi phục mật khẩu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Bạn có chắc chắc muốn đặt lại mật khẩu cho tài khoản này?</p>
                <Form>
                    {/* <Form.Group className="mb-3" controlId="oldPassword">
                        <Form.Label>Old password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={e => setOldPassword(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="newPassword">
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={e => setNewPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirmNewPassword">
                        <Form.Label>Confirm new password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={e =>
                                setConfirmNewPassword(e.target.value)
                            }
                        />
                    </Form.Group> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="success" onClick={handleResetUserPassword}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ResetUserPasswordModal;
