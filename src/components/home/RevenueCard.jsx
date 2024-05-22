import { useEffect, useState } from "react";
import { fetchTotalProductRevenue } from "../../services/HomeService";
import CountUp from "react-countup";

function RevenueCard() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalProductRevenue()
            .then(res => setData(res.data.item))
            .catch(err => console.log(err));
    };

    return (
        <div className="card info-card revenue-card">
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
                <h5 className="card-title">Tổng doanh thu</h5>

                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                        <h6>
                            {data && (
                                <CountUp
                                    start={0}
                                    end={data}
                                    duration={2.75}
                                    separator=","
                                />
                            )}
                        </h6>
                        <span className="text-black small pt-1 fw-bold">
                            VNĐ
                        </span>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RevenueCard;
