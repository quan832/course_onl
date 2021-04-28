import React from "react";
// setup Route
import { Route } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function HomeTemplate(props) {
  // declare component, route
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <div className="HomeTemplate">
            {/* Header */}
            <Header />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
