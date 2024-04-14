import { useEffect, useState } from "react";
import { fetchAllActiveUsers } from "../../services/UserService";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import DeleteUserModal from "./DeleteUserModal";
import UserInfoModal from "./UserInfoModal";
import UpdateUserInfoModal from "./UpdateUserInfoModal";

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

    useEffect(() => {
        getUsers(0);
    }, []);

    const renderUsers = items => items.map(item => renderUser(item));

    const handlePageClick = e => {
        getUsers(parseInt(e.selected));
    };

    const renderUser = item => (
        <tr>
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
                    variant="primary"
                    onClick={() => handleShowUserInfoModal(item)}
                    className="btn btn-info btn-sm mx-2"
                >
                    <i class="bi bi-eye"></i>
                </Button>

                <Button
                    variant="primary"
                    onClick={() => handleShowUpdateUserInfoModal(item)}
                    className="btn btn-warning btn-sm mx-2"
                >
                    <i class="bi bi-pencil-square"></i>
                </Button>

                <Button
                    variant="primary"
                    onClick={() => {}}
                    className="btn btn-success btn-sm mx-2"
                >
                    <i class="bi bi-key"></i>
                </Button>

                <Button
                    variant="primary"
                    onClick={() => handleTemporarilyDeleteUser(item)}
                    className="btn btn-danger btn-sm mx-2"
                >
                    <i class="bi bi-trash"></i>
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

            <DeleteUserModal
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
