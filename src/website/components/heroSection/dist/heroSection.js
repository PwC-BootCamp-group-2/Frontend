"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var web_1 = require("@react-spring/web");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
require("../../../website/pages/home/hero/Hero.css");
var home_hero_jpg_1 = require("../../assets/img/home-hero.jpg");
var extra_jpg_1 = require("../../assets/img/extra.jpg");
var hero_bg_jpeg_1 = require("../../assets/img/hero-bg.jpeg");
var home_img_jpg_1 = require("../../assets/img/home-img.jpg");
var react_typical_1 = require("react-typical");
var slides = [home_hero_jpg_1["default"], extra_jpg_1["default"], hero_bg_jpeg_1["default"], home_img_jpg_1["default"]];
var HeroSection = function () {
    var _c = react_1.useState(0), index = _c[0], set = _c[1];
    var transitions = web_1.useTransition(index, {
        key: index,
        from: { opacity: 0.9 },
        enter: { opacity: 1 },
        leave: { opacity: 0.9 },
        config: { duration: 3000 },
        onRest: function (_a, _b, item) {
            if (index === item) {
                set(function (state) { return (state + 1) % slides.length; });
            }
        },
        exitBeforeEnter: true
    });
    return (React.createElement("div", { className: "flex fill center" }, transitions(function (style, i) { return (React.createElement(web_1.animated.div, { className: "hero", style: __assign(__assign({}, style), { backgroundImage: "url(" + slides[i] + ")" }) },
        React.createElement("div", { className: "containerhero" },
            React.createElement("div", { className: "heading" },
                React.createElement("h1", null,
                    React.createElement(react_typical_1["default"], { steps: ["Find", 5000, "Lease", 5000, "Book", 5000], loop: Infinity, className: "animated-text", wrapper: "b" }),
                    "Your Space"),
                React.createElement("p", null,
                    "The ultimate workspace experience, with ultimate flexibility.",
                    React.createElement("br", null),
                    "Access more than 50 coworking spaces across 20 cities, with a single membership.")),
            React.createElement("form", { className: "flex" },
                React.createElement("div", { className: "box" },
                    React.createElement("span", null, "City/Street"),
                    React.createElement("input", { type: "text", name: "location", 
                        // value='location'
                        id: "location", placeholder: "Location" })),
                React.createElement("div", { className: "box" },
                    React.createElement("span", null, "Space Type"),
                    React.createElement("input", { type: "text", name: "spacetype", 
                        // value='spacetype'
                        // id='spacetype'
                        placeholder: "Space Type" })),
                React.createElement("div", { className: "box" },
                    React.createElement("span", null, "Price Range"),
                    React.createElement("input", { type: "text", name: "price", 
                        // value='price'
                        // id='price'
                        placeholder: "Price Range" })),
                React.createElement("div", { className: "box" },
                    React.createElement("button", { className: "btn btn-lg btn-block" }, "Search")),
                React.createElement("button", { className: "btn btn-success" },
                    React.createElement(fa_1.FaSearch, null)))))); })));
};
exports["default"] = HeroSection;
