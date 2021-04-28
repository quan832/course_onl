import React from "react";
import profile3 from "../assets/img/team/profile-picture-3.jpg";
import profile1 from "../assets/img/team/profile-picture-1.jpg";
import profile_cover from "../assets/img/profile-cover.jpg";

export default function Settings() {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div>
            <button
              className="btn btn-secondary text-dark mr-2 dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-plus mr-2" />
              New
            </button>
            <div className="dropdown-menu dashboard-dropdown dropdown-menu-left mt-2">
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="far fa-file-alt mr-2" />
                Document
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="far fa-comment-dots mr-2" />
                Message
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-box-open mr-2" />
                Product
              </a>
              <div role="separator" className="dropdown-divider" />
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-rocket text-danger mr-2" />
                Subscription Plan
              </a>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-primary mr-2">
              <span className="fas fa-calendar-alt" />
            </button>
            <button
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fas fa-clipboard mr-2" />
              Reports
              <span className="icon icon-small ml-1">
                <span className="fas fa-chevron-down" />
              </span>
            </button>
            <div className="dropdown-menu dashboard-dropdown dropdown-menu-left mt-2">
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-box-open mr-2" />
                Products
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-store mr-2" />
                Customers
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-cart-arrow-down mr-2" />
                Orders
              </a>
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-chart-pie mr-2" />
                Console
              </a>
              <div role="separator" className="dropdown-divider" />
              <a className="dropdown-item font-weight-bold" href="#">
                <span className="fas fa-rocket text-success mr-2" />
                All Reports
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-8">
            <div className="card card-body bg-white border-light shadow-sm mb-4">
              <h2 className="h5 mb-4">General information</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div>
                      <label htmlFor="first_name">First Name</label>
                      <input
                        className="form-control"
                        id="first_name"
                        type="text"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div>
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        className="form-control"
                        id="last_name"
                        type="text"
                        placeholder="Also your last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="birthday">Birthday</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <span className="far fa-calendar-alt" />
                      </span>
                      <input
                        data-datepicker
                        className="form-control"
                        id="birthday"
                        type="text"
                        placeholder="dd/mm/yyyy"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="gender">Gender</label>
                    <select
                      className="form-select mb-0"
                      id="gender"
                      aria-label="Gender select example"
                    >
                      <option selected>Gender</option>
                      <option value={1}>Female</option>
                      <option value={2}>Male</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        className="form-control"
                        id="phone"
                        type="number"
                        placeholder="+12-345 678 910"
                        required
                      />
                    </div>
                  </div>
                </div>
                <h2 className="h5 my-4">Adress</h2>
                <div className="row">
                  <div className="col-sm-9 mb-3">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        className="form-control"
                        id="address"
                        type="text"
                        placeholder="Enter your home address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-3 mb-3">
                    <div className="form-group">
                      <label htmlFor="number">Number</label>
                      <input
                        className="form-control"
                        id="number"
                        type="number"
                        placeholder="No."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        className="form-control"
                        id="city"
                        type="text"
                        placeholder="City"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="zip">ZIP</label>
                      <input
                        className="form-control"
                        id="zip"
                        type="tel"
                        placeholder="ZIP"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-primary">
                    Save All
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="card border-light text-center p-0">
                  <div
                    className="profile-cover rounded-top"
                    style={{ background: `url("${profile_cover}")` }}
                  />
                  <div className="card-body pb-5">
                    <img
                      src={profile1}
                      className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
                      alt="Neil Portrait"
                    />
                    <h4 className="h3">Neil Sims</h4>
                    <h5 className="font-weight-normal">
                      Senior Software Engineer
                    </h5>
                    <p className="text-gray mb-4">New York, USA</p>
                    <a className="btn btn-sm btn-primary mr-2" href="#">
                      <span className="fas fa-user-plus mr-1" /> Connect
                    </a>
                    <a className="btn btn-sm btn-secondary" href="#">
                      Send Message
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card card-body bg-white border-light shadow-sm mb-4">
                  <h2 className="h5 mb-4">Select profile photo</h2>
                  <div className="d-xl-flex align-items-center">
                    <div>
                      {/* Avatar */}
                      <div className="user-avatar xl-avatar mb-3">
                        <img
                          className="rounded"
                          src={profile3}
                          alt="change avatar"
                        />
                      </div>
                    </div>
                    <div className="file-field">
                      <div className="d-flex justify-content-xl-center ml-xl-3">
                        <div className="d-flex">
                          <span className="icon icon-md">
                            <span className="fas fa-paperclip mr-3" />
                          </span>
                          <input type="file" />
                          <div className="d-md-block text-left">
                            <div className="font-weight-normal text-dark mb-1">
                              Choose Image
                            </div>
                            <div className="text-gray small">
                              JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
