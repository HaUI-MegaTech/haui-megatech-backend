import axios from "axios";

import BASE_URL from "./Const";

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
