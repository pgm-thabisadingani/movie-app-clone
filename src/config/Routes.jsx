import React from "react";

import { Route, Switch } from "react-router-dom";
import { Catelog, Detail, Home } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:category" component={Catelog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category/search/:keyword" component={Catelog} />
    </Switch>
  );
};

export default Routes;
