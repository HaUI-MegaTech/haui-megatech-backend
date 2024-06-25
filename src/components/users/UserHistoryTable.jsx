import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function UserHistoryTable(props) {
    const { pageIndex, totalItems, totalPages, items, getItems } = props;

    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState();

    const limitList = [10, 25, 50, 100];

    useEffect(() => {
        getItems({ index, field, direction, limit, keyword: "" });
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

    const handleSearch = () => {
        getItems({ index, field, direction, limit, keyword });
    };

    const handleCancelSearch = () => {
        setKeyword("");
        getItems({ index, field, direction, limit, keyword: "" });
    };

    const renderItems = items => items.map(item => renderUser(item));

    return (
        <>
            <div class="row mt-3 mb-3">
                <div class="col-8">
                    <div className="d-flex align-items-center justify-content-start">
                        Số bản ghi trên 1 trang:&nbsp;&nbsp;
                        <div className="">
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
                        &nbsp;&nbsp;trong tổng số&nbsp;<b>{totalItems}</b>
                        &nbsp;bản ghi
                    </div>
                </div>
                <div class="col-4">
                    <div class="input-group mb-3">
                        <button
                            class="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Hành động
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Thêm mới
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Cập nhật thông tin
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Khôi phục mật khẩu
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Xoá tạm thời
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Khôi phục
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    Xoá vĩnh viễn
                                </a>
                            </li>
                        </ul>
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
                            <i class="bi bi-search"></i>
                        </button>
                        <button
                            class="btn btn-outline-danger"
                            type="button"
                            onClick={handleCancelSearch}
                        >
                            <i class="bi bi-x-circle"></i>
                        </button>
                    </div>
                </div>
            </div>

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
