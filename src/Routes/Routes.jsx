import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { paths } from "./paths";
import Main from '../Main/Main';
import QrPage from '../Main/QrScanner';

const RouterCenter = () => {
    return (
        <Router>
            <Switch>
                <Route path={paths.main} exact component={Main} />
                <Route path={paths.qr} exact component={QrPage} />
            </Switch>
        </Router>
    )
};

export default RouterCenter;