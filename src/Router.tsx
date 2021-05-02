import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { India } from "./scenes";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cannabis">
          <India />
        </Route>
        <Route path="*">
          <Redirect to="/cannabis" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
