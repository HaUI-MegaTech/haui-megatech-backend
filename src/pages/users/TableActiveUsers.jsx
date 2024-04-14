import { useEffect, useState } from "react";
import { fetchAllActiveUsers } from "../../services/UserService";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import DeleteUserModal from "./DeleteUserModal";

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

    const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);

    const handleShowDeleteUserModal = () => {
        setShowDeleteUserModal(true);
    };

    const handleCloseDeleteUserModal = () => {
        setShowDeleteUserModal(false);
    };

    const handleTemporarilyDeleteUser = item => {
        setTargetUser(item);
        setShowDeleteUserModal(true);
    };

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
                <a
                    className="btn btn-secondary btn-sm mx-2"
                    href="#"
                    role="button"
                >
                    <i class="bi bi-eye"></i>
                </a>
                <button type="button" className="btn btn-warning btn-sm mx-2">
                    <i class="bi bi-pencil-square"></i>
                </button>

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

            <DeleteUserModal
                show={showDeleteUserModal}
                handleClose={handleCloseDeleteUserModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />
        </>
    );
}

export default TableActiveUsers;
