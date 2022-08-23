import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/about/AboutUs";
import Home from "./pages/home/Home";
import { FC } from "react";
import Product from "./pages/product/Product";
const WebsiteRoutes: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};
export default WebsiteRoutes;
