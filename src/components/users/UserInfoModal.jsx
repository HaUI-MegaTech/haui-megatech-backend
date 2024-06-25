import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getOneUser } from "../../services/UserService";

function UserInfoModal(props) {
    const { show, handleClose, targetUser } = props;
    const [data, setData] = useState();

    useEffect(() => {
        getData(targetUser.id);
    }, [targetUser]);

    const getData = id => {
        getOneUser(id)
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => console.log(err));
    };

    console.log(data);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-info">
                <Modal.Title>Thông tin người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <img
                        src={data && data.avatarImageUrl}
                        alt="Profile"
                        className="rounded-circle img-thumbnail w-50 mb-3"
                        style={{ aspectRatio: 1 / 1 }}
                    />
                </div>
                <h2 className="text-center">
                    {data && data.firstName + " " + data.lastName}
                </h2>
                <h3 className="text-center">{data && data.email}</h3>

                <h5 className="card-title">Thông tin chi tiết</h5>

                <div className="row mb-2">
                    <div className="col-5 label ">Tên đăng nhập: </div>
                    <div className="col-7">{data && data.username}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Quyền thực thi: </div>
                    <div className="col-7">{data && data.role}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Tên: </div>
                    <div className="col-7">{data && data.firstName}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Họ đệm: </div>
                    <div className="col-7">{data && data.lastName}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Địa chỉ email: </div>
                    <div className="col-7">{data && data.email}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Số điện thoại: </div>
                    <div className="col-7">{data && data.phoneNumber}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Ngày tạo: </div>
                    <div className="col-7">{data && data.whenCreated}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Cập nhật lần cuối: </div>
                    <div className="col-7">{data && data.lastUpdated}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Đăng nhập lần cuối: </div>
                    <div className="col-7">{data && data.lastLoggedIn}</div>
                </div>

                <div className="row mb-2">
                    <div className="col-5 label">Số lần đăng nhập: </div>
                    <div className="col-7">{data && data.loggedIn}</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <i class="bi bi-x-circle"></i>&nbsp;Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserInfoModal;
