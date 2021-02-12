import React, { Suspense, Lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const  Routes = () => (
    <Router>
        <Suspense>
            <Switch>
                <Route path="/login" component=() />
            </Switch>
        </Suspense>
    </Router>
)