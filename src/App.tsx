import './App.css';
import Sidebar from './application/components/individuals/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './application/pages/individuals/Dashboard';
import Analytics from './application/pages/individuals/Analytics';
import Booking from './application/pages/individuals/Booking';
import Messages from './application/pages/individuals/Messages';
import Promotion from './application/pages/individuals/Promotion';
import Spaces from './application/pages/individuals/Spaces';
import Settings from './application/pages/individuals/Settings';
import Logout from './application/pages/individuals/Logout';
import MerchantLogout from './application/pages/merchants/MerchantLogout';
import MerchantSettings from './application/pages/merchants/MerchantSettings';
import MerchantMessages from './application/pages/merchants/MerchantMessages';
import MerchantBooking from './application/pages/merchants/MerchantBooking';
import MerchantAnalytics from './application/pages/merchants/MerchantAnalytics';
import MerchantDashboard from './application/pages/merchants/MerchantDashboard';
import MerchantSidebar from './application/components/merchants/MerchantSidebar';
import MerchantCompleteOrder from './application/pages/merchants/MerchantCompleteOrder';
import MerchantInReview from './application/pages/merchants/MerchantInReview';
import MerchantCancel from './application/pages/merchants/MerchantCancel';
import Footer from './website/components/footer/Footer';
import Header from './website/components/header/Header';
import AboutUs from './website/pages/about/AboutUs';
import Home from './website/pages/home/Home';
// import About from './pages/about/About';
import Pricing from './website/pages/pricing/Pricing';
import BecomeAHost from './website/pages/becomeahost/BecomeAHost';
import HowItWorks from './website/pages/howitworks/HowItWorks';
import Account from './website/pages/account/createAccount/Account';
import Login from './website/pages/account/login/Login';
import './website/assets/css/style1.css';
import './website/assets/css/style2.css';
import './website/assets/css/style3.css';
// old
import './website/assets/css/damier.css';
import './website/assets/css/leke.css';
import './website/assets/css/sarah.css';
import UserSignup from './website/pages/account/usersignup/UserSignup';
import TeamSignup from './website/pages/account/teamsignup/TeamSignup';
import { FC, useState } from 'react';
import ApplicationRoutes from './application/ApplicationRoutes';
import WebsiteRoutes from './website/WebsiteRoutes';
const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <ApplicationRoutes />
        <WebsiteRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
