import Chart from "react-apexcharts";

function BrandRevenueColumnChart() {
    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    horizontal: true,
                },
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
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">Example Card</h5>
                <div>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                    />
                </div>
            </div>
        </div>
    );
}

export default BrandRevenueColumnChart;
