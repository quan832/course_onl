import React from "react";
import light from "../assets/img/brand/light.svg";
import profile3 from "../assets/img/team/profile-picture-3.jpg";
export default function SideBar() {
  return (
    <nav
      id="sidebarMenu"
      className="sidebar d-md-block bg-primary text-white collapse"
      data-simplebar
    >
      <div className="sidebar-inner px-4 pt-3">
        <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
          <div className="d-flex align-items-center">
            <div className="user-avatar lg-avatar mr-4">
              <img
                src={profile3}
                className="card-img-top rounded-circle border-white"
                alt="Bonnie Green"
              />
            </div>
            <div className="d-block">
              <h2 className="h6">Hi, Jane</h2>
              <a
                href="../../pages/examples/sign-in.html"
                className="btn btn-secondary text-dark btn-xs"
              >
                <span className="mr-2">
                  <span className="fa fa-sign-out-alt" />
                </span>
                Sign Out
              </a>
            </div>
          </div>
          <div className="collapse-close d-md-none">
            <a
              href="#sidebarMenu"
              className="fa fa-times"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            />
          </div>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item active">
            <a href="../../pages/dashboard/dashboard.html" className="nav-link">
              <span className="sidebar-icon">
                <span className="fa fa-chart-pie" />
              </span>
              <span>Overview</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="../../pages/transactions.html" className="nav-link">
              <span className="sidebar-icon">
                <span className="fa fa-hand-holding-usd" />
              </span>
              <span>Courses</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="../../pages/settings.html" className="nav-link">
              <span className="sidebar-icon">
                <span className="fa fa-cog" />
              </span>
              <span>Settings</span>
            </a>
          </li>
          <li className="nav-item">
            <span
              className="nav-link collapsed d-flex justify-content-between align-items-center"
              data-toggle="collapse"
              data-target="#submenu-app"
            >
              <span>
                <span className="sidebar-icon">
                  <span className="fa fa-table" />
                </span>
                Tables
              </span>
              <span className="link-arrow">
                <span className="fa fa-chevron-right" />
              </span>
            </span>
            <div
              className="multi-level collapse"
              role="list"
              id="submenu-app"
              aria-expanded="false"
            >
              <ul className="flex-column nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../pages/tables/bootstrap-tables.html"
                  >
                    <span>Bootstrap Tables</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <span
              className="nav-link collapsed d-flex justify-content-between align-items-center"
              data-toggle="collapse"
              data-target="#submenu-pages"
            >
              <span>
                <span className="sidebar-icon">
                  <span className="far fa-file-alt" />
                </span>
                Page examples
              </span>
              <span className="link-arrow">
                <span className="fa fa-chevron-right" />
              </span>
            </span>
            <div
              className="multi-level collapse"
              role="list"
              id="submenu-pages"
              aria-expanded="false"
            >
              <ul className="flex-column nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../pages/examples/sign-in.html"
                  >
                    <span>Sign In</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../pages/examples/sign-up.html"
                  >
                    <span>Sign Up</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../pages/examples/forgot-password.html"
                  >
                    <span>Forgot password</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../../pages/examples/reset-password.html"
                  >
                    <span>Reset password</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../../pages/examples/lock.html">
                    <span>Lock</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../../pages/examples/404.html">
                    <span>404 Not Found</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../../pages/examples/500.html">
                    <span>500 Server Error</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li
            role="separator"
            className="dropdown-divider mt-4 mb-3 border-black"
          />
          <li className="nav-item">
            <a
              href="../../index.html"
              className="nav-link d-flex align-items-center"
            >
              <span className="sidebar-icon">
                <img src={light} height={20} width={20} alt="Volt Logo" />
              </span>
              <span className="mt-1">Volt Overview</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
