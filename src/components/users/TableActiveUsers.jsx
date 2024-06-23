import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import UserInfoModal from "./UserInfoModal";
import UpdateUserInfoModal from "./UpdateUserInfoModal";
import ChangeUserPasswordModal from "./ResetUserPasswordModal";
import SoftDeleteUserModal from "./SoftDeleteUserModal";

function TableActiveUsers(props) {
    const { users, pageIndex, totalPages, handleUpdateTable, getUsers } = props;

    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);

    const limitList = [10, 25, 50, 100];

    const [targetUser, setTargetUser] = useState({});

    const [showSoftDeleteUserModal, setShowSoftDeleteUserModal] =
        useState(false);
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showUpdateUserInfoModal, setShowUpdateUserInfoModal] =
        useState(false);
    const [showChangeUserPasswordModal, setShowChangeUserPasswordModal] =
        useState(false);

    const handleCloseSoftDeleteUserModal = () =>
        setShowSoftDeleteUserModal(false);

    const handleSoftDeleteUser = item => {
        setTargetUser(item);
        setShowSoftDeleteUserModal(true);
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
        getUsers({ index, field, direction, limit });
    }, [index, direction, field, limit]);

    const renderUsers = items => items.map(item => renderUser(item));

    const handlePageClick = e => {
        setIndex(parseInt(e.selected));
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
                    onClick={() => handleSoftDeleteUser(item)}
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
                            <th
                                scope="col"
                                onClick={() => {
                                    direction === "desc"
                                        ? setDirection("asc")
                                        : setDirection("desc");
                                    setField("id");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                #&nbsp;
                                {field === "id" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                            <th
                                scope="col"
                                onClick={() => {
                                    direction === "desc"
                                        ? setDirection("asc")
                                        : setDirection("desc");
                                    setField("username");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Tên đăng nhập&nbsp;
                                {field === "username" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                            <th
                                scope="col"
                                onClick={() => {
                                    direction === "desc"
                                        ? setDirection("asc")
                                        : setDirection("desc");
                                    setField("firstName");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Tên&nbsp;
                                {field === "firstName" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                            <th
                                scope="col"
                                onClick={() => {
                                    direction === "desc"
                                        ? setDirection("asc")
                                        : setDirection("desc");
                                    setField("lastName");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Họ đệm&nbsp;
                                {field === "lastName" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                            <th
                                scope="col"
                                onClick={() => {
                                    direction === "desc"
                                        ? setDirection("asc")
                                        : setDirection("desc");
                                    setField("email");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Hộp thư&nbsp;
                                {field === "email" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                            <th
                                scope="col"
                                onClick={() => {
                                    direction === "desc"
                                        ? setDirection("asc")
                                        : setDirection("desc");
                                    setField("phoneNumber");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Số điện thoại&nbsp;
                                {field === "phoneNumber" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                            <th scope="col" className="text-center">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>{renderUsers(users)}</tbody>
                </table>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="row">
                    <div className="col-8 d-flex align-items-center">
                        Số bản ghi trên 1 trang:
                    </div>
                    <div className="col-4">
                        <select
                            class="form-select w-100"
                            aria-label="Small select example"
                            onChange={e => setLimit(e.target.value)}
                        >
                            {limitList.map(item => (
                                <option value={item} selected={limit == item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
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
                    containerClassName="pagination mb-0"
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

            <SoftDeleteUserModal
                show={showSoftDeleteUserModal}
                handleClose={handleCloseSoftDeleteUserModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />
        </>
    );
}

export default TableActiveUsers;
