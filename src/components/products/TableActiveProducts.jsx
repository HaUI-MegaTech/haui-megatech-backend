import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/ProductService";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";
import ProductDetailModal from "./ProductDetailModal";

function TableProducts() {
    const [products, setProducts] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();
    const [targetItem, setTargetItem] = useState({});

    const [showProductDetailModal, setShowProductDetailModal] = useState(false);

    const handleShowProductDetailModal = item => {
        setTargetItem(item);
        setShowProductDetailModal(true);
    };

    const handleCloseProductDetailModal = () => {
        setShowProductDetailModal(false);
    };

    useEffect(() => {
        getProducts(0);
    }, []);

    const getProducts = pageIndex => {
        fetchAllProducts(pageIndex)
            .then(response => {
                setPageIndex(response.data.meta.pagination.pageIndex);
                setPageSize(response.data.meta.pagination.pageSize);
                setTotalItems(response.data.meta.pagination.totalItems);
                setTotalPages(response.data.meta.pagination.totalPages);
                setProducts(response.data.data);
            })
            .catch(error => console.log(error));
    };

    const renderProducts = items => items.map(item => renderProduct(item));

    const handlePageClick = e => {
        getProducts(parseInt(e.selected));
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
            <td className="align-middle">{item.oldPrice}</td>
            <td className="align-middle">{item.newPrice}</td>
            <td className="align-middle text-center">
                <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleShowProductDetailModal(item)}
                    className="mx-2"
                >
                    <i className="bi bi-eye"></i>
                </Button>
                <button type="button" className="btn btn-warning btn-sm mx-2">
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mx-2">
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá cũ</th>
                        <th scope="col">Giá mới</th>
                        <th scope="col" className="text-center">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {renderProducts(products)}
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
        </>
    );
}

export default TableProducts;
