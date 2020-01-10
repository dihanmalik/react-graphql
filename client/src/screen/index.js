import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import AppShell from "./AppShell";

const Home = React.lazy(() => import("./Home"));
const List = React.lazy(() => import("./List"));

export default () => (
  <AppShell>
    <Suspense fallback={<h1>loading...</h1>}>
      <Switch>
        <Route path={"/home"} component={Home} />
        <Route path={"/list"} component={List} />
        <Redirect to={"/home"} />
      </Switch>
    </Suspense>
  </AppShell>
);
