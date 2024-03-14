import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/Config';
import Aboutus from './pages/Aboutus'

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/config">
                <Config />
            </Route>
            <Route exact path="/aboutus">
                <Aboutus />
            </Route>
        </Switch>
    );
}