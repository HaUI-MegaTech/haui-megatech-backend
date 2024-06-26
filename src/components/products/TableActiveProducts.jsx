import { useEffect, useState } from "react";
import {
    getActiveProducts,
    getProductDetail,
} from "../../services/ProductService";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import ProductDetailModal from "./ProductDetailModal";
import UpdateProductModal from "./UpdateProductModal";

function TableProducts(props) {
    const {
        products,
        pageIndex,
        totalItems,
        totalPages,
        handleUpdateTable,
        getProducts,
    } = props;

    const [index, setIndex] = useState(0);
    const [field, setField] = useState("id");
    const [direction, setDirection] = useState("desc");
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState("");

    const limitList = [10, 25, 50, 100];

    const handleSearch = () => {
        getProducts({ index, field, direction, limit, keyword });
        console.log(keyword);
    };

    const handleCancelSearch = () => {
        setKeyword("");
        getProducts({ index, field, direction, limit, keyword: "" });
    };

    const [targetItem, setTargetItem] = useState({});

    const [showProductDetailModal, setShowProductDetailModal] = useState(false);
    const [showEditProductModal, setShowEditProductModal] = useState(false);

    const handleShowProductDetailModal = item => {
        setTargetItem(item);
        setShowProductDetailModal(true);
    };

    const handleCloseProductDetailModal = () => {
        setShowProductDetailModal(false);
    };

    const handleShowEditProductModal = item => {
        setShowEditProductModal(true);
        getTargetItem(item.id);
    };

    const handleCloseEditProductModal = () => {
        setShowEditProductModal(false);
    };

    useEffect(() => {
        getProducts({ index, limit, direction, field, keyword });
    }, [index, direction, limit, field]);

    const renderProducts = items => items.map(item => renderProduct(item));

    const handlePageClick = e => {
        setIndex(parseInt(e.selected));
    };

    const getTargetItem = id => {
        getProductDetail(id)
            .then(res => {
                if (res && res.status === 200) {
                    setTargetItem(res.data.data);
                }
            })
            .catch(err => console.log(err));
    };

    const renderProduct = item => (
        <tr>
            <th scope="row" className="align-middle">
                {item.id}
            </th>
            <td className="align-middle">
                {" "}
                <img src={item.mainImageUrl} alt="" style={{ maxWidth: 60 }} />
            </td>
            <td className="align-middle">{item.name}</td>
            <td className="align-middle">
                {item.oldPrice.toLocaleString("en-US")}
            </td>
            <td className="align-middle">
                {item.newPrice.toLocaleString("en-US")}
            </td>
            <td className="align-middle text-center">
                <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleShowProductDetailModal(item)}
                    className="mx-2"
                >
                    <i className="bi bi-eye"></i>
                </Button>
                <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleShowEditProductModal(item)}
                >
                    <i class="bi bi-pencil-square"></i>
                </Button>
                <button type="button" className="btn btn-danger btn-sm mx-2">
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );

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
                        <th scope="col">Hình ảnh</th>
                        <th
                            scope="col"
                            onClick={() => {
                                direction === "desc"
                                    ? setDirection("asc")
                                    : setDirection("desc");
                                setField("name");
                            }}
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                        >
                            Tên sản phẩm&nbsp;
                            {field === "name" &&
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
                                setField("oldPrice");
                            }}
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                        >
                            Giá cũ&nbsp;
                            {field === "oldPrice" &&
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
                                setField("currentPrice");
                            }}
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                        >
                            Giá hiện tại&nbsp;
                            {field === "currentPrice" &&
                                (direction == "desc" ? (
                                    <i class="bi bi-caret-down-fill"></i>
                                ) : (
                                    <i class="bi bi-caret-up-fill"></i>
                                ))}
                        </th>
                        <th scope="col" className="text-center">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {products && renderProducts(products)}
                </tbody>
            </table>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
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
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
            <ProductDetailModal
                show={showProductDetailModal}
                handleClose={handleCloseProductDetailModal}
                targetItem={targetItem}
            />
            <UpdateProductModal
                show={showEditProductModal}
                handleClose={handleCloseEditProductModal}
                targetItem={targetItem}
                handleUpdateTable={handleUpdateTable}
            />
        </>
    );
}

export default TableProducts;
