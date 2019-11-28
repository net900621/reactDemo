import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from "./views/index/index";
import List from "./views/list/index";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/list" component={List}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;