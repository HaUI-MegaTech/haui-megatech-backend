import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteUserModal(props) {
    const { show, handleClose, targetUser } = props;

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-danger text-white">
                    <Modal.Title>Xoá tạm thời người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xoá tạm thời người dùng:{" "}
                    <b>{targetUser.username}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Xác nhận xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUserModal;
