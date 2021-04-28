import React from "react";
import light from "../assets/img/brand/light.svg";
import dark from "../assets/img/brand/dark.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
      <a className="navbar-brand mr-lg-5" href="../../index.html">
        <img className="navbar-brand-dark" src={light} alt="Volt logo" />
        <img className="navbar-brand-light" src={dark} alt="Volt logo" />
      </a>
      <div className="d-flex align-items-center">
        <button
          className="navbar-toggler d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}
