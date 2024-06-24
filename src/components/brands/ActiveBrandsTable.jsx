import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function ActiveBrandsTable(props) {
    const { pageIndex, totalPages, totalItems, items, getItems } = props;

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
            <td className="align-middle">
                {" "}
                <img src={item.image} alt="" style={{ maxWidth: 60 }} />
            </td>
            <td className="align-middle">{item.name}</td>
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
                                Hình ảnh&nbsp;
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
                                Tên thương hiệu&nbsp;
                                {field === "whenCreated" &&
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
                containerClassName="pagination mb-3"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default ActiveBrandsTable;
