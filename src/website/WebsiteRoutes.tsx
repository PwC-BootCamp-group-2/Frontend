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
const WebsiteRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Footer /> */}
        <Route path="/" element={[<Header />, <Home />, <Footer />]} />
        <Route path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
        <Route
          path="/product"
          element={[<Header />, <Product />, <Footer />]}
        />
        <Route path="/login" element={[<Header />, <Login />]} />
        <Route path="/contact" element={[<Header />, <Contact />]} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
