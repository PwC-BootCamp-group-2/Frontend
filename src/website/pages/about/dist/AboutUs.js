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
                            React.createElement("span", { className: "about-story-content" }, "SpaceHub is the first online \u201COffice Hoteling\u201D app in Nigeria. We first birthed as \u201CSpace Hub\u201D on the 7th of January 2016 as a savings-only platform. spent."),
                            " ",
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("span", { className: "about-story-content" }, "For 3 years, we offered only savings to our users. Then in April of 2019, we rebranded to \u201CSpaceHub\u201D and began offering direct investment opportunities to users in addition to savings."),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement("span", { className: "about-story-content" }, "5 years on, we have continued to deliver excellent service to our 1,000,000 users and counting, helping them manage their finances with simplicity and transparency. Combined, our users save & invest billions of Naira every month that they would have instead spent.")))),
                " ",
                React.createElement(react_bootstrap_1.Col, { className: "clients" },
                    React.createElement(react_bootstrap_1.Image, { src: clients_png_1["default"], width: "100%", height: "100%" }))))));
};
exports["default"] = AboutUs;
