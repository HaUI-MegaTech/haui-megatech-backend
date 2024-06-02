import axios from "axios";

const BASE_URL = "http://localhost:8080";

const accessToken = localStorage.getItem("accessToken");

const lang = localStorage.getItem("lang");

const headers = {
    Authorization: "Bearer " + accessToken,
    "Accept-Language": lang,
};

const fetchStatisticOrderByMonth = () =>
    axios.get(BASE_URL + "/api/v1/orders/statisticByMonth", { headers });

const fetchStatisticOrderByAdminRegion = () =>
    axios.get(BASE_URL + "/api/v1/orders/statisticByAdminRegion", { headers });

export { fetchStatisticOrderByMonth, fetchStatisticOrderByAdminRegion };
