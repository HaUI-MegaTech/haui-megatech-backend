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
            .then(res => setData(res.data.items))
            .catch(err => console.log(err));
    };

    console.log(data);

    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: data && data.map(item => item.name),
                labels: {
                    /**
                     * Allows users to apply a custom formatter function to yaxis labels.
                     *
                     * @param { String } value - The generated value of the y-axis tick
                     * @param { index } index of the tick / currently executing iteration in yaxis labels array
                     */
                    formatter: function (val, index) {
                        return "";
                        // return formatter.format(val);
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
                name: "Doanh thu",
                data: data && data.map(item => item.value),
            },
        ],
        yaxis: {
            labels: {
                /**
                 * Allows users to apply a custom formatter function to yaxis labels.
                 *
                 * @param { String } value - The generated value of the y-axis tick
                 * @param { index } index of the tick / currently executing iteration in yaxis labels array
                 */
                formatter: function (val, index) {
                    return "hihi";
                },
            },
        },
    };

    return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">
                    Thống kê doanh thu theo thương hiệu - Biểu đồ cột
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
