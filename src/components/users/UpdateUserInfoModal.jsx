import { Button, Form, Modal } from "react-bootstrap";

function UpdateUserInfoModal(props) {
    const { show, handleClose, targetUser } = props;
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
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            type="text"
                            value={targetUser.firstName}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Họ đệm</Form.Label>
                        <Form.Control
                            type="text"
                            value={targetUser.lastName}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Hộp thư</Form.Label>
                        <Form.Control
                            type="text"
                            value={targetUser.email}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            type="text"
                            value={targetUser.phoneNumber}
                            readOnly
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="warning" onClick={handleClose}>
                    Lưu thay đổi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateUserInfoModal;
