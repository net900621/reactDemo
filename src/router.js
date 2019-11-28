import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from "./views/index/index";
import List from "./views/list/index";

const setTitle = (title) => {
    document.title = title
};

export const routes = [{
    path: '/',
    title: '首页',
    component: Index
},{
    path: '/list',
    title: '影评列表',
    component: List
}]

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {routes.map(({ path, title, component }, index) => (
                <Route
                    key={index}
                    exact
                    path={path}
                    onEnter={() => setTitle(title)}
                    component={component}
                />
            ))}
        </Switch>
    </HashRouter>
);


export default BasicRoute;