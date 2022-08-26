"use strict";
exports.__esModule = true;
require("../../utils/css/merchants/MerchantDashboard.css");
var react_bootstrap_1 = require("react-bootstrap");
var fa_1 = require("react-icons/fa");
var bi_1 = require("react-icons/bi");
var gi_1 = require("react-icons/gi");
var bs_1 = require("react-icons/bs");
var admin_png_1 = require("../../utils/images/admin.png");
var recent_activities_png_1 = require("../../utils/images/recent-activities.png");
var react_1 = require("react");
var WithdrawModal_1 = require("../../components/merchants/withdrawModal/WithdrawModal");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var MerchantDashboard = function () {
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.auth; }), user = _a.user, isError = _a.isError, isLoading = _a.isLoading, isSuccess = _a.isSuccess, message = _a.message;
    // useEffect(() => {
    //   if (isError) {
    //     console.log(message);
    //   }
    //   if (!user) {
    //     navigate('/login');
    //   }
    //   return () => {
    //     dispatch(reset());
    //   };
    // }, [user, navigate, isError, message, dispatch]);
    var _b = react_1.useState(false), showModal = _b[0], setShowModal = _b[1];
    var handleWmodal = function () {
        setShowModal(true);
    };
    return (React.createElement("div", { className: "merchant-container" },
        React.createElement("section", { className: "header-section" },
            React.createElement("div", null,
                React.createElement("h3", null,
                    React.createElement("b", null, "Dashboard"))),
            React.createElement("div", { className: "search-container d-flex justify-content-end" },
                React.createElement("div", { className: "wallet-container d-flex align-items-center gap-2" },
                    React.createElement(bi_1.BiWallet, { size: 25 }),
                    React.createElement("div", { className: "wallet-container-balance" },
                        React.createElement("p", { className: "m-0" }, "NGN 1,500"),
                        React.createElement("h6", { className: "m-0" }, "Wallet")),
                    React.createElement(gi_1.GiTakeMyMoney, { title: "Withdraw", onClick: handleWmodal, size: 25 }))),
            React.createElement("div", { className: "d-flex align-items-center gap-2" },
                React.createElement(fa_1.FaRegBell, { size: 32 }),
                React.createElement("span", null,
                    React.createElement("b", null,
                        "Welcome ",
                        React.createElement("br", null),
                        " Rachel Maduka! (Admin)")),
                React.createElement("div", { className: "mx-2" },
                    React.createElement(react_bootstrap_1.Image, { src: admin_png_1["default"] })))),
        React.createElement("section", null,
            React.createElement("section", { className: "d-flex analytics mt-5 align-items-center" },
                React.createElement("div", { className: "stats" },
                    showModal && React.createElement(WithdrawModal_1["default"], { sState: setShowModal }),
                    React.createElement(react_bootstrap_1.Image, { src: recent_activities_png_1["default"], alt: "Stats" })),
                React.createElement("div", { className: "w-25 all-transactions" },
                    React.createElement("div", { className: "d-flex justify-content-between" },
                        React.createElement("span", null, "All transactions")),
                    React.createElement("div", null,
                        React.createElement("div", { className: "d-flex align-items-center total-income" },
                            React.createElement(bs_1.BsArrowUpSquare, { size: 25, color: "#00A870" }),
                            React.createElement("div", null,
                                React.createElement("span", null, "Total Income"),
                                React.createElement("h3", null,
                                    React.createElement("b", null, "$12,650.00")))),
                        React.createElement("div", { className: "d-flex align-items-center total-income" },
                            React.createElement(bs_1.BsArrowDownSquare, { size: 25, color: "#FF7426" }),
                            React.createElement("div", null,
                                React.createElement("span", null, "Total Withdrawal"),
                                React.createElement("h3", null,
                                    React.createElement("b", null, "$6,250.00")))),
                        React.createElement("div", { className: "d-flex align-items-center total-income" },
                            React.createElement(bs_1.BsDashSquare, { size: 25, color: "#2874CE" }),
                            React.createElement("div", null,
                                React.createElement("span", null, "Total Balance"),
                                React.createElement("h3", null,
                                    React.createElement("b", null, "$6,310.00")))),
                        React.createElement("div", null),
                        React.createElement("div", null)))),
            React.createElement("section", { className: "w-100 d-flex mt-5 align-items-center" },
                React.createElement("div", { className: "merchant-table-container w-100" },
                    React.createElement("div", { className: "d-flex justify-content-between" },
                        React.createElement("h4", null,
                            React.createElement("b", null, "Latest Bookings")),
                        React.createElement("div", null,
                            React.createElement("span", { className: "size" },
                                React.createElement("b", null, "View All")),
                            React.createElement(bs_1.BsArrowRight, { size: 20, color: "#07163E", className: "mx-2" }))),
                    React.createElement("div", null,
                        React.createElement(react_bootstrap_1.Table, { borderless: true },
                            React.createElement("tbody", null,
                                React.createElement("tr", { className: "d-flex align-items-center justify-content-evenly" },
                                    React.createElement("td", { className: "d-flex align-items-center" },
                                        React.createElement(react_bootstrap_1.Image, { src: admin_png_1["default"] }),
                                        React.createElement("div", null,
                                            React.createElement("p", { className: "mx-4 my-0" }, "Fiji Hall"),
                                            React.createElement("span", { className: "mx-4" }, "ByKiwumi"))),
                                    React.createElement("td", null, "Jan 15, 2021 at 5:37 PM "),
                                    React.createElement("td", null,
                                        React.createElement("div", { className: "d-flex justify-content-center" },
                                            React.createElement("div", { className: "booking-status" },
                                                React.createElement("p", null, "Cancel")))),
                                    React.createElement("td", { className: "amount-text" },
                                        React.createElement("span", { style: { color: "red" } }, "- 1700.00 USD"))))))),
                React.createElement("div", { className: " w-25 bg-white recent-reviews" },
                    React.createElement("div", { className: "mx-3" },
                        React.createElement("h5", null,
                            React.createElement("b", null, "Notifications"))),
                    React.createElement("div", { className: "reviews-container" },
                        React.createElement("div", null),
                        React.createElement("div", { className: "reviews" },
                            React.createElement("h6", null,
                                React.createElement("b", null, "New Order")),
                            React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit"))))))));
};
exports["default"] = MerchantDashboard;
