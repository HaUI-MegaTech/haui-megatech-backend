import { useEffect, useState } from "react";
import { fetchLatestOrders } from "../../services/HomeService";

function RecentSales() {
    const [data, setData] = useState();
    const formatter = new Intl.NumberFormat("en-US");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchLatestOrders()
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    };

    const renderLatestOrders = data =>
        data.map((item, index) => renderLatestOrder(item, index));

    const renderLatestOrder = (item, index) => (
        <tr key={index}>
            <th scope="row">
                <a href="#">{item.id}</a>
            </th>
            <td>{item.customer}</td>
            <td>
                <a href="#" className="text-primary">
                    {item.orderTime}
                </a>
            </td>
            <td>{formatter.format(item.total)}đ</td>
            <td>
                <span className="badge bg-success">{item.status}</span>
            </td>
        </tr>
    );

    return (
        <div className="card recent-sales overflow-auto">
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

            <div className="card-body">
                <h5 className="card-title">Đơn hàng gần đây</h5>
                <div class="datatable-top">
                    <div class="datatable-dropdown">
                        <label>
                            <select class="datatable-selector" name="per-page">
                                <option value="5">5</option>
                                <option value="10" selected="">
                                    10
                                </option>
                                <option value="15">15</option>
                                <option value="-1">All</option>
                            </select>{" "}
                            entries per page
                        </label>
                    </div>
                    <div class="datatable-search">
                        <input
                            class="datatable-input"
                            placeholder="Search..."
                            type="search"
                            name="search"
                            title="Search within table"
                        />
                    </div>
                </div>
                <table className="table table-borderless datatable">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Khách hàng</th>
                            <th scope="col">Thời gian thanh toán</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>{data && renderLatestOrders(data)}</tbody>
                </table>
            </div>
        </div>
    );
}

export default RecentSales;
