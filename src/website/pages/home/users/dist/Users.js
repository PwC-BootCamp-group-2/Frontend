"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var individual_user_webp_1 = require("../../../assets/img/individual-user.webp");
var merchant_user_webp_1 = require("../../../assets/img/merchant-user.webp");
var bi_1 = require("react-icons/bi");
var react_router_dom_1 = require("react-router-dom");
require("./Users.css");
var Users = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Container, null,
            React.createElement("section", null,
                React.createElement(react_bootstrap_1.Col, { className: "individual-user-container" },
                    React.createElement(react_bootstrap_1.Col, null,
                        React.createElement(react_bootstrap_1.Image, { src: individual_user_webp_1["default"], className: "individual-user-image" })),
                    React.createElement(react_bootstrap_1.Col, null,
                        React.createElement("div", null,
                            React.createElement("h1", { className: "individual-user-content-title" }, "Book your space with ease."),
                            React.createElement("span", null, "We make book of spaces an easy activity. We enable individuals to to automate payments through our platform to help avoid delays and stress. The user gets to connect their credit card to the platform for easy of transactions.")),
                        React.createElement("div", { className: "mt-3" },
                            React.createElement("button", { className: "individual-user-button" },
                                React.createElement(react_router_dom_1.Link, { to: "/login" }, "Get Started"),
                                React.createElement(bi_1.BiChevronRight, { size: 20, color: "#fff" }))))),
                React.createElement(react_bootstrap_1.Col, { className: "individual-user-container" },
                    " ",
                    React.createElement(react_bootstrap_1.Col, null,
                        React.createElement("div", { className: "merchant-user-content-container" },
                            React.createElement("h1", { className: "individual-user-content-title" }, "Lease your space with ease."),
                            React.createElement("span", null, "We also provide an opportunity for users to host their spaces and resources on our platform with it. They are give the priviledge to make withdrawals seamlessly.")),
                        React.createElement("div", { className: "mt-3" },
                            React.createElement("button", { className: "individual-user-button" },
                                React.createElement(react_router_dom_1.Link, { to: "/login" }, "Become a Merchant"),
                                React.createElement(bi_1.BiChevronRight, { size: 20, color: "#fff" })))),
                    React.createElement(react_bootstrap_1.Col, { className: "merchant-user-image-container" },
                        React.createElement(react_bootstrap_1.Image, { src: merchant_user_webp_1["default"], className: "individual-user-image" })))))));
};
exports["default"] = Users;
