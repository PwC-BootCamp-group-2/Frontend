import './assets/css/style1.css';
import './assets/css/style2.css';
import './assets/css/style3.css';
// old
import './assets/css/damier.css';
import './assets/css/leke.css';
import './assets/css/sarah.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/about/AboutUs";
import Home from "./pages/home/Home";
import {Login} from "./pages/login/Login";
import { FC } from "react";
import Product from "./pages/product/Product";
const WebsiteRoutes: FC = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;