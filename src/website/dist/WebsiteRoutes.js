"use strict";
exports.__esModule = true;
require("./assets/css/style1.css");
require("./assets/css/style2.css");
require("./assets/css/style3.css");
// old
require("./assets/css/damier.css");
require("./assets/css/leke.css");
require("./assets/css/sarah.css");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./components/header/Header");
var Footer_1 = require("./components/footer/Footer");
var AboutUs_1 = require("./pages/about/AboutUs");
var Contact_1 = require("./pages/contact/Contact");
var Home_1 = require("./pages/home/Home");
var Login_1 = require("./pages/login/Login");
var Product_1 = require("./pages/product/Product");
var Faq_1 = require("./pages/faq/Faq");
var Signup_1 = require("./pages/signup/Signup");
var BookingSuccessful_1 = require("./pages/booking/BookingSuccessful");
var CheckInSuccessful_1 = require("./pages/booking/CheckInSuccessful");
var CheckInUnsuccessful_1 = require("./pages/booking/CheckInUnsuccessful");
var BookingUnsuccessful_1 = require("./pages/booking/BookingUnsuccessful");
var BookingConfirmed_1 = require("./pages/booking/BookingConfirmed");
var Verified_1 = require("./pages/booking/Verified");
var Search_1 = require("./pages/search/Search");
var NotVerified_1 = require("./pages/booking/NotVerified");
var SpaceSuccessful_1 = require("./pages/booking/SpaceSuccessful");
var WebsiteRoutes = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: [React.createElement(Header_1["default"], null), React.createElement(Home_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/faq", element: [React.createElement(Header_1["default"], null), React.createElement(Faq_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/signup", element: [React.createElement(Header_1["default"], null), React.createElement(Signup_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/about", element: [React.createElement(Header_1["default"], null), React.createElement(AboutUs_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/product", element: [React.createElement(Header_1["default"], null), React.createElement(Product_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/bookingsuccessful", element: [React.createElement(Header_1["default"], null), React.createElement(BookingSuccessful_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/checkinsuccessful", element: [React.createElement(Header_1["default"], null), React.createElement(CheckInSuccessful_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/checkinunsuccessful", element: [React.createElement(Header_1["default"], null), React.createElement(CheckInUnsuccessful_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/bookingunsuccessful", element: [React.createElement(Header_1["default"], null), React.createElement(BookingUnsuccessful_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/bookingconfirmed", element: [React.createElement(Header_1["default"], null), React.createElement(BookingConfirmed_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/verified", element: [React.createElement(Header_1["default"], null), React.createElement(Verified_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/notverified", element: [React.createElement(Header_1["default"], null), React.createElement(NotVerified_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/spacesuccessful", element: [React.createElement(Header_1["default"], null), React.createElement(SpaceSuccessful_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/contact", element: [React.createElement(Header_1["default"], null), React.createElement(Contact_1["default"], null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/login", element: [React.createElement(Header_1["default"], null), React.createElement(Login_1.Login, null), React.createElement(Footer_1["default"], null)] }),
            React.createElement(react_router_dom_1.Route, { path: "/search", element: [React.createElement(Header_1["default"], null), React.createElement(Search_1["default"], null), React.createElement(Footer_1["default"], null)] }))));
};
exports["default"] = WebsiteRoutes;
