import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../containers/Login";
import Main from "../containers/Main";

const routes = [
    {path: "/", component: Login},
    {path: "/login", component: Login},
    {path: "/main", component: Main}
]


export default class RouteList extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                {routes.map((item, index) => {
                    return <Route key={index} exact={true} path={item.path} component={item.component}/>
                })}
            </Switch>
        </BrowserRouter>
    }
}