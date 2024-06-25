import { Button, Modal } from "react-bootstrap";
import { restoreUsersList } from "../../services/UserService";
import { toast } from "react-toastify";

function RestoreListUsersModal(props) {
    const {
        show,
        handleClose,
        selectedList,
        setSelectedList,
        getUsers,
        index,
        limit,
        direction,
        field,
        keyword,
    } = props;

    const handleConfirmClick = async e => {
        const data = selectedList.join(",");
        await restoreUsersList(data)
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    setSelectedList([]);
                    handleClose();
                    getUsers({
                        index,
                        limit,
                        field,
                        direction,
                        keyword,
                    });
                }
            })
            .catch(error => {
                // toast.error(error.response.data.meta.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title>Khôi phục nhiều người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có chắc chắn khôi phục {selectedList.length} người dùng này?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <i class="bi bi-x-circle"></i>&nbsp;Đóng
                </Button>
                <Button variant="success" onClick={handleConfirmClick}>
                    <i class="bi bi-check-circle"></i>&nbsp;Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RestoreListUsersModal;
