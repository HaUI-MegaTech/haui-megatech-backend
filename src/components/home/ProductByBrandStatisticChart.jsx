import Chart from "react-apexcharts";

function ProductByBrandStatisticChart() {
    const state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ["A", "B", "C", "D", "E"],
    };
    return (
        <div class="card">
            <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                    </li>

                    <li>
                        <a class="dropdown-item" href="#">
                            Today
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            This Month
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            This Year
                        </a>
                    </li>
                </ul>
            </div>

            <div class="card-body pb-0">
                <h5 class="card-title">
                    Budget Report <span>| This Month</span>
                </h5>

                <div id="budgetChart" style={{ minHeight: 400 }} class="echart">
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
