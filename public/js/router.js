/* =========================================================================
 *
 * router.js
 *  Setups router
 *
 * ========================================================================= */
// External Dependencies
// ------------------------------------
import React from 'react';
import logger from 'bragi-browser';

import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import {create, HistoryLocation} from 'react-router';

// Internal Dependencies
// ------------------------------------
// Component imports
import App from './components/app.js';
import Home from './components/home.js';
import Block from './components/block.js';
import User from './components/user.js';

import NotFound from './components/not-found.js';

// ========================================================================
//
// Functionality
//
// ========================================================================
var routes = (
  <Route handler={App} >
    <Route name="home" path="/" handler={Home}></Route>
    <Route name="user" path="/:username" handler={User}></Route>
    <Route name="block" path="/:username/:gistId" handler={Block}></Route>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default create({
    routes: routes,
    location: HistoryLocation
});

