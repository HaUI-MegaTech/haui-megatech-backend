import { useEffect, useState } from "react";
import { fetchAllNavItem } from "../services/NavItemService";

function Sidebar() {
    const [navItems, setNavItems] = useState([])

    useEffect(() => {
        getNavItems();
    }, [navItems])

    const getNavItems = () => {
        const data = fetchAllNavItem();
        setNavItems(data)
    }

    const renderSubNavItem = (item) => (
        <li>
            <a href={item.url}>
                <i className="bi bi-circle"></i><span>{item.title}</span>
            </a>
        </li>
    )


    const renderSubNavItems = (navItem) => (
        <ul id={`${navItem.id}`} className="nav-content collapse " data-bs-parent="#sidebar-nav">
            {navItem.child.map(item => renderSubNavItem(item))}
        </ul>
    )

    const renderNavItem = (navItem) => (
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-bs-target={`#${navItem.id}`} data-bs-toggle="collapse">
                <i className={navItem.icon}></i>
                <span>{navItem.title}</span>
                {navItem.child && <i className="bi bi-chevron-down ms-auto"></i>}
            </a>
            {navItem.child && renderSubNavItems(navItem)}
        </li>
    )


    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">
                {navItems.map(item => (renderNavItem(item)))}


                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-faq.html">
                        <i className="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-contact.html">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-register.html">
                        <i className="bi bi-card-list"></i>
                        <span>Register</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-login.html">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Login</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-error-404.html">
                        <i className="bi bi-dash-circle"></i>
                        <span>Error 404</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link " href="pages-blank.html">
                        <i className="bi bi-file-earmark"></i>
                        <span>Blank</span>
                    </a>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;