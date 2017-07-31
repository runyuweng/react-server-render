'use strict';

var _http = require('http');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _Routes = require('./src/Routes.js');

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _http.createServer)(function (req, res) {

  // This context object contains the results of the render
  var context = {};

  console.log(req.url, context)

  var html = _server2.default.renderToString(_react2.default.createElement(
    _reactRouter.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_Routes2.default, null)
  ));

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(html);
    res.end();
  }
}).listen(3000);
