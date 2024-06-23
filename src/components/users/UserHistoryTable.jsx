import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function UserHistoryTable(props) {
    const { pageIndex, totalPages, items, getItems } = props;

    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState();

    const limitList = [10, 25, 50, 100];

    useEffect(() => {
        getItems({ index, field, direction, limit });
    }, [index, field, direction, limit]);

    const renderUser = item => (
        <tr key={item.id}>
            <th scope="row" className="align-middle">
                {item.id}
            </th>
            <td className="align-middle">{item.operation}</td>
            <td className="align-middle">{item.whenCreated}</td>
            <td className="align-middle">{item.subject}</td>
        </tr>
    );

    const handlePageClick = e => {
        setIndex(parseInt(e.selected));
    };

    console.log(items);

    const renderItems = items => items.map(item => renderUser(item));

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
                                    setField("operation");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Thao tác&nbsp;
                                {field === "operation" &&
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
                                    setField("whenCreated");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Thời gian&nbsp;
                                {field === "whenCreated" &&
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
                                    setField("subject");
                                }}
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                            >
                                Người thực hiện&nbsp;
                                {field === "subject" &&
                                    (direction == "desc" ? (
                                        <i class="bi bi-caret-down-fill"></i>
                                    ) : (
                                        <i class="bi bi-caret-up-fill"></i>
                                    ))}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {renderItems(items)}
                    </tbody>
                </table>
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
        </>
    );
}

export default UserHistoryTable;
