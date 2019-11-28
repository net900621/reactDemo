import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import routes from './routeconfig.js'
const setTitle = (title) => {
    document.title = title
};

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