import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { changeUserPassword } from "../../services/UserService";
import { toast } from "react-toastify";

function ChangeUserPasswordModal(props) {
    const { show, handleClose, targetUser } = props;

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleChangeUserPassword = () => {
        changeUserPassword(
            targetUser,
            oldPassword,
            newPassword,
            confirmNewPassword,
        )
            .then(response => {
                console.log(response.data.data.message);
                if (response && response.status === 200) {
                    toast.success(response.data.data.message);
                    handleClose();
                }
            })
            .catch(error => {
                toast.error(error.response.data.data.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title>Change user password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="oldPassword">
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
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleChangeUserPassword}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChangeUserPasswordModal;
