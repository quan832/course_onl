// import pages

// admin
// home
import HomePage from "./Admin/Pages/HomePage";
import Home from "./Pages/Home/Home";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

const routesAdmin = [
  {
    path: "/admin",
    exact: true,
    component: HomePage,
  },
];

export { routesHome, routesAdmin };
