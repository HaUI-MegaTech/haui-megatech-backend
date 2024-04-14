import { useState } from "react";
import { fetchAllActiveUsers } from "../../services/UserService";
import { Button } from "react-bootstrap";
import TableActiveUsers from "../../components/users/TableActiveUsers";
import AddUserModal from "../../components/users/AddUserModal";

function ActiveUsers() {
    const [users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();
    const [showAddUserModal, setShowAddUserModal] = useState(false);

    const handleShowAddUserModal = () => setShowAddUserModal(true);
    const handleCloseAddUserModal = () => setShowAddUserModal(false);

    const handleUpdateTable = () => {
        getUsers(pageIndex);
    };

    const getUsers = pageIndex => {
        fetchAllActiveUsers(pageIndex)
            .then(response => {
                setPageIndex(response.data.pageIndex);
                setPageSize(response.data.pageSize);
                setTotalItems(response.data.totalItems);
                setTotalPages(response.data.totalPages);
                setUsers(response.data.items);
            })
            .catch(error => console.log(error));
    };

    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between mb-3">
                <div className="pagetitle col-3 mb-0">
                    <h1>ActiveUsers Page</h1>
                    <nav>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">
                                ActiveUsers
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <Button
                        variant="primary"
                        class="btn btn-primary btn-sm"
                        onClick={handleShowAddUserModal}
                    >
                        Thêm mới
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
        </main>
    );
}

export default ActiveUsers;
