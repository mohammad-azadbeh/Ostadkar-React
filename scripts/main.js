import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

import App from './App';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*<Route path="about" component={About} />*/}
        </Route>
    </Router>
);
ReactDOM.render(routes, document.getElementById('app'));