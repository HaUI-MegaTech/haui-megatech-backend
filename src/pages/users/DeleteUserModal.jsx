import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
    fetchAllActiveUsers,
    temporarilyDeleteUser,
} from "../../services/UserService";
import { toast } from "react-toastify";

function DeleteUserModal(props) {
    const {
        show,
        handleClose,
        targetUser,
        currentPageIndex,
        handleUpdateTable,
    } = props;

    const handleTemporarilyDeleteUser = () => {
        temporarilyDeleteUser(targetUser)
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.message);
                    handleClose();
                    handleUpdateTable();
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-danger text-white">
                    <Modal.Title>Xoá tạm thời người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xoá tạm thời người dùng:&nbsp;
                    <b>{targetUser.username}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleTemporarilyDeleteUser}
                    >
                        Xác nhận xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUserModal;
