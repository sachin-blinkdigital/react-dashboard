import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Brand from "./pages/Brand";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/brands/:id&:rank" component={Brand} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
