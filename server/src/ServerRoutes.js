import React from 'react';
import { Router, Route } from 'react-router';
import Index from './component/Index';
import Home from './component/Home';
import Error from './component/Error';
import ReactDOMServer from 'react-dom/server';

const routes = (history) => {
    return <Router history={history}>
        <Route path="/" component={Index}/>
        <Route path="/home" component={Home}/>
    </Router>
}

function ServerRoutes(req,res){
    const history = {
        location: {
            pathname: req.url
        }
    }
    const data = routes(history);
    console.log(ReactDOMServer.renderToString(data));

    const elem = <Error />;

    return elem;

}

export default ServerRoutes;