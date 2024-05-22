import { useEffect, useState } from "react";
import { fetchAllDeletedUsers } from "../../services/UserService";
import ReactPaginate from "react-paginate";
import UserInfoModal from "./UserInfoModal";
import { Button } from "react-bootstrap";
import RestoreUserModal from "./RestoreUserModal";
import PermanentlyDeleteUserModal from "./PermanentlyDeleteUserModal";

function TableDeletedUsers(props) {
    const {
        users,
        pageIndex,
        pageSize,
        totalItems,
        totalPages,
        handleUpdateTable,
        getUsers,
    } = props;

    const renderUsers = items => items.map(item => renderUser(item));

    const handlePageClick = e => {
        getUsers(parseInt(e.selected));
    };

    const [targetUser, setTargetUser] = useState({});
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showRestoreUserModal, setShowRestoreUserModal] = useState(false);
    const [showPermanentlyDeleteUserModal, setShowPermanentlyDeleteUserModal] =
        useState(false);

    const handleShowUserInfoModal = item => {
        setTargetUser(item);
        setShowUserInfoModal(true);
    };

    const handleCloseUserInfoModal = () => setShowUserInfoModal(false);

    const handleShowRestoreUserModal = item => {
        setTargetUser(item);
        setShowRestoreUserModal(true);
    };

    const handleCloseRestoreUserInfoModal = () =>
        setShowRestoreUserModal(false);

    const handleShowPermanentlyDeleteUserModal = item => {
        setTargetUser(item);
        setShowPermanentlyDeleteUserModal(true);
    };

    const handleClosePermanentlyUserModal = () =>
        setShowPermanentlyDeleteUserModal(false);

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
                    className="mx-2"
                    size="sm"
                    variant="info"
                    onClick={() => handleShowUserInfoModal(item)}
                >
                    <i className="bi bi-eye"></i>
                </Button>
                <Button
                    variant="success"
                    size="sm"
                    className="mx-2"
                    onClick={() => handleShowRestoreUserModal(item)}
                >
                    <i className="bi bi-arrow-counterclockwise"></i>
                </Button>
                <Button
                    variant="danger"
                    className="mx-2"
                    size="sm"
                    onClick={() => handleShowPermanentlyDeleteUserModal(item)}
                >
                    <i className="bi bi-trash"></i>
                </Button>
            </td>
        </tr>
    );

    return (
        <>
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
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"
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

            <RestoreUserModal
                show={showRestoreUserModal}
                handleClose={handleCloseRestoreUserInfoModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />

            <PermanentlyDeleteUserModal
                show={showPermanentlyDeleteUserModal}
                handleClose={handleClosePermanentlyUserModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />
        </>
    );
}

export default TableDeletedUsers;
