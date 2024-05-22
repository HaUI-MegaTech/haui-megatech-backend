import { useEffect, useState } from "react";
import { fetchTopSoldProducts } from "../../services/HomeService";

function TopSelling() {
    const [data, setData] = useState();
    const formatter = new Intl.NumberFormat("en-US");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTopSoldProducts()
            .then(res => setData(res.data.items))
            .catch(err => console.log(err));
    };

    const renderTopSoldProductItem = item => (
        <tr>
            <th scope="row">
                <a href="#">
                    <img src={item.mainImageUrl} alt="" />
                </a>
            </th>
            <td>
                <a href="#" className="text-primary fw-bold">
                    {item.name}
                </a>
            </td>
            <td>{formatter.format(item.newPrice)}</td>
            <td className="fw-bold">{item.totalSold}</td>
            <td>{formatter.format(item.revenue)}</td>
        </tr>
    );

    const renderTopSoldProductItems = data =>
        data.map(item => renderTopSoldProductItem(item));

    console.log(data);

    return (
        <div className="card top-selling overflow-auto">
            <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Today
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            This Month
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            This Year
                        </a>
                    </li>
                </ul>
            </div>

            <div className="card-body pb-0">
                <h5 className="card-title">Top sản phẩm bán chạy nhất</h5>

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá bán</th>
                            <th scope="col">Đã bán</th>
                            <th scope="col">Doanh thu</th>
                        </tr>
                    </thead>
                    <tbody>{data && renderTopSoldProductItems(data)}</tbody>
                </table>
            </div>
        </div>
    );
}

export default TopSelling;
