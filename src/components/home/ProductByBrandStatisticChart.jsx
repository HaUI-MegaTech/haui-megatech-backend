import Chart from "react-apexcharts";

function ProductByBrandStatisticChart() {
    const state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ["A", "B", "C", "D", "E"],
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
                    Budget Report <span>| This Month</span>
                </h5>

                <div
                    id="budgetChart"
                    style={{ minHeight: 400 }}
                    className="echart"
                >
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="donut"
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductByBrandStatisticChart;
