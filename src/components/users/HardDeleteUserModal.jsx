import { Button, Modal } from "react-bootstrap";
import { hardDeleteUser } from "../../services/UserService";
import { toast } from "react-toastify";

function HardDeleteUserModal(props) {
    const {
        show,
        handleClose,
        targetUser,
        currentPageIndex,
        handleUpdateTable,
    } = props;

    const handleHardDeleteUser = () => {
        hardDeleteUser(targetUser)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    toast.success(response.data.message);
                    handleClose();
                    handleUpdateTable(currentPageIndex);
                }
            })
            .catch(error => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-danger text-white">
                <Modal.Title>Hard delete user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có chắc chắn xoá vĩnh viễn người dùng{" "}
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
                <Button variant="danger" onClick={handleHardDeleteUser}>
                    Xoá vĩnh viễn
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default HardDeleteUserModal;
