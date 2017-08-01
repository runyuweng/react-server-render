import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ClientRoutes from './src/ClientRoutes';
import ServerRoutes from './src/ServerRoutes';

const server = http.createServer((req, res) => {

  // This context object contains the results of the render
  const context = {};

  const html = ReactDOMServer.renderToString(ServerRoutes(req));

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(html)
    res.end()
  }
}).listen(3000)