import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/ProductService";
import ReactPaginate from "react-paginate";

function TableProducts() {
    const [products, setProducts] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        getProducts(0);
    }, []);

    const getProducts = pageIndex => {
        fetchAllProducts(pageIndex).then(response => {
            setPageIndex(response.data.pageIndex);
            setPageSize(response.data.pageSize);
            setTotalItems(response.data.totalItems);
            setTotalPages(response.data.totalPages);
            setProducts(response.data.items);
        });
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
            <td className="align-middle">{item.name}</td>
            <td className="align-middle">{item.price}</td>
            <td className="d-flex justify-content-center">
                <a
                    className="btn btn-secondary btn-sm mx-2"
                    href="#"
                    role="button"
                >
                    <i class="bi bi-eye"></i>
                </a>
                <button type="button" className="btn btn-warning btn-sm mx-2">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mx-2">
                    <i class="bi bi-trash"></i>
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
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá bán</th>
                        <th scope="col" className="text-center">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>{renderProducts(products)}</tbody>
            </table>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"
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
        </>
    );
}

export default TableProducts;
