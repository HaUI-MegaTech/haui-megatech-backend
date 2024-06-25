import { Button, Modal } from "react-bootstrap";
import { resetPasswordUsersList } from "../../services/UserService";
import { toast } from "react-toastify";

function ResetPasswordListUsersModal(props) {
    const { show, handleClose, selectedList, setSelectedList } = props;

    const handleConfirmClick = async e => {
        const data = selectedList.join(",");
        await resetPasswordUsersList(data)
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    setSelectedList([]);
                    handleClose();
                }
            })
            .catch(error => {
                // toast.error(error.response.data.meta.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-success text-white">
                <Modal.Title>Khôi phục mật khẩu nhiều người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có chắc chắn cấp lại mật khẩu cho {selectedList.length}{" "}
                người dùng này?
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

export default ResetPasswordListUsersModal;
