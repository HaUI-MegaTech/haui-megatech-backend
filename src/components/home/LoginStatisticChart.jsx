import Chart from "react-apexcharts";

function LoginStatisticChart() {
    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                ],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
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
            <div class="card-body">
                <h5 class="card-title">
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
