import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import UserInfoModal from "./UserInfoModal";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import ChangeUserPasswordModal from "./ChangeUserPasswordModal";
import TemporarilyDeleteUserModal from "./TemporarilyDeleteUserModal";

function TableActiveUsers(props) {
    const {
        users,
        pageIndex,
        pageSize,
        totalItems,
        totalPages,
        handleUpdateTable,
        getUsers,
    } = props;

    const [targetUser, setTargetUser] = useState({});

    const [showTemporarilyDeleteUserModal, setShowTemporarilyDeleteUserModal] =
        useState(false);
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showUpdateUserInfoModal, setShowUpdateUserInfoModal] =
        useState(false);
    const [showChangeUserPasswordModal, setShowChangeUserPasswordModal] =
        useState(false);

    const handleCloseTemorarilyDeleteUserModal = () =>
        setShowTemporarilyDeleteUserModal(false);

    const handleTemporarilyDeleteUser = item => {
        setTargetUser(item);
        setShowTemporarilyDeleteUserModal(true);
    };

    const handleShowUserInfoModal = item => {
        setTargetUser(item);
        setShowUserInfoModal(true);
    };

    const handleCloseUserInfoModal = () => setShowUserInfoModal(false);

    const handleShowUpdateUserInfoModal = item => {
        setTargetUser(item);
        setShowUpdateUserInfoModal(true);
    };

    const handleCloseUpdateUserInfoModal = () =>
        setShowUpdateUserInfoModal(false);

    const handleShowChangeUserPasswordModal = item => {
        setTargetUser(item);
        setShowChangeUserPasswordModal(true);
    };

    const handleCloseChangeUserPasswordModal = () =>
        setShowChangeUserPasswordModal(false);

    useEffect(() => {
        getUsers(0);
    }, []);

    const renderUsers = items => items.map(item => renderUser(item));

    const handlePageClick = e => {
        getUsers(parseInt(e.selected));
    };

    const renderUser = item => (
        <tr key={item.id}>
            <th scope="row" className="align-middle">
                {item.id}
            </th>
            <td className="align-middle">{item.username}</td>
            <td className="align-middle">{item.firstName}</td>
            <td className="align-middle">{item.lastName}</td>
            <td className="align-middle">{item.email}</td>
            <td className="align-middle">{item.phoneNumber}</td>
            <td className="d-flex justify-content-center">
                <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleShowUserInfoModal(item)}
                    className="mx-2"
                >
                    <i className="bi bi-eye"></i>
                </Button>

                <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleShowUpdateUserInfoModal(item)}
                    className="mx-2"
                >
                    <i className="bi bi-pencil-square"></i>
                </Button>

                <Button
                    variant="success"
                    size="sm"
                    onClick={() => handleShowChangeUserPasswordModal(item)}
                    className="mx-2"
                >
                    <i className="bi bi-key"></i>
                </Button>

                <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleTemporarilyDeleteUser(item)}
                    className="mx-2"
                >
                    <i className="bi bi-trash"></i>
                </Button>
            </td>
        </tr>
    );

    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên đăng nhập</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Họ đệm</th>
                            <th scope="col">Hộp thư</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col" className="text-center">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>{renderUsers(users)}</tbody>
                </table>
            </div>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={totalPages}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>

            <UserInfoModal
                show={showUserInfoModal}
                handleClose={handleCloseUserInfoModal}
                targetUser={targetUser}
            />

            <UpdateUserInfoModal
                show={showUpdateUserInfoModal}
                handleClose={handleCloseUpdateUserInfoModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />

            <ChangeUserPasswordModal
                show={showChangeUserPasswordModal}
                handleClose={handleCloseChangeUserPasswordModal}
                targetUser={targetUser}
            />

            <TemporarilyDeleteUserModal
                show={showTemporarilyDeleteUserModal}
                handleClose={handleCloseTemorarilyDeleteUserModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />
        </>
    );
}

export default TableActiveUsers;
