import { useEffect, useState } from "react";
import { fetchTotalProductRevenue } from "../../../services/HomeService";
import CountUp from "react-countup";

function RevenueCard() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalProductRevenue()
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    };

    return (
        <div className="card info-card revenue-card">
            <div className="card-body">
                <h5 className="card-title">Tổng lợi nhuận</h5>

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
