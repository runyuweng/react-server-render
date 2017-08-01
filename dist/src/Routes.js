"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
    return _react2.default.createElement(
        "div",
        null,
        "This is Index"
    );
};
var Part1 = function Part1() {
    return _react2.default.createElement(
        "div",
        null,
        "This is Part1"
    );
};
var Part2 = function Part2() {
    return _react2.default.createElement(
        "div",
        null,
        "This is Part2"
    );
};

var Routes = function Routes() {
    return _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(_reactRouter.Route, { path: "/", component: Index }),
        _react2.default.createElement(_reactRouter.Route, { path: "/part1", component: Part1 }),
        _react2.default.createElement(_reactRouter.Route, { path: "/part2", component: Part2 })
    );
};

exports.default = Routes;