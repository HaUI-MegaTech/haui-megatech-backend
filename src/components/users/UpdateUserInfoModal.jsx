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

    const [firstName, setFirstName] = useState(targetUser.firstName ?? "");
    const [lastName, setLastName] = useState(targetUser.lastName ?? "");
    const [email, setEmail] = useState(targetUser.email ?? "");
    const [phoneNumber, setPhoneNumber] = useState(
        targetUser.phoneNumber ?? "'",
    );
    const [role, setRole] = useState(targetUser.role);

    console.log(targetUser);

    const handleUpdateUserInfo = async e => {
        e.preventDefault();

        await updateUserInfo({
            id: targetUser.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            role: role,
        })
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    handleUpdateTable();
                    handleClose();
                }
            })
            .catch(error => {
                toast.error(error.response.data.meta.message);
            });
    };

    useEffect(() => {
        setFirstName(targetUser.firstName);
        setLastName(targetUser.lastName);
        setEmail(targetUser.email);
        setPhoneNumber(targetUser.phoneNumber);
    }, [targetUser]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Form method="post" onSubmit={handleUpdateUserInfo}>
                <Modal.Header closeButton className="bg-warning">
                    <Modal.Title>Update user info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            onChange={e => {
                                setFirstName(e.target.value);
                            }}
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

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput5"
                    >
                        <Form.Label>Quyền thực thi</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={e => setRole(e.target.value)}
                        >
                            <option
                                value="CUSTOMER"
                                selected={targetUser.role === "CUSTOMER"}
                            >
                                Khách hàng
                            </option>
                            <option
                                value="STAFF"
                                selected={targetUser.role === "STAFF"}
                            >
                                Nhân viên
                            </option>
                            <option
                                value="MANAGER"
                                selected={targetUser.role === "MANAGER"}
                            >
                                Quản lý
                            </option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="warning" type="submit">
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default UpdateUserInfoModal;
