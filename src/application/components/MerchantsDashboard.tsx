import { Route, Routes } from "react-router-dom";

import MerchantSettings from "../pages/merchants/MerchantSettings";
import MerchantBooking from "../pages/merchants/MerchantBooking";
import MerchantAnalytics from "../pages/merchants/MerchantAnalytics";
import MerchantDashboard from "../pages/merchants/MerchantDashboard";
import { FC } from "react";

const MerchantsDashboard: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<MerchantDashboard />} />
        <Route path="/analytics" element={<MerchantAnalytics />} />
        <Route path="/booking" element={<MerchantBooking />} />
        <Route path="/spaces" element={<MerchantSettings />} />
        <Route path="/merchant-settings" element={<MerchantSettings />} />
      </Routes>
    </>
  );
};

export default MerchantsDashboard;
