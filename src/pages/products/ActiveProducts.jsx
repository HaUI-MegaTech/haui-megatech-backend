import { useState } from "react";
import TableActiveProducts from "../../components/products/TableActiveProducts";
import { getActiveProducts } from "../../services/ProductService";
import { Button } from "react-bootstrap";
import PageTitle from "../../components/shared/PageTitle";

function ActiveProducts() {
    const [products, setProducts] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();
    const [showAddProductModal, setShowAddProductModal] = useState(false);

    const handleUpdateTable = () => {
        getProducts({
            index: 0,
            limit: 10,
            direction: "desc",
            field: "id",
            keyword: "",
        });
    };

    const getProducts = data => {
        getActiveProducts(data)
            .then(response => {
                setPageIndex(response.data.meta.pagination.pageIndex);
                setPageSize(response.data.meta.pagination.pageSize);
                setTotalItems(response.data.meta.pagination.totalItems);
                setTotalPages(response.data.meta.pagination.totalPages);
                setProducts(response.data.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between mb-3">
                <PageTitle />
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <Button variant="primary" size="md">
                        Thêm mới
                    </Button>
                </div>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body pb-0">
                                <TableActiveProducts
                                    products={products}
                                    pageIndex={pageIndex}
                                    pageSize={pageSize}
                                    totalItems={totalItems}
                                    totalPages={totalPages}
                                    handleUpdateTable={handleUpdateTable}
                                    getProducts={getProducts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ActiveProducts;
