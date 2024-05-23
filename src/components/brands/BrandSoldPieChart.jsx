import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchTotalSoldByBrand } from "../../services/BrandService";

function BrandSoldPieChart() {
    const [data, setData] = useState();

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
                        return val.toLocaleString() + " lượt mua";
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
                    Thống kê lượt mua theo thương hiệu - Biểu đồ tròn
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

export default BrandSoldPieChart;
