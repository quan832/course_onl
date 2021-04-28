import React from "react";
import logo from "../../assets/images/logo/logo.png";
// router
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        zIndex: 1010,
      }}
    >
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="left-content d-flex align-items-center">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <form action="#" className="form-box">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search courses.."
                  />
                  <div className="search-icon">
                    <i className="fa fa-search"></i>
                  </div>
                </form>
              </div>
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <NavLink to="/admin">Admin</NavLink>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog_details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="elements.html">Element</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="cart">
                      <a href="#">
                        <span className="fa fa-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a href="login.html" className="btn header-btn2">
                        Sign In
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
