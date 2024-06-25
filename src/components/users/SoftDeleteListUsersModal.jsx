import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { softDeleteUserList } from "../../services/UserService";

function SoftDeleteListUsersModal(props) {
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

    const handleClickSoftDeleteUserList = async e => {
        const data = selectedList.join(",");
        await softDeleteUserList(data)
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
            <Modal.Header closeButton className="bg-danger text-white">
                <Modal.Title>Xoá tạm thời nhiều người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedList.length === 0
                    ? "Danh sách lựa chọn hiện đang trống"
                    : `Bạn có chắc chắn xoá ${selectedList.length} người dùng này?`}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <i class="bi bi-x-circle"></i>&nbsp;Huỷ
                </Button>
                <Button
                    variant="danger"
                    onClick={handleClickSoftDeleteUserList}
                >
                    <i class="bi bi-check-circle"></i>&nbsp;Xác nhận xoá
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SoftDeleteListUsersModal;
