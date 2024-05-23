import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchTotalViewByBrand } from "../../services/BrandService";

function BrandViewPieChart() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchTotalViewByBrand()
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    };

    const state = {
        options: {
            series: data && data.map(item => item.value),
            labels: data && data.map(item => item.name),
            plotOptions: {
                pie: {
                    customScale: 1.0,
                },
            },
            dataLabels: {
                enabled: true,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val.toLocaleString() + " lượt xem";
                    },
                },
            },
        },
        series: data && data.map(item => item.value),
        labels: data && data.map(item => item.name),
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">
                    <b>Biểu đồ tròn: </b>Thống kê <b>lượt xem</b> theo thương
                    hiệu
                </h5>
                <div>
                    {data && (
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="donut"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrandViewPieChart;
