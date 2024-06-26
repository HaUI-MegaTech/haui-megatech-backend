import BrandRevenueColumnChart from "../../components/brands/BrandRevenueColumnChart";
import BrandRevenuePieChart from "../../components/brands/BrandRevenuePieChart";
import BrandSoldColumnChart from "../../components/brands/BrandSoldColumnChart";
import BrandSoldPieChart from "../../components/brands/BrandSoldPieChart";
import BrandViewColumnChart from "../../components/brands/BrandViewColumnChart";
import BrandViewPieChart from "../../components/brands/BrandViewPieChart";
import OrderByAdminRegionBarChart from "../../components/orders/OrderByAdminRegionBarChart";
import OrderByMonthAreaChart from "../../components/orders/OrderByMonthAreaChart";

function BrandsStatistic() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>ProductsStatistic Page</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">Pages</li>
                        <li className="breadcrumb-item active">
                            ProductsStatistic
                        </li>
                    </ol>
                </nav>
            </div>

            <section className="section">
                <div className="row mb-4">
                    <div className="col-lg-6">
                        <BrandRevenueColumnChart />
                    </div>

                    <div className="col-lg-6">
                        <BrandRevenuePieChart />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-lg-6">
                        <BrandSoldColumnChart />
                    </div>

                    <div className="col-lg-6">
                        <BrandSoldPieChart />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <BrandViewColumnChart />
                    </div>

                    <div className="col-lg-6">
                        <BrandViewPieChart />
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-lg-6">
                        <OrderByMonthAreaChart />
                    </div>

                    <div className="col-lg-6">
                        <OrderByAdminRegionBarChart />
                    </div>
                </div> */}
            </section>
        </main>
    );
}

export default BrandsStatistic;
