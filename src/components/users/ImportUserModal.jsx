import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { importUserExcel } from "../../services/UserService";
import { toast } from "react-toastify";

function ImportUserModal(props) {
    const { show, handleClose, getUsers } = props;

    const [file, setFile] = useState();
    const [fileName, setFilename] = useState();

    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        await importUserExcel({ file: file })
            .then(response => {
                if (response && response.status === 201) {
                    toast.success(response.data.meta.message);
                    getUsers({ index, field, direction, limit, keyword });
                }
            })
            .catch(error => {
                // toast.error(response.data.meta.message);
            });
    };

    const handleUploadFile = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-warning">
                <Modal.Title>Nhập danh sách người sử dụng</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>
                            Chọn file dữ liệu có mở rộng là .xlsx, .xls hoặc
                            .csv
                        </Form.Label>
                        <Form.Control type="file" onChange={handleUploadFile} />
                        <Form.Text className="text-muted">{fileName}</Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ bỏ
                    </Button>
                    <Button
                        variant="warning"
                        onClick={handleClose}
                        type="submit"
                    >
                        Nhập
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default ImportUserModal;
