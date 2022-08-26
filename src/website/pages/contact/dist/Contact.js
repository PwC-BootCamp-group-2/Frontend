"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var bs_1 = require("react-icons/bs");
var bi_1 = require("react-icons/bi");
var md_1 = require("react-icons/md");
require("./Contact.css");
var contact_form_webp_1 = require("../../assets/img/contact-form.webp");
var useWindowSize_1 = require("react-use/lib/useWindowSize");
var react_confetti_1 = require("react-confetti");
var FORM_ENDPOINT = "https://public.herotofu.com/v1/6ee35fd0-2226-11ed-a969-f1ede4dc5ccf";
var Contact = function () {
    var _a = useWindowSize_1["default"](), width = _a.width, height = _a.height;
    var _b = react_1.useState(""), status = _b[0], setStatus = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // Anything you need to inject dynamically
        var injectedData = {
            DYNAMIC_DATA_EXAMPLE: 123
        };
        var inputs = e.target.elements;
        var data = {};
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }
        Object.assign(data, injectedData);
        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {
            // It's likely a spam/bot request, so bypass it to validate via captcha
            if (response.status === 422) {
                //   Object.keys(injectedData).forEach((key) => {
                //     const el = document.createElement("input");
                //     el.type = "hidden";
                //     el.name = key;
                //     el.value = injectedData[key];
                //     e.target.appendChild(el);
                //   });
                e.target.submit();
                throw new Error("Please finish the captcha challenge");
            }
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function () { return setStatus("We'll be in touch soon."); })["catch"](function (err) { return setStatus(err.toString()); });
    };
    if (status) {
        return (React.createElement(React.Fragment, null,
            React.createElement(react_confetti_1["default"], { width: width, height: height }),
            React.createElement(react_bootstrap_1.Col, { className: "response-container" },
                React.createElement("section", { className: "response-card" },
                    React.createElement("div", { className: "text-2xl" }, "Thank you!"),
                    React.createElement("div", { className: "text-md" }, status)))));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Container, { fluid: true, className: "p-0" },
            React.createElement("section", null,
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement("div", { className: "contact-hero-section" },
                        React.createElement("div", { className: "contact-hero-content" },
                            React.createElement("h1", null, "Contact Us")))),
                React.createElement(react_bootstrap_1.Col, { className: "contact-content-section" },
                    React.createElement("section", { className: "contact-cards-container" },
                        React.createElement(react_bootstrap_1.Col, { xs: 4, className: "contact-cards" },
                            React.createElement(react_bootstrap_1.Card, { style: { width: "18rem" }, className: "single-cards" },
                                React.createElement(react_bootstrap_1.Card.Body, null,
                                    React.createElement(bs_1.BsQuestionCircleFill, { size: 25, color: "#AD1B02" }),
                                    React.createElement(react_bootstrap_1.Card.Title, { className: "contact-card-title" }, "Have a question?"),
                                    React.createElement(react_bootstrap_1.Card.Text, { className: "contact-card-copy" }, "Checkout our FAQ section for tons of answers to some of our most common customer questions. It is the fastest way to get the answer you're looking for."),
                                    React.createElement(react_bootstrap_1.Card.Link, { href: "#", className: "contact-card-link" },
                                        "Visit Our Help Center ",
                                        React.createElement(bi_1.BiChevronRight, { size: 20 }))))),
                        React.createElement(react_bootstrap_1.Col, { xs: 4, className: "contact-cards" },
                            React.createElement(react_bootstrap_1.Card, { style: { width: "18rem" }, className: "single-cards" },
                                React.createElement(react_bootstrap_1.Card.Body, null,
                                    React.createElement(bs_1.BsFillEnvelopeFill, { size: 25, color: "#AD1B02" }),
                                    React.createElement(react_bootstrap_1.Card.Title, { className: "contact-card-title" }, "Reach out to directly"),
                                    React.createElement(react_bootstrap_1.Card.Text, { className: "contact-card-copy" },
                                        "Send us an email via",
                                        " ",
                                        React.createElement("a", { href: "mailto:support@spacehub.com" }, "support@spacehub.com"),
                                        " ",
                                        "and ring our phone on",
                                        " ",
                                        React.createElement("a", { href: "tel:018889990" }, "01 888 9990"),
                                        " and a representative will attend to you as soon as possible"),
                                    React.createElement(react_bootstrap_1.Card.Link, { href: "#", className: "contact-card-link" },
                                        "Send an Email ",
                                        React.createElement(bi_1.BiChevronRight, { size: 20 }))))),
                        React.createElement(react_bootstrap_1.Col, { xs: 4, className: "contact-cards" },
                            React.createElement(react_bootstrap_1.Card, { style: { width: "18rem" }, className: "single-cards" },
                                React.createElement(react_bootstrap_1.Card.Body, null,
                                    React.createElement(md_1.MdLocationOn, { size: 25, color: "#AD1B02" }),
                                    React.createElement(react_bootstrap_1.Card.Title, { className: "contact-card-title" }, "Locate us"),
                                    React.createElement(react_bootstrap_1.Card.Text, { className: "contact-card-copy" }, "With Spacehub now available in over 200,000 locations across Nigeria, our agents are always minutes away to cater to your every workspace need"),
                                    React.createElement(react_bootstrap_1.Card.Link, { href: "#", className: "contact-card-link" },
                                        "Find a Spacee near you ",
                                        React.createElement(bi_1.BiChevronRight, { size: 20 }))))))),
                React.createElement(react_bootstrap_1.Col, { className: "contact-form-container" },
                    React.createElement(react_bootstrap_1.Col, { xs: 7 },
                        React.createElement("div", null,
                            React.createElement(react_bootstrap_1.Image, { src: contact_form_webp_1["default"], className: "contact-form-image" }))),
                    React.createElement(react_bootstrap_1.Col, { xs: 5, className: "contact-form" },
                        React.createElement("form", { action: FORM_ENDPOINT, onSubmit: handleSubmit, method: "POST", target: "_blank" },
                            React.createElement("h4", null, "Get In touch "),
                            React.createElement("p", { className: "text-center" }, "Need anything? We'll be more than happy to offer you our help"),
                            React.createElement("div", { className: "form_grp" },
                                React.createElement("label", { className: "form_label", htmlFor: "name" }, "Full Name:"),
                                React.createElement("input", { type: "text", placeholder: "Your name", id: "input", name: "name", required: true })),
                            React.createElement("div", { className: "form_grp" },
                                React.createElement("label", { className: "form_label", htmlFor: "email" }, "Email:"),
                                React.createElement("input", { type: "email", placeholder: "Email", id: "input", name: "email", required: true })),
                            React.createElement("div", { className: "form_grp" },
                                React.createElement("label", { className: "form_label", htmlFor: "message" }, "Message:"),
                                React.createElement("textarea", { placeholder: "Your message", id: "message", name: "message", required: true }),
                                React.createElement("button", { type: "submit", id: "submit" },
                                    " ",
                                    "Send a message",
                                    " "))))),
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement("div", { className: "contact-divider" }))))));
};
exports["default"] = Contact;
