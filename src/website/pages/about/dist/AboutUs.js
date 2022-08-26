"use strict";
exports.__esModule = true;
var clients_png_1 = require("../../assets/img/clients.png");
var about_story_png_1 = require("../../assets/img/about-story.png");
var our_team_png_1 = require("../../assets/img/our-team.png");
var react_bootstrap_1 = require("react-bootstrap");
require("./About.css");
var react_typical_1 = require("react-typical");
var AboutUs = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Container, { fluid: true, className: "p-0" },
            React.createElement("section", { className: "about-us" },
                React.createElement(react_bootstrap_1.Col, { className: "about-hero-container" },
                    React.createElement(react_bootstrap_1.Col, { xs: 6, className: "about-hero" },
                        React.createElement("section", null,
                            React.createElement("p", { className: "about-hero-pill" }, "Our Mission"),
                            React.createElement("h1", { className: "about-hero-title" },
                                React.createElement(react_typical_1["default"], { steps: ["Create", 5000, "Build", 5000], loop: Infinity, className: "animated-text", wrapper: "b" }),
                                "a world where people work to make a",
                                " ",
                                React.createElement("b", { className: "bold-text" }, "life"),
                                ", not just a",
                                " ",
                                React.createElement("b", { className: "bold-text" }, "living.")))),
                    React.createElement(react_bootstrap_1.Col, { xs: 6, className: "mx-3" },
                        React.createElement(react_bootstrap_1.Image, { src: our_team_png_1["default"], className: "about-hero-image" }))),
                React.createElement(react_bootstrap_1.Col, { className: "about-story-container" },
                    React.createElement(react_bootstrap_1.Col, { xs: 6, className: "about-story-image-container" },
                        React.createElement(react_bootstrap_1.Image, { src: about_story_png_1["default"], className: "about-story-image" })),
                    React.createElement(react_bootstrap_1.Col, { xs: 6, className: "about-story" },
                        React.createElement("div", null,
                            React.createElement("h2", { className: "fw-bolder" }, "Our Story"),
                            React.createElement("span", { className: "about-story-content" }, "SpaceHub is the an \u201COffice Hoteling\u201D application in Nigeria. Our platform is aimed at solving the problem of spaces and office resources.We are also giving individuals the opportunity to lease their spaces."),
                            " ",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("span", { className: "about-story-content" }, "When we birthed SpaceHub, we wanted to build more than beautiful, shared office spaces. We wanted to build a community. A place you join as an individual, 'me', but where you become part of a greater 'we'. A place where we\u2019re redefining success measured by personal fulfillment."),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("span", { className: "about-story-content" }, "In years to come, we have hope to have continued to deliver excellent service to our users , helping them to live a work-balanced life We hope to increase the user experience using the metaverse to tour the office space before booking.")))),
                " ",
                React.createElement(react_bootstrap_1.Col, { className: "clients" },
                    React.createElement(react_bootstrap_1.Image, { src: clients_png_1["default"], width: "100%", height: "100%" }))))));
};
exports["default"] = AboutUs;
