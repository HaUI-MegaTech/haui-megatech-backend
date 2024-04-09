import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserDetailTab from "./UserDetailTab";
import UserUpdateTab from "./UserUpdateTab";
import UserSettingsTab from "./UserSettingsTab";
import UserChangePasswordTab from "./UserChangePasswordTab";
import { useEffect, useState } from "react";
import { fetchAllProfileMenus } from "../../services/ProfileMenuService";

function UserProfile() {
    const location = useLocation();
    const navigate = useNavigate();

    const [menuItems, setMenuItems] = useState(
        fetchAllProfileMenus().filter(
            item => item.url != "/faq" && item.url != "/logout",
        ),
    );

    const renderProfileTabItem = item => (
        <li class="nav-item">
            <button
                class={`nav-link ${item.url === location.pathname && "active"}`}
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
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item">Users</li>
                        <li class="breadcrumb-item active">Profile</li>
                    </ol>
                </nav>
            </div>

            <section class="section profile">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <img
                                    src="assets/img/profile-img.jpg"
                                    alt="Profile"
                                    class="rounded-circle"
                                />
                                <h2>Kevin Anderson</h2>
                                <h3>Web Designer</h3>
                                <div class="social-links mt-2">
                                    <a href="#" class="twitter">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" class="facebook">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" class="instagram">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" class="linkedin">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-8">
                        <div class="card">
                            <div class="card-body pt-3">
                                <ul class="nav nav-tabs nav-tabs-bordered">
                                    {menuItems &&
                                        menuItems.map(item =>
                                            renderProfileTabItem(item),
                                        )}
                                </ul>
                                <div class="tab-content pt-2">
                                    <UserDetailTab
                                        show={
                                            location.pathname === "/user/detail"
                                        }
                                    />
                                    <UserUpdateTab
                                        show={
                                            location.pathname === "/user/update"
                                        }
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
    );
}

export default UserProfile;
