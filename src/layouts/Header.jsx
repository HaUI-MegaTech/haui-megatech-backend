import React, { useEffect, useState } from "react";
import { fetchAllProfileMenus } from "../services/ProfileMenuService";
import { NavLink } from "react-router-dom";

function Header() {
    const [showSidebar, setShowSidebar] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [menuItems, setmenuItems] = useState(fetchAllProfileMenus());

    useEffect(() => {
        showSidebar
            ? document.body.classList.remove("toggle-sidebar")
            : document.body.classList.add("toggle-sidebar");
    }, [showSidebar]);

    const getProfileMenuItems = () => {
        const data = fetchAllProfileMenus();
        setmenuItems(data);
    };

    const handleToggleShowSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleToggleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    const renderProfileMenuItem = item => (
        <>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to={item.url}
                >
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                </NavLink>
            </li>
        </>
    );

    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center"
        >
            <div className="d-flex align-items-center justify-content-between">
                <NavLink to="/home" className="logo d-flex align-items-center">
                    <img
                        src="http://res.cloudinary.com/dlupgsjyq/image/upload/v1712624218/cd313c86-41c2-4796-ad53-e8e2c0b97cea.png"
                        alt=""
                        className="img-fluid"
                    />
                    <span className="d-none d-lg-block text-primary">
                        Admin Center
                    </span>
                </NavLink>
                <i
                    className="bi bi-list toggle-sidebar-btn"
                    onClick={handleToggleShowSidebar}
                ></i>
            </div>

            <div className={`search-bar ${showSearchBar && "search-bar-show"}`}>
                <form
                    className="search-form d-flex align-items-center"
                    method="POST"
                    action="#"
                >
                    <input
                        type="text"
                        name="query"
                        placeholder="Search"
                        title="Enter search keyword"
                    />
                    <button type="submit" title="Search">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        <a
                            className="nav-link nav-icon search-bar-toggle "
                            href="#"
                            onClick={handleToggleShowSearchBar}
                        >
                            <i className="bi bi-search"></i>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-bell"></i>
                            <span className="badge bg-primary badge-number">
                                4
                            </span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                You have 4 new notifications
                                <a href="#">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        View all
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-exclamation-circle text-warning"></i>
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-x-circle text-danger"></i>
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-check-circle text-success"></i>
                                <div>
                                    <h4>Sit rerum fuga</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>2 hrs. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-info-circle text-primary"></i>
                                <div>
                                    <h4>Dicta reprehenderit</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">Show all notifications</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-chat-left-text"></i>
                            <span className="badge bg-success badge-number">
                                3
                            </span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                            <li className="dropdown-header">
                                You have 3 new messages
                                <a href="#">
                                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                                        View all
                                    </span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="#">
                                    <img
                                        src="assets/img/messages-1.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Maria Hudson</h4>
                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="#">
                                    <img
                                        src="assets/img/messages-2.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>Anna Nelson</h4>
                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>
                                        <p>6 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="#">
                                    <img
                                        src="assets/img/messages-3.jpg"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                    <div>
                                        <h4>David Muldon</h4>
                                        <p>
                                            Velit asperiores et ducimus soluta
                                            repudiandae labore officia est ut...
                                        </p>
                                        <p>8 hrs. ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="dropdown-footer">
                                <a href="#">Show all messages</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link nav-icon" href="#">
                            <i className="bi bi-moon-stars"></i>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link nav-icon"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bi bi-translate"></i>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages py-0">
                            <li className="message-item">
                                <a href="#">
                                    <img
                                        src="https://images.freeimages.com/images/large-previews/fb0/uk-flag-1444045.jpg"
                                        alt=""
                                        className="rounded-circle"
                                        style={{ aspectRatio: 1 / 1 }}
                                    />
                                    <div>
                                        <h6>English</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li className="message-item">
                                <a href="#">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.rfrIkx7yaRBTzCxaIKq1uAHaE9?rs=1&pid=ImgDetMain"
                                        alt=""
                                        className="rounded-circle"
                                        style={{ aspectRatio: 1 / 1 }}
                                    />
                                    <div>
                                        <h6>Tiếng Việt</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src="https://th.bing.com/th/id/R.90501fda39777948c197990afcffa993?rik=LKE2uMmp8vvz6g&pid=ImgRaw&r=0"
                                alt=""
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                Nguyễn Việt Hoàng
                            </span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Nguyễn Việt Hoàng</h6>
                                <span>Sinh viên</span>
                            </li>
                            {menuItems &&
                                menuItems.map(item =>
                                    renderProfileMenuItem(item),
                                )}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
