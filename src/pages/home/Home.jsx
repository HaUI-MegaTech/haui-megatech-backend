import LoginStatisticChart from "../../components/home/LoginStatisticChart";
import ProductByBrandStatisticChart from "../../components/home/ProductByBrandStatisticChart";
import RecentActivities from "../../components/home/RecentActivities";
import SalesCard from "../../components/home/card/SalesCard";
import RevenueCard from "../../components/home/card/RevenueCard";
import CustomersCard from "../../components/home/card/CustomersCard";
import RecentSales from "../../components/home/RecentSales";
import TopSelling from "../../components/home/TopSelling";
import WebsiteTrafficChart from "../../components/home/WebsiteTrafficChart";
import NewsAndUpdatesCard from "../../components/home/NewAndUpdatesCart";
import TotalLoggedInCard from "../../components/home/card/TotalLoggedInCard";
import OrderByMonthAreaChart from "../../components/orders/OrderByMonthAreaChart";

function Home() {
    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-xxl-6 col-md-6">
                                <SalesCard />
                            </div>

                            <div className="col-xxl-6 col-md-6">
                                <CustomersCard />
                            </div>

                            <div className="col-xxl-6 col-md-6">
                                <RevenueCard />
                            </div>

                            <div className="col-xxl-6 col-md-6">
                                <TotalLoggedInCard />
                            </div>

                            <div className="col-12">
                                <LoginStatisticChart />
                            </div>

                            <div className="col-12 mb-4">
                                <OrderByMonthAreaChart />
                            </div>

                            <div className="col-12">
                                <RecentSales />
                            </div>

                            <div className="col-12">
                                <TopSelling />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <RecentActivities />

                        <ProductByBrandStatisticChart />

                        {/* <WebsiteTrafficChart /> */}

                        {/* <NewsAndUpdatesCard /> */}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
