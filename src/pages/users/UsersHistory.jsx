import { useState } from "react";
import UserHistoryTable from "../../components/users/UserHistoryTable";
import { getActivityLogs } from "../../services/UserService";
import PageTitle from "../../components/shared/PageTitle";

function UsersHistory() {
    const [items, setItems] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();

    const getItems = data => {
        getActivityLogs(data)
            .then(response => {
                setPageIndex(response.data.meta.pagination.pageIndex);
                setPageSize(response.data.meta.pagination.pageSize);
                setTotalItems(response.data.meta.pagination.totalItems);
                setTotalPages(response.data.meta.pagination.totalPages);
                setItems(response.data.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <main id="main" className="main">
            <PageTitle
                title="Lịch sử"
                level1="Trang chủ"
                level2="Người dùng"
                level3="Lịch sử"
            />

            <section className="section mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <UserHistoryTable
                                    items={items}
                                    pageIndex={pageIndex}
                                    pageSize={pageSize}
                                    totalItems={totalItems}
                                    totalPages={totalPages}
                                    getItems={getItems}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UsersHistory;
