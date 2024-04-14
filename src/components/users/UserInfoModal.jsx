import { Button, Modal } from "react-bootstrap";

function UserInfoModal(props) {
    const { show, handleClose, targetUser } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-info">
                <Modal.Title>User info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <img
                        src="https://th.bing.com/th/id/R.90501fda39777948c197990afcffa993?rik=LKE2uMmp8vvz6g&pid=ImgRaw&r=0"
                        alt="Profile"
                        className="rounded-circle img-thumbnail w-50"
                    />
                </div>
                <h2 className="text-center">
                    {targetUser.firstName + " " + targetUser.lastName}
                </h2>
                <h3 className="text-center">{targetUser.email}</h3>

                <h5 className="card-title">About</h5>
                <p className="small fst-italic">
                    Sunt est soluta temporibus accusantium neque nam maiores
                    cumque temporibus. Tempora libero non est unde veniam est
                    qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                    perspiciatis odit. Fuga sequi sed ea saepe at unde.
                </p>

                <h5 className="card-title">Profile Details</h5>

                <div className="row">
                    <div className="col-4 label ">Username: </div>
                    <div className="col-8">{targetUser.username}</div>
                </div>

                <div className="row">
                    <div className="col-4 label">First name: </div>
                    <div className="col-8">{targetUser.firstName}</div>
                </div>

                <div className="row">
                    <div className="col-4 label">Last name: </div>
                    <div className="col-8">{targetUser.lastName}</div>
                </div>

                <div className="row">
                    <div className="col-4 label">Email: </div>
                    <div className="col-8">{targetUser.email}</div>
                </div>

                <div className="row">
                    <div className="col-4 label">Phone number: </div>
                    <div className="col-8">{targetUser.phoneNumber}</div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserInfoModal;
