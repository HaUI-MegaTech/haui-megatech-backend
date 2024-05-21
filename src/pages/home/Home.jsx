import LoginStatisticChart from "../../components/home/LoginStatisticChart";
import ProductByBrandStatisticChart from "../../components/home/ProductByBrandStatisticChart";
import RecentActivities from "../../components/home/RecentActivities";
import SalesCard from "../../components/home/SalesCard";
import RevenueCard from "../../components/home/RevenueCard";
import CustomersCard from "../../components/home/CustomersCard";
import RecentSales from "../../components/home/RecentSales";
import TopSelling from "../../components/home/TopSelling";
import WebsiteTrafficChart from "../../components/home/WebsiteTrafficChart";
import NewsAndUpdatesCard from "../../components/home/NewAndUpdatesCart";

function Home() {
    return (
        <main id="main" className="main">
            <section class="section dashboard">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-xxl-4 col-md-6">
                                <SalesCard />
                            </div>

                            <div class="col-xxl-4 col-md-6">
                                <RevenueCard />
                            </div>

                            <div class="col-xxl-4 col-xl-12">
                                <CustomersCard />
                            </div>

                            <div class="col-12">
                                <LoginStatisticChart />
                            </div>

                            <div class="col-12">
                                <RecentSales />
                            </div>

                            <div class="col-12">
                                <TopSelling />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <RecentActivities />

                        <ProductByBrandStatisticChart />

                        <WebsiteTrafficChart />

                        <NewsAndUpdatesCard />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
