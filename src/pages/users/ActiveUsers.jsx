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

function ActiveUsers() {
    const [users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showImportUserModal, setShowImportUserModal] = useState(false);
    const [selectedList, setSelectedList] = useState([]);

    const handleShowAddUserModal = () => setShowAddUserModal(true);
    const handleCloseAddUserModal = () => setShowAddUserModal(false);
    const handleShowImportUserModal = () => setShowImportUserModal(true);
    const handleCloseImportUserModal = () => setShowImportUserModal(false);

    const handleUpdateTable = () => {
        getUsers({ index: 0, limit: 10, field: "id", direction: "desc" });
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

    const handleClickSoftDeleteUserList = async e => {
        const data = selectedList.join(",");
        await softDeleteUserList(data)
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    getUsers({
                        index: 0,
                        limit: 10,
                        field: "id",
                        direction: "desc",
                    });
                }
            })
            .catch(error => {
                // toast.error(error.response.data.meta.message);
            });
    };

    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between mb-3">
                <PageTitle />
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <Button
                        variant="success me-2"
                        size="md"
                        onClick={handleShowImportUserModal}
                    >
                        <i class="bi bi-key"></i>&nbsp;Cấp lại mật khẩu
                    </Button>

                    <Button
                        variant="danger me-2"
                        size="md"
                        onClick={handleClickSoftDeleteUserList}
                    >
                        <i class="bi bi-trash"></i>&nbsp;Xoá tạm thời
                    </Button>
                    <Button
                        variant="warning me-2"
                        size="md"
                        onClick={handleShowImportUserModal}
                    >
                        <i class="bi bi-upload"></i>&nbsp;Nhập
                    </Button>
                    <Button variant="success me-2">
                        <CSVLink
                            data={users}
                            className="text-white"
                            filename="user-data"
                        >
                            <i class="bi bi-download"></i>&nbsp;Xuất
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
        </main>
    );
}

export default ActiveUsers;
