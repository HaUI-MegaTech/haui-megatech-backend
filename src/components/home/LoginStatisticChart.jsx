import Chart from "react-apexcharts";
import { fetchLoginStatistics } from "../../services/HomeService";
import { useEffect, useState } from "react";

function LoginStatisticChart() {
    let [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchLoginStatistics()
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => console.log(error));
    };

    let state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: data && data.map(item => item.date),
            },
            dataLabels: {
                enabled: true,
            },
        },
        series: [
            {
                name: "Số lượt đăng nhập",
                data: data && data.map(item => item.loggedIn),
            },
        ],
    };

    return (
        <div className="card">
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
                <h5 className="card-title">
                    Thống kê lượt truy cập hệ thống <span>/Theo ngày</span>
                </h5>

                <div id="reportsChart">
                    {data && (
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            height={400}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginStatisticChart;
