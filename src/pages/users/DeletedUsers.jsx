import { useEffect, useState } from "react";
import PageTitle from "../../components/shared/PageTitle";
import TableDeletedUsers from "../../components/users/TableDeletedUsers";
import { fetchAllDeletedUsers } from "../../services/UserService";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function DeletedUsers() {
    const [users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();

    const [selectedList, setSelectedList] = useState([]);

    useEffect(() => {
        getUsers({
            index: 0,
            limit: 10,
            field: "id",
            direction: "desc",
            keyword: "",
        });
    }, []);

    const getUsers = data => {
        fetchAllDeletedUsers(data)
            .then(response => {
                setPageIndex(response.data.meta.pagination.pageIndex);
                setPageSize(response.data.meta.pagination.pageSize);
                setTotalItems(response.data.meta.pagination.totalItems);
                setTotalPages(response.data.meta.pagination.totalPages);
                setUsers(response.data.data);
            })
            .catch(error => console.log(error));
    };

    const handleUpdateTable = () => {
        getUsers({
            index: 0,
            limit: 10,
            field: "id",
            direction: "desc",
            keyword: "",
        });
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
                                    selectedList={selectedList}
                                    setSelectedList={setSelectedList}
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
