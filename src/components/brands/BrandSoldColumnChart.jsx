import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchTotalSoldByBrand } from "../../services/BrandService";

function BrandSoldColumnChart() {
    const [data, setData] = useState();
    const formatter = new Intl.NumberFormat("en-US");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalSoldByBrand()
            .then(res => setData(res.data.items))
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
                        return val.toLocaleString();
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
                name: "Tổng lượt mua",
                data: data && data.map(item => item.value),
            },
        ],
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">
                    <b>Biểu đồ cột: </b>Thống kê <b>lượt mua</b> theo thương
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

export default BrandSoldColumnChart;
