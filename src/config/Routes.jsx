import React from "react";

import { Route, Switch } from "react-router-dom";
import { Catalog, Detail, Home } from "../pages";

const Routes = () => {
  return (
    <Switch>
      {/* order is important */}
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
