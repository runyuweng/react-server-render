import React from 'react';
import { matchPath } from 'react-router';
import Index from './component/Index';
import Home from './component/Home';
import Error from './component/Error';

// 简易路由
const routers = {
    '/': <Index />,
    '/home': <Home />
}

function ServerRoutes(req,res){

    const elem = routers[req.url] || <Error />;

    return elem;

}

export default ServerRoutes;