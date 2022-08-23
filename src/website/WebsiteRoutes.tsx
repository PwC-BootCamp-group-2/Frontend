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
      
      <Routes>
        <Route path="/" element={[<Header />,<Home />,<Footer />]} />
        <Route path="/about" element={[<Header />,<AboutUs />,<Footer />]} />
        <Route path="/product" element={[<Header/>, <Product />, <Footer/>]} />
      </Routes>
    </>
  );
};
export default WebsiteRoutes;
