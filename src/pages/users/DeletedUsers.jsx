import { useEffect, useState } from "react";
import PageTitle from "../../components/shared/PageTitle";
import TableDeletedUsers from "../../components/users/TableDeletedUsers";
import { fetchAllDeletedUsers } from "../../services/UserService";

function DeletedUsers() {
    const [users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        getUsers(0);
    }, []);

    const getUsers = pageIndex => {
        fetchAllDeletedUsers(pageIndex)
            .then(response => {
                setPageIndex(response.data.data.pageIndex);
                setPageSize(response.data.data.pageSize);
                setTotalItems(response.data.data.totalItems);
                setTotalPages(response.data.data.totalPages);
                setUsers(response.data.data);
            })
            .catch(error => console.log(error));
    };

    const handleUpdateTable = () => {
        getUsers(pageIndex);
    };

    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between mb-3">
                <PageTitle />
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <TableDeletedUsers
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
        </main>
    );
}

export default DeletedUsers;
