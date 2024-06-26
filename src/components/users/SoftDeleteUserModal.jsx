import { Button, Modal } from "react-bootstrap";
import { softDeleteUser } from "../../services/UserService";
import { toast } from "react-toastify";

function SoftDeleteUserModal(props) {
    const {
        show,
        handleClose,
        targetUser,
        currentPageIndex,
        handleUpdateTable,
    } = props;

    const handleSoftDeleteUser = () => {
        softDeleteUser(targetUser)
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    handleClose();
                    handleUpdateTable();
                }
            })
            .catch(error => {
                toast.error(error.response.data.meta.message);
            });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-danger text-white">
                    <Modal.Title>Xoá tạm thời người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xoá tạm thời người dùng:&nbsp;
                    <b>
                        {targetUser.username} (
                        {targetUser.firstName + " " + targetUser.lastName})
                    </b>
                    ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <i class="bi bi-x-circle"></i>&nbsp;Huỷ
                    </Button>
                    <Button variant="danger" onClick={handleSoftDeleteUser}>
                        <i class="bi bi-check-circle"></i>&nbsp;Xác nhận xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SoftDeleteUserModal;
