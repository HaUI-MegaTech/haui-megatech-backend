import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchStatisticOrderByMonth } from "../../services/OrderService";

function OrderByMonthAreaChart() {
    const [data, setData] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchStatisticOrderByMonth()
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    };

    const state = {
        series: [
            {
                name: "STOCK ABC",
                data: data.prices,
            },
        ],
        options: {
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
            },
            labels: data.dates,
            xaxis: {
                type: "datetime",
            },
            yaxis: {
                opposite: true,
            },
            legend: {
                horizontalAlign: "left",
            },
        },
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">
                    <b>Biểu đồ đường: </b>Thống kê <b>doanh thu</b> theo tháng
                </h5>
                <div>
                    {data && (
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default OrderByMonthAreaChart;
