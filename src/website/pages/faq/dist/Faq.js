"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
require("./Faq.css");
var Faq = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Container, { fluid: true, className: "p-0 faqs-wrapper" },
            React.createElement("section", { className: "faq-hero-container" },
                React.createElement("div", { className: "faq-hero-content" },
                    React.createElement("h2", null, "Frequently Asked Questions"))),
            React.createElement("section", { className: "faqs-container " },
                React.createElement(react_bootstrap_1.Col, { xs: 3 },
                    React.createElement(react_bootstrap_1.ListGroup, { defaultActiveKey: "#link1" },
                        React.createElement(react_bootstrap_1.ListGroup.Item, { action: true, href: "#link1" }, "General Questions"),
                        React.createElement(react_bootstrap_1.ListGroup.Item, { action: true, href: "#link2" }, "Registration Questions"))),
                React.createElement(react_bootstrap_1.Col, { xs: 8 },
                    React.createElement(react_bootstrap_1.Col, { id: "link1" },
                        React.createElement("h4", null, "General Questions"),
                        React.createElement(react_bootstrap_1.Accordion, null,
                            React.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "0" },
                                React.createElement(react_bootstrap_1.Accordion.Header, null, "How can I reserve a space"),
                                React.createElement(react_bootstrap_1.Accordion.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                            React.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "1" },
                                React.createElement(react_bootstrap_1.Accordion.Header, null, "Are there rules that come with spaces"),
                                React.createElement(react_bootstrap_1.Accordion.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                            React.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "2" },
                                React.createElement(react_bootstrap_1.Accordion.Header, null, "What are the top spaces you will recommend?"),
                                React.createElement(react_bootstrap_1.Accordion.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))),
                    React.createElement(react_bootstrap_1.Col, { id: "link2", className: "faqs-accordion" },
                        React.createElement("h4", null, "Registration Questions"),
                        React.createElement(react_bootstrap_1.Accordion, null,
                            React.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "0" },
                                React.createElement(react_bootstrap_1.Accordion.Header, null,
                                    "Where will my registration link be sent?",
                                    " "),
                                React.createElement(react_bootstrap_1.Accordion.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                            React.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "1" },
                                React.createElement(react_bootstrap_1.Accordion.Header, null, "Are there other ways to log in into my account?"),
                                React.createElement(react_bootstrap_1.Accordion.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),
                            React.createElement(react_bootstrap_1.Accordion.Item, { eventKey: "2" },
                                React.createElement(react_bootstrap_1.Accordion.Header, null, "What details will you be collecting upon registration"),
                                React.createElement(react_bootstrap_1.Accordion.Body, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))))));
};
exports["default"] = Faq;
