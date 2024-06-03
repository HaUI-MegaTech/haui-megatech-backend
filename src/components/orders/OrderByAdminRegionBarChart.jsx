import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
    fetchStatisticOrderByAdminRegion,
    fetchStatisticOrderByMonth,
} from "../../services/OrderService";

function OrderByAdminRegionBarChart() {
    const [data, setData] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchStatisticOrderByAdminRegion()
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    };

    const formatArrayToBillionVND = array => {
        if (!Array.isArray(array)) {
            return [];
        }
        return array.map(value => {
            if (value === null || value === undefined) {
                return "0.000";
            }
            const billion = value / 1e9;
            return parseFloat(billion.toFixed(3));
        });
    };

    const pricesRes = formatArrayToBillionVND(data.prices);

    const state = {
        series: [
            {
                data: pricesRes,
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: "end",
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: data.categories,
            },
        },
    };
    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">
                    <b>Biểu đồ cột: </b>Thống kê <b>doanh thu</b> theo vùng quản
                    lý
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

export default OrderByAdminRegionBarChart;
