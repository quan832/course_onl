// import css
import "../../config/css/App.css";
import "../../config/css/flaticon.css"


//import route
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

//import history
import { createBrowserHistory } from "history";
import HomeTemplate from "../../templates/HomeTemplate";
import Home from "../../Pages/Home/Home";
export const history = createBrowserHistory();
//Đối tượng giúp chuyển hướng trang bất kì file nào


function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <HomeTemplate exact path="/" Component={Home}></HomeTemplate> 
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
