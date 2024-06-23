import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import UserInfoModal from "./UserInfoModal";
import { Button } from "react-bootstrap";
import RestoreUserModal from "./RestoreUserModal";
import HardDeleteUserModal from "./HardDeleteUserModal";

function TableDeletedUsers(props) {
    const { users, pageIndex, totalPages, handleUpdateTable, getUsers } = props;

    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState();

    const renderUsers = items => items.map(item => renderUser(item));

    const handlePageClick = e => {
        setIndex(parseInt(e.selected));
    };

    const limitList = [10, 25, 50, 100];

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

    useEffect(() => {
        getUsers({ index, field, direction, limit, keyword: "" });
    }, [index, direction, field, limit]);

    const handleCloseRestoreUserInfoModal = () =>
        setShowRestoreUserModal(false);

    const handleShowPermanentlyDeleteUserModal = item => {
        setTargetUser(item);
        setShowPermanentlyDeleteUserModal(true);
    };

    const handleClosePermanentlyUserModal = () =>
        setShowPermanentlyDeleteUserModal(false);

    const handleSearch = () => {
        getUsers({ index, field, direction, limit, keyword });
    };

    const handleCancelSearch = () => {
        setKeyword("");
        getUsers({ index, field, direction, limit, keyword: "" });
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
            <div class="row mt-3 mb-3">
                <div class="col-8">
                    <div className="row d-flex align-items-center justify-content-start">
                        <div className="col-3">Số bản ghi trên 1 trang: </div>
                        <div className="col-2">
                            <select
                                class="form-select"
                                aria-label="Small select example"
                                onChange={e => setLimit(e.target.value)}
                            >
                                {limitList.map(item => (
                                    <option
                                        value={item}
                                        selected={limit == item}
                                    >
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Nhập từ khoá cần tìm"
                            onChange={e => setKeyword(e.target.value)}
                            value={keyword}
                        />
                        <button
                            class="btn btn-outline-primary"
                            type="button"
                            onClick={handleSearch}
                        >
                            Tìm kiếm
                        </button>
                        <button
                            class="btn btn-outline-danger"
                            type="button"
                            onClick={handleCancelSearch}
                        >
                            Huỷ bỏ
                        </button>
                    </div>
                </div>
            </div>

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
                <tbody className="table-group-divider">
                    {renderUsers(users)}
                </tbody>
            </table>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
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

            <RestoreUserModal
                show={showRestoreUserModal}
                handleClose={handleCloseRestoreUserInfoModal}
                targetUser={targetUser}
                currentPageIndex={pageIndex}
                handleUpdateTable={handleUpdateTable}
            />

            <HardDeleteUserModal
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
