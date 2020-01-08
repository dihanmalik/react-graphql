import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

const Home = React.lazy(() => import("./Home"));

export default () => (
  <Suspense fallback={<h1>loading...</h1>}>
    <Switch>
      <Route path={"/"} component={Home} />
      <Redirect to={"/"} />
    </Switch>
  </Suspense>
);
