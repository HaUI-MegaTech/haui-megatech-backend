import Chart from "react-apexcharts";

function BrandRevenuePieChart() {
    const state = {
        options: {
            plotOptions: {
                pie: {
                    customScale: 1.0,
                },
            },
        },
        series: [44, 55, 41, 17, 15],
        labels: ["A", "B", "C", "D", "E"],
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">Example Card</h5>
                <div>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="donut"
                    />
                </div>
            </div>
        </div>
    );
}

export default BrandRevenuePieChart;
