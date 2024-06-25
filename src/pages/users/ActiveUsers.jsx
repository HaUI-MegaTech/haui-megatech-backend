import { useEffect, useState } from "react";
import {
    fetchAllActiveUsers,
    softDeleteUser,
    softDeleteUserList,
} from "../../services/UserService";
import { Button } from "react-bootstrap";
import TableActiveUsers from "../../components/users/TableActiveUsers";
import AddUserModal from "../../components/users/AddUserModal";
import PageTitle from "../../components/shared/PageTitle";

import { CSVLink, CSVDownload } from "react-csv";
import ImportUserModal from "../../components/users/ImportUserModal";
import { toast } from "react-toastify";
import SoftDeleteListUsersModal from "../../components/users/SoftDeleteListUsersModal";
import ResetPasswordListUsersModal from "../../components/users/ResetPasswordListUsersModal";

function ActiveUsers() {
    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState("");

    const [users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showImportUserModal, setShowImportUserModal] = useState(false);
    const [showSoftDeleteListUsersModal, setShowSoftDeleteListUserModal] =
        useState(false);
    const [showResetPasswordListUsersModal, setShowRestPasswordListUsersModal] =
        useState(false);

    const [selectedList, setSelectedList] = useState([]);

    const handleShowAddUserModal = () => setShowAddUserModal(true);
    const handleCloseAddUserModal = () => setShowAddUserModal(false);
    const handleShowImportUserModal = () => setShowImportUserModal(true);
    const handleCloseImportUserModal = () => setShowImportUserModal(false);
    const handleShowSoftDeleteListUsersModal = () =>
        setShowSoftDeleteListUserModal(true);
    const handleCloseSoftDeleteListUsersModal = () =>
        setShowSoftDeleteListUserModal(false);
    const handleShowResetPasswordListUsersModal = () => {
        setShowRestPasswordListUsersModal(true);
    };

    const handleCloseResetPasswordListUsersModal = () => {
        setShowRestPasswordListUsersModal(false);
    };

    const handleUpdateTable = () => {
        getUsers({ index, limit, field, direction, keyword });
    };

    const getUsers = data => {
        fetchAllActiveUsers(data)
            .then(response => {
                setPageIndex(response.data.meta.pagination.pageIndex);
                setPageSize(response.data.meta.pagination.pageSize);
                setTotalItems(response.data.meta.pagination.totalItems);
                setTotalPages(response.data.meta.pagination.totalPages);
                setUsers(response.data.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between mb-3">
                <PageTitle />
                <div className="col-6 d-flex align-items-center justify-content-end">
                    {selectedList.length > 1 && (
                        <Button
                            variant="success me-2"
                            size="md"
                            onClick={handleShowResetPasswordListUsersModal}
                        >
                            <i class="bi bi-key"></i>&nbsp;Cấp lại mật khẩu
                        </Button>
                    )}
                    {selectedList.length > 1 && (
                        <Button
                            variant="danger me-2"
                            size="md"
                            onClick={handleShowSoftDeleteListUsersModal}
                        >
                            <i class="bi bi-trash"></i>&nbsp;Xoá tạm thời
                        </Button>
                    )}
                    <Button
                        variant="warning me-2"
                        size="md"
                        onClick={handleShowImportUserModal}
                    >
                        <i class="bi bi-download"></i>&nbsp;Nhập
                    </Button>
                    <Button variant="success me-2">
                        <CSVLink
                            data={users}
                            className="text-white"
                            filename="user-data"
                        >
                            <i class="bi bi-upload"></i>&nbsp;Xuất
                        </CSVLink>
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        onClick={handleShowAddUserModal}
                    >
                        <i class="bi bi-person-plus"></i>&nbsp;Thêm mới
                    </Button>
                </div>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <TableActiveUsers
                                    users={users}
                                    pageIndex={pageIndex}
                                    pageSize={pageSize}
                                    totalItems={totalItems}
                                    totalPages={totalPages}
                                    handleUpdateTable={handleUpdateTable}
                                    getUsers={getUsers}
                                    selectedList={selectedList}
                                    setSelectedList={setSelectedList}
                                    index={index}
                                    setIndex={setIndex}
                                    field={field}
                                    setField={setField}
                                    direction={direction}
                                    setDirection={setDirection}
                                    limit={limit}
                                    setLimit={setLimit}
                                    keyword={keyword}
                                    setKeyword={setKeyword}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AddUserModal
                show={showAddUserModal}
                handleClose={handleCloseAddUserModal}
                handleUpdateTable={handleUpdateTable}
            />
            <ImportUserModal
                show={showImportUserModal}
                handleClose={handleCloseImportUserModal}
                getUsers={getUsers}
            />
            <SoftDeleteListUsersModal
                show={showSoftDeleteListUsersModal}
                handleClose={handleCloseSoftDeleteListUsersModal}
                selectedList={selectedList}
                getUsers={getUsers}
                setSelectedList={setSelectedList}
                index={index}
                field={field}
                direction={direction}
                limit={limit}
                keyword={keyword}
            />
            <ResetPasswordListUsersModal
                show={showResetPasswordListUsersModal}
                handleClose={handleCloseResetPasswordListUsersModal}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
            />
        </main>
    );
}

export default ActiveUsers;
