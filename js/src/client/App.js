"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: () => react_1.default.createElement("h1", null, "Home/Login") }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/rooms", exact: true, component: () => react_1.default.createElement("h1", null, "Home/Login") })));
};
exports.default = App;
//# sourceMappingURL=App.js.map