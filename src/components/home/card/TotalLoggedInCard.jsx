import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchTotalLoggedIn } from "../../../services/HomeService";

function TotalLoggedInCard() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalLoggedIn()
            .then(res => setData(res.data.item))
            .catch(err => console.log(err));
    };

    return (
        <div className="card info-card total-logged-in-card">
            <div className="card-body">
                <h5 className="card-title">Tổng lượt đăng nhập</h5>

                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-box-arrow-in-right"></i>
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
                            Lượt đăng nhập
                        </span>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalLoggedInCard;
