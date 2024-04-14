import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateUserInfo } from "../../services/UserService";
import { toast } from "react-toastify";

function UpdateUserInfoModal(props) {
    const {
        show,
        handleClose,
        targetUser,
        handleUpdateTable,
        currentPageIndex,
    } = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleUpdateUserInfo = () => {
        updateUserInfo(targetUser, firstName, lastName, email, phoneNumber)
            .then(response => {
                console.log(response);
                if (response && response.status === 200) {
                    toast.success(response.data.message);
                    handleUpdateTable();
                    handleClose();
                }
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        setFirstName(targetUser.firstName);
        setLastName(targetUser.lastName);
        setEmail(targetUser.email);
        setPhoneNumber(targetUser.phoneNumber);
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-warning">
                <Modal.Title>Update user info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Tên đăng nhập</Form.Label>
                        <Form.Control
                            type="text"
                            value={targetUser.username}
                            readOnly
                            disabled
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput2"
                    >
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput3"
                    >
                        <Form.Label>Họ đệm</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput4"
                    >
                        <Form.Label>Hộp thư</Form.Label>
                        <Form.Control
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput5"
                    >
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            type="text"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="warning" onClick={handleUpdateUserInfo}>
                    Lưu thay đổi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateUserInfoModal;
