import React from 'react';
import { matchPath } from 'react-router';

function ServerRoutes(req,res){
    console.log(req.url);

    let elm;
    switch(req.url){
        case '/' :
            elm = <div>This is Index</div>;
            break;
        case '/home' :
            elm = <div>This is Home</div>;
            break;
        default: break;
    }

    console.log(elm);

    return elm;
}

export default ServerRoutes;