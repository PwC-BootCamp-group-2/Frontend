// import './App.css';
import Sidebar from './components/individuals/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/individuals/Dashboard';
import Analytics from './pages/individuals/Analytics';
import Booking from './pages/individuals/Booking';
import Messages from './pages/individuals/Messages';
import Promotion from './pages/individuals/Promotion';
import Spaces from './pages/individuals/Spaces';
import Settings from './pages/individuals/Settings';
import Logout from './pages/individuals/Logout';
import MerchantLogout from './pages/merchants/MerchantLogout';
import MerchantSettings from './pages/merchants/MerchantSettings';
import MerchantMessages from './pages/merchants/MerchantMessages';
import MerchantBooking from './pages/merchants/MerchantBooking';
import MerchantAnalytics from './pages/merchants/MerchantAnalytics';
import MerchantDashboard from './pages/merchants/MerchantDashboard';
import MerchantSidebar from './components/merchants/MerchantSidebar';
import MerchantCompleteOrder from './pages/merchants/MerchantCompleteOrder';
import MerchantInReview from './pages/merchants/MerchantInReview';
import MerchantCancel from './pages/merchants/MerchantCancel';
import { FC, useState } from 'react';
const ApplicationRoutes: FC = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <MerchantSidebar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/merchant-dashboard" element={<MerchantDashboard />} />
          <Route path="/merchant-analytics" element={<MerchantAnalytics />} />
          <Route path="/merchant-booking" element={<MerchantBooking />} />
          <Route path="/merchant-messages" element={<MerchantMessages />} />
          <Route path="/merchant-spaces" element={<MerchantSettings />} />
          <Route path="/merchant-settings" element={<MerchantSettings />} />
          <Route path="/merchant-logout" element={<MerchantLogout />} />
          <Route
            path="/merchant-complete-order"
            element={<MerchantCompleteOrder />}
          />
          <Route path="/merchant-in-review" element={<MerchantInReview />} />
          <Route path="/merchant-cancel" element={<MerchantCancel />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default ApplicationRoutes;
