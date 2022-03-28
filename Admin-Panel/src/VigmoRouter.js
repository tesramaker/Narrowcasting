import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import VigmoDashboard from './VigmoDashboard/VigmoDashboard';
import VigmoAdmin from './VigmoAdmin/VigmoAdmin';

const VigmoRouter = () => {
    return (
        <Switch>
            <Route exact path='/admin*' render={VigmoAdmin}></Route>
            <Route component={VigmoDashboard} ></Route>{/* Catch all other routes*/}
        </Switch>
    );
}

export default VigmoRouter;