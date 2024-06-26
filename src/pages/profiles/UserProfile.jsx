import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserDetailTab from "../../components/profile/UserDetailTab";
import UserUpdateTab from "../../components/profile/UserUpdateTab";
import UserSettingsTab from "../../components/profile/UserSettingsTab";
import UserChangePasswordTab from "../../components/profile/UserChangePasswordTab";
import { useEffect, useState } from "react";
import { fetchAllProfileMenus } from "../../services/ProfileMenuService";
import { getMyInfo } from "../../services/UserService";

function UserProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState();

    const [menuItems, setMenuItems] = useState(
        fetchAllProfileMenus().filter(
            item => item.url != "/faq" && item.url != "/logout",
        ),
    );

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getMyInfo()
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => console.log(error));
    };

    const renderProfileTabItem = item => (
        <li className="nav-item">
            <button
                className={`nav-link ${
                    item.url === location.pathname && "active"
                }`}
                data-bs-toggle="tab"
                data-bs-target={`#${item.url}`}
                onClick={() => navigate(item.url)}
            >
                <i className={item.icon}></i>&nbsp;
                {item.title}
            </button>
        </li>
    );

    return (
        data && (
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">Users</li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img
                                        src={data.avatarImageUrl}
                                        alt="Profile"
                                        className="rounded-circle"
                                    />
                                    <h2 className="mb-2">
                                        {data.firstName + " " + data.lastName}
                                    </h2>
                                    <h3>{data.role}</h3>
                                    <div className="social-links mt-2">
                                        <a href="#" className="twitter">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <a href="#" className="facebook">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="#" className="instagram">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                        <a href="#" className="linkedin">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    <ul className="nav nav-tabs nav-tabs-bordered">
                                        {menuItems &&
                                            menuItems.map(item =>
                                                renderProfileTabItem(item),
                                            )}
                                    </ul>
                                    <div className="tab-content pt-2">
                                        <UserDetailTab
                                            show={
                                                location.pathname ===
                                                "/user/detail"
                                            }
                                            data={data}
                                        />
                                        <UserUpdateTab
                                            show={
                                                location.pathname ===
                                                "/user/update"
                                            }
                                            data={data}
                                            getData={getData}
                                        />
                                        <UserSettingsTab
                                            show={
                                                location.pathname ===
                                                "/user/settings"
                                            }
                                        />
                                        <UserChangePasswordTab
                                            show={
                                                location.pathname ===
                                                "/user/change-password"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    );
}

export default UserProfile;
