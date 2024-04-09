import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/ProductService";

function TableProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetchAllProducts().then((response) => setProducts(response.data.items));
    };

    const renderProducts = (items) => items.map((item) => renderProduct(item));

    const renderProduct = (item) => (
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
    );
}

export default TableProducts;
