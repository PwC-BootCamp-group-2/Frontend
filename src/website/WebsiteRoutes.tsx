
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
