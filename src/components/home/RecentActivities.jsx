import { useEffect, useState } from "react";
import { fetchRecentActivities } from "../../services/HomeService";

function RecentActivities() {
    const [data, setData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetchRecentActivities()
            .then(res => {
                res && setData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const renderRecentActivities = data =>
        data && (
            <div className="activity">
                {data.map((item, index) => renderActivityItem(item, index))}
            </div>
        );

    const renderActivityItem = (item, index) => (
        <div className="activity-item d-flex" key={index}>
            <div className="activite-label">{item.whenCreated}</div>
            <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
            <div className="activity-content">
                <b>{item.subject}</b>&nbsp;{item.operation}
            </div>
        </div>
    );

    return (
        <div className="card">
            <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Today
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            This Month
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            This Year
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Lịch sử hoạt động</h5>
                {data && renderRecentActivities(data)}
            </div>
        </div>
    );
}

export default RecentActivities;
