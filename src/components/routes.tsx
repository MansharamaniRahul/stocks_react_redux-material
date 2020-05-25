import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./headerComponent";
const StochComponent = lazy(() => import("./stocks/stockComponent"));

class RoutesComponent extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Suspense fallback={<div>Loading.....</div>}>
            <HeaderComponent />
            <Switch>
              <Route path="/stockComponent" exact component={StochComponent} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default RoutesComponent;
