import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import ROUTES_LIST from "./routersList";

function MyBooksRoutes() {
    return (
        <Router>
            <Switch>
                {ROUTES_LIST.map(route => {
                    const Component = route.component;
                    return (
                      <Route key={route.path} path={route.path}>
                        <Component />
                      </Route>
                    );
                })}
            </Switch>
        </Router>
    );
}

export default MyBooksRoutes;
