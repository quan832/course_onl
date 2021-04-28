import React from "react";
import { Route } from "react-router";
// import
import SideBar from "../Admin/components/SideBar";

// import ""

import NavbarResponsive from "../Admin/components/NavbarResponsive";
import Navbar from "../Admin/components/Navbar";

export const AdminTemplate = (props) => {
  let { Component, ...restParam } = props;

  return (
    // <Route
    //   {...restParam}
    //   render={(propsRoute) => {
    //     return (
    //       <div>
    //         <div className="row">
    //           <div className="col-4 bg-dark" style={{ height: 1000 }}></div>
    //           <div className="col-8">
    //             <Component {...propsRoute} />
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   }}
    // />
    <Route
      {...restParam}
      render={(propsRoute) => (
        // <>
        //   <NavbarResponsive></NavbarResponsive>
        //   <SideBar></SideBar>
        //   <main className="content">
        //     <Navbar></Navbar>
        //     <Component {...propsRoute} />
        //   </main>
        // </>
        <div class="Admin_Template">
          <div className="container-fluid bg-soft">
            <div className="row">
              <div className="col-12">
                <SideBar></SideBar>
                <main className="content">
                  <Navbar></Navbar>
                  <Component {...propsRoute} />
                </main>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
