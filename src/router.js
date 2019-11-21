import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from "./views/index/index";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;