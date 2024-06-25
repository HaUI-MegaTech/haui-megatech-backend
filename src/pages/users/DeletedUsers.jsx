import { useEffect, useState } from "react";
import PageTitle from "../../components/shared/PageTitle";
import TableDeletedUsers from "../../components/users/TableDeletedUsers";
import { fetchAllDeletedUsers } from "../../services/UserService";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { Button } from "react-bootstrap";
import HardDeleteListUsersModal from "../../components/users/HardDeleteListUsersModal";
import RestoreListUsersModal from "../../components/users/RestoreListUsersModal";

function DeletedUsers() {
    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState("");

    const [users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();

    const [selectedList, setSelectedList] = useState([]);

    const [showHardDeleteListUsers, setShowHardDeleteListUsers] =
        useState(false);
    const [showRestoreListUsers, setShowRestoreListUsers] = useState(false);

    const handleShowHardDeleteListUsers = () =>
        setShowHardDeleteListUsers(true);
    const handleCloseHardDeleteListUsers = () =>
        setShowHardDeleteListUsers(false);

    const handleShowRestoreListUsers = () => setShowRestoreListUsers(true);
    const handleCloseRestoreListUsers = () => setShowRestoreListUsers(false);

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
                <div className="col-6 d-flex align-items-center justify-content-end">
                    {selectedList.length > 1 && (
                        <Button
                            variant="success me-2"
                            onClick={handleShowRestoreListUsers}
                        >
                            <i className="bi bi-arrow-counterclockwise"></i>
                            &nbsp;Khôi phục
                        </Button>
                    )}
                    {selectedList.length > 1 && (
                        <Button
                            variant="danger"
                            onClick={handleShowHardDeleteListUsers}
                        >
                            <i class="bi bi-trash"></i>&nbsp;Xoá vĩnh viễn
                        </Button>
                    )}
                </div>
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

            <HardDeleteListUsersModal
                show={showHardDeleteListUsers}
                handleClose={handleCloseHardDeleteListUsers}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                getUsers={getUsers}
                index={index}
                field={field}
                direction={direction}
                limit={limit}
                keyword={keyword}
            />

            <RestoreListUsersModal
                show={showRestoreListUsers}
                handleClose={handleCloseRestoreListUsers}
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                getUsers={getUsers}
                index={index}
                field={field}
                direction={direction}
                limit={limit}
                keyword={keyword}
            />
        </main>
    );
}

export default DeletedUsers;
