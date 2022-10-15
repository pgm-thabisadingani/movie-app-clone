import React from "react";

import { Route, Switch } from "react-router-dom";
import { Catalog, Detail, Home } from "../pages";

const Routes = () => {
  return (
    <Switch>
      {/* order is important */}
      <Route path="/" exact component={Home} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
    </Switch>
  );
};

export default Routes;
