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
var react_bootstrap_1 = require("react-bootstrap");
var user_signup_png_1 = require("../../assets/img/user-signup.png");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./Signup.css");
var react_redux_1 = require("react-redux");
var react_toastify_1 = require("react-toastify");
var fa_1 = require("react-icons/fa");
var Signup = function () {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.auth; }), user = _a.user, isError = _a.isError, isLoading = _a.isLoading, isSuccess = _a.isSuccess, message = _a.message;
    var _b = react_1.useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        password2: ""
    }), formData = _b[0], setFormData = _b[1];
    var name = formData.name, email = formData.email, phoneNumber = formData.phoneNumber, address = formData.address, password = formData.password, password2 = formData.password2;
    var navigate = react_router_dom_1.useNavigate();
    var onChange = function (e) {
        setFormData(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    var onSubmit = function (e) {
        e.preventDefault();
        if (password !== password2) {
            react_toastify_1.toast.error("Passwords do not match");
            return;
        }
        else {
            // const userData: UserRegisterType = {
            //   email,
            //   phoneNumber,
            //   password,
            //   companyName,
            //   role,
            //   address
            // };
            // dispatch(register(userData));
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Container, { fluid: true, className: "signup-wrapper p-0" },
            React.createElement("section", { className: "signup-container" },
                React.createElement(react_bootstrap_1.Col, { xs: 6 },
                    React.createElement(react_bootstrap_1.Image, { src: user_signup_png_1["default"], className: "signup-image" })),
                React.createElement(react_bootstrap_1.Col, { xs: 5 },
                    React.createElement("div", { className: "verification-modal" },
                        React.createElement("div", { className: "modal-closeBtn" },
                            React.createElement(fa_1.FaTimesCircle, { size: 20 })),
                        React.createElement("div", null,
                            React.createElement(fa_1.FaCheckCircle, { size: 150, color: "#009052" })),
                        React.createElement("div", null,
                            React.createElement("p", { className: "link-text" }, "A verification link has been sent to your email address. Kindly check to complete your registration")),
                        React.createElement("form", { className: "resend-link-form" },
                            React.createElement("input", { type: "submit", className: "link-btn", value: "Resend Link", style: { backgroundColor: "#009052", color: "#fff" } }))))))));
};
exports["default"] = Signup;
