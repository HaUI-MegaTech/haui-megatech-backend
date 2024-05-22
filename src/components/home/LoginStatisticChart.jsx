import Chart from "react-apexcharts";
import { fetchLoginStatistics } from "../../services/HomeService";
import { useEffect, useState } from "react";

function LoginStatisticChart() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const categories = data && data.map(item => item.date);
    console.log(categories);

    console.log(data);

    const getData = () => {
        fetchLoginStatistics()
            .then(response => {
                setData(response.data.items);
            })
            .catch(error => console.log(error));
    };

    const state = {
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
                    Reports <span>/Today</span>
                </h5>

                <div id="reportsChart">
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginStatisticChart;
