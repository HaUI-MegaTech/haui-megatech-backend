import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchBrandStatistics } from "../../services/HomeService";

function ProductByBrandStatisticChart() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchBrandStatistics()
            .then(res => {
                setData(res.data.items);
            })
            .catch(error => console.log(error));
    };

    let state = {
        series: data && data.map(item => item.count),
        labels: data && data.map(item => item.name),
        options: {
            series: data && data.map(item => item.count),
            labels: data && data.map(item => item.name),
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                        },
                    },
                },
            },
        },
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

            <div className="card-body pb-0">
                <h5 className="card-title">
                    Thống kê số lượng sản phẩm theo thương hiệu
                </h5>

                <div id="budgetChart" className="echart">
                    {data && (
                        <Chart
                            options={state.options}
                            series={state?.series}
                            labels={state?.labels}
                            type="donut"
                            height={400}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductByBrandStatisticChart;
