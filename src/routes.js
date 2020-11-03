import React from  'react';
import {Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import List from './components/list/List';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/List" component={List} />
        </Switch>
    </BrowserRouter>
);


export default Routes;