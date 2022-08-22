import "./App.css";
import Sidebar from "./application/components/individuals/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./application/pages/individuals/Dashboard";
import Analytics from "./application/pages/individuals/Analytics";
import Booking from "./application/pages/individuals/Booking";
import Messages from "./application/pages/individuals/Messages";
import Promotion from "./application/pages/individuals/Promotion";
import Spaces from "./application/pages/individuals/Spaces";
import Settings from "./application/pages/individuals/Settings";
import Logout from "./application/pages/individuals/Logout";
import MerchantLogout from "./application/pages/merchants/MerchantLogout";
import MerchantSettings from "./application/pages/merchants/MerchantSettings";
import MerchantMessages from "./application/pages/merchants/MerchantMessages";
import MerchantBooking from "./application/pages/merchants/MerchantBooking";
import MerchantAnalytics from "./application/pages/merchants/MerchantAnalytics";
import MerchantDashboard from "./application/pages/merchants/MerchantDashboard";
import MerchantSidebar from "./application/components/merchants/MerchantSidebar";
import MerchantCompleteOrder from "./application/pages/merchants/MerchantCompleteOrder";
import MerchantInReview from "./application/pages/merchants/MerchantInReview";
import MerchantCancel from "./application/pages/merchants/MerchantCancel";
import { FC, useState } from "react";
const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <MerchantSidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
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
      </BrowserRouter>
    </>
  );
};

export default App;
