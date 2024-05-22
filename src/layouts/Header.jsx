import React, { useEffect, useState } from "react";
import { fetchAllProfileMenus } from "../services/ProfileMenuService";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../store/hooks";
import { logOut } from "../store/actions";

function Header() {
    const [showSidebar, setShowSidebar] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [menuItems, setmenuItems] = useState(fetchAllProfileMenus());
    const [state, dispatch] = useAuth();
    const [lang, setLang] = useState(localStorage.getItem("lang") ?? "en");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const location = useLocation();
    if (!loggedInUser.avatarImageUrl)
        loggedInUser.avatarImageUrl =
            "https://res-console.cloudinary.com/dlupgsjyq/thumbnails/v1/image/upload/v1716195708/ZGVmYXVsdF91c2VyX2F2YXRhcl9hcWN5bTc=/drilldown";

    useEffect(() => {
        showSidebar
            ? document.body.classList.remove("toggle-sidebar")
            : document.body.classList.add("toggle-sidebar");
    }, [showSidebar, lang]);

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

    const handleLogOut = () => {
        dispatch(logOut());
    };

    const renderProfileMenuItem = (item, index) => (
        <div key={index}>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <NavLink
                    className="dropdown-item d-flex align-items-center"
                    to={item.url}
                    onClick={item.url === "/logout" ?? handleLogOut}
                >
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                </NavLink>
            </li>
        </div>
    );

    const handleSetPreferedViLang = () => {
        setLang("vi");
        localStorage.setItem("lang", "vi");
    };

    const handleSetPreferedEnLang = () => {
        setLang("en");
        localStorage.setItem("lang", "en");
    };

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

            {location.pathname !== "/home" && (
                <div
                    className={`search-bar ${
                        showSearchBar && "search-bar-show"
                    }`}
                >
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
            )}

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

                        <ul
                            className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages py-0"
                            style={{ minWidth: 180 }}
                        >
                            <li
                                className="message-item"
                                onClick={handleSetPreferedEnLang}
                            >
                                <a href="#">
                                    <img
                                        src="https://images.freeimages.com/images/large-previews/fb0/uk-flag-1444045.jpg"
                                        alt=""
                                        className="rounded-circle"
                                        style={{ aspectRatio: 1 / 1 }}
                                    />
                                    <div
                                        className={`d-flex align-items-center ${
                                            lang === "vi" && "text-black"
                                        }`}
                                    >
                                        <h6 className="mb-0">English</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li
                                className="message-item"
                                onClick={handleSetPreferedViLang}
                            >
                                <a href="#">
                                    <img
                                        src="https://th.bing.com/th/id/OIP._N_1zfKeZGiV6-N81bTTawHaE8?rs=1&pid=ImgDetMain"
                                        alt=""
                                        className="rounded-circle"
                                        style={{ aspectRatio: 1 / 1 }}
                                    />
                                    <div
                                        className={`d-flex align-items-center ${
                                            lang === "en" && "text-black"
                                        }`}
                                    >
                                        <h6 className="mb-0">Tiếng Việt</h6>
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
                                src={loggedInUser.avatarImageUrl}
                                alt=""
                                className="rounded-circle"
                            />
                            <span className="d-none d-md-block dropdown-toggle ps-2">
                                {loggedInUser.username}
                            </span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</h6>
                                <span>{loggedInUser.role}</span>
                            </li>
                            {menuItems &&
                                menuItems.map((item, index) =>
                                    renderProfileMenuItem(item, index),
                                )}
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
