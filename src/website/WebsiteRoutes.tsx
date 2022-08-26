import "./assets/css/style1.css";
import "./assets/css/style2.css";
import "./assets/css/style3.css";
// old
import "./assets/css/damier.css";
import "./assets/css/leke.css";
import "./assets/css/sarah.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { FC } from "react";
import Product from "./pages/product/Product";
import Faq from "./pages/faq/Faq";
import Signup from "./pages/signup/Signup";
import BookingSuccessful from "./pages/booking/BookingSuccessful";
import CheckInSuccessful from "./pages/booking/CheckInSuccessful";
import CheckInUnsuccessful from "./pages/booking/CheckInUnsuccessful";
import BookingUnsuccessful from "./pages/booking/BookingUnsuccessful";
import BookingConfirmed from "./pages/booking/BookingConfirmed";
import Verified from "./pages/verify/Verified";
import NotVerified from "./pages/booking/NotVerified";
import Search from "./pages/search/Search";
import SpaceSuccessful from "./pages/booking/SpaceSuccessful";
const WebsiteRoutes: FC = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={[<Header />, <Home />, <Footer />]} />
        <Route path='/bookingsuccessful' element={[<Header />, <BookingSuccessful />, <Footer />]} />
        <Route path='/checkinsuccessful/:bookingId' element={[<Header />, <CheckInSuccessful />, <Footer />]} />
        <Route path='/checkinunsuccessful' element={[<Header />, <CheckInUnsuccessful />, <Footer />]} />
        <Route path='/bookingunsuccessful' element={[<Header />, <BookingUnsuccessful />, <Footer />]} />
        <Route path='/bookingconfirmed' element={[<Header />, <BookingConfirmed />, <Footer />]} />
        <Route path='/verify/:token' element={[<Header />, <Verified />, <Footer />]} />
        <Route
          path="/bookingsuccessful"
          element={[<Header />, <BookingSuccessful />, <Footer />]}
        />
        <Route
          path="/checkinsuccessful"
          element={[<Header />, <CheckInSuccessful />, <Footer />]}
        />
        <Route
          path="/checkinunsuccessful"
          element={[<Header />, <CheckInUnsuccessful />, <Footer />]}
        />
        <Route
          path="/bookingunsuccessful"
          element={[<Header />, <BookingUnsuccessful />, <Footer />]}
        />
        <Route
          path="/bookingconfirmed"
          element={[<Header />, <BookingConfirmed />, <Footer />]}
        />
        <Route
          path="/verified"
          element={[<Header />, <Verified />, <Footer />]}
        />
        <Route
          path="/notverified"
          element={[<Header />, <NotVerified />, <Footer />]}
        />
        <Route
          path="/spacesuccessful"
          element={[<Header />, <SpaceSuccessful />, <Footer />]}
        />
        <Route
          path="/contact"
          element={[<Header />, <Contact />, <Footer />]}
        />
        <Route path="/login" element={[<Header />, <Login />, <Footer />]} />
        <Route path="/signup" element={[<Header />, <Signup />, <Footer />]} />
        <Route path="/search" element={[<Header />, <Search />, <Footer />]} />
        <Route path="/faq" element={[<Header />, <Faq />, <Footer />]} />
        <Route path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
        <Route path="/product/:id" element={[<Header />, <Product />, <Footer />]} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
