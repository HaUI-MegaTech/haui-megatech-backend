import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchTotalSoldProducts } from "../../../services/HomeService";

function SalesCard() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalSoldProducts()
            .then(res => setData(res.data.item))
            .catch(err => console.log(err));
    };

    return (
        <div className="card info-card sales-card">
            <div className="card-body">
                <h5 className="card-title">Tổng đã bán</h5>

                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                    </div>
                    <div className="ps-3">
                        <h6
                            className="purecounter"
                            data-purecounter-start="0"
                            data-purecounter-end="9001"
                        >
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
                            Sản phẩm
                        </span>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesCard;
