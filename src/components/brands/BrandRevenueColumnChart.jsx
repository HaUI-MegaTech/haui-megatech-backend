import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchTotalBrandRevenue } from "../../services/BrandService";

function BrandRevenueColumnChart() {
    const [data, setData] = useState();
    const formatter = new Intl.NumberFormat("en-US");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalBrandRevenue()
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    };

    const state = {
        options: {
            chart: {},

            xaxis: {
                categories: data && data.map(item => item.name),
                labels: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val.toLocaleString();
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val.toLocaleString() + "đ";
                    },
                },
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
                name: "Tổng lợi nhuận",
                data: data && data.map(item => item.value),
            },
        ],
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">
                    <b>Biểu đồ cột: </b>Thống kê <b>lợi nhuận</b> theo thương
                    hiệu
                </h5>
                <div>
                    {data && (
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrandRevenueColumnChart;
