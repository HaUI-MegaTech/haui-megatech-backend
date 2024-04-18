import { Button, Modal } from "react-bootstrap";
import { restoreUser } from "../../services/UserService";
import { toast } from "react-toastify";

function RestoreUserModal(props) {
    const { show, handleClose, targetUser, pageIndex, handleUpdateTable } =
        props;

    const handleRestoreUser = () => {
        restoreUser(targetUser)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    toast.success(response.data.message);
                    handleUpdateTable(pageIndex);
                    handleClose();
                }
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title>Restore user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn khôi phục người dùng{" "}
                <b>
                    {targetUser.username} (
                    {targetUser.firstName + " " + targetUser.lastName})
                </b>
                ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Huỷ
                </Button>
                <Button variant="success" onClick={handleRestoreUser}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RestoreUserModal;
