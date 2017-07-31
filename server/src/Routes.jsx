import React, { Component } from 'react';
import {IndexRoute, Route, Router, hashHistory} from "react-router";

const Index = () => <div>This is Index</div>;
const Part1 = () => <div>This is Part1</div>;
const Part2 = () => <div>This is Part2</div>;

const Routes = () => <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/part1" component={Part1}/>
    <Route path="/part2" component={Part2}/>
</Router>

export default Routes;