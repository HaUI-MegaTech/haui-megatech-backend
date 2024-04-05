import { useEffect, useState } from "react";
import { fetchAllNavItem } from "../services/NavItemService";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
    const [navItems, setNavItems] = useState(fetchAllNavItem());
    const location = useLocation();

    useEffect(() => {
        const found = navItems.find((item) => item.url === location.pathname);
        found
            ? (document.title = found.title + " - HaUI MegaTech")
            : navItems.forEach((parentItem) => {
                  parentItem?.child?.forEach((childItem) => {
                      childItem.url === location.pathname &&
                          (document.title =
                              childItem.title + " - HaUI MegaTech");
                  });
              });
    }, []);

    useEffect(() => {}, [navItems, location]);

    const changePageTitle = (item) => {
        !item.child && (document.title = item.title + " - HaUI MegaTech");
    };

    const renderSubNavItem = (item) => (
        <li>
            <NavLink to={item.url} onClick={() => changePageTitle(item)}>
                <i className="bi bi-circle"></i>
                <span>{item.title}</span>
            </NavLink>
        </li>
    );

    const renderSubNavItems = (navItem) => (
        <ul
            id={`${navItem.id}`}
            className={`nav-content collapse ${
                location.pathname.indexOf(navItem.url) !== -1 && "show"
            }`}
            data-bs-parent="#sidebar-nav"
        >
            {navItem.child &&
                navItem.child.map((item) => renderSubNavItem(item))}
        </ul>
    );

    const renderNavItem = (navItem) => (
        <li className="nav-item">
            <NavLink
                className={`nav-link ${
                    location.pathname.indexOf(navItem.url) === -1 && "collapsed"
                }`}
                to={navItem.url}
                data-bs-target={navItem.child && `#${navItem.id}`}
                data-bs-toggle={navItem.child && "collapse"}
                onClick={() => changePageTitle(navItem)}
            >
                <i className={navItem.icon}></i>
                <span>{navItem.title}</span>
                {navItem && navItem.child && (
                    <i className="bi bi-chevron-down ms-auto"></i>
                )}
            </NavLink>
            {navItem && navItem.child && renderSubNavItems(navItem)}
        </li>
    );

    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                {navItems && navItems.map((item) => renderNavItem(item))}
            </ul>
        </aside>
    );
}

export default Sidebar;
