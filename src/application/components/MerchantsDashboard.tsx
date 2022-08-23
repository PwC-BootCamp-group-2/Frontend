import { Route, Routes } from "react-router-dom";

import MerchantSettings from "../pages/merchants/MerchantSettings";
import MerchantBooking from "../pages/merchants/MerchantBooking";
import MerchantAnalytics from "../pages/merchants/MerchantAnalytics";
import MerchantDashboard from "../pages/merchants/MerchantDashboard";
import { FC } from "react";
import Index from "../pages/merchants/Index";

const MerchantsDashboard: FC = () => {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Index />}>
          <Route path="" element={<MerchantDashboard />}/>
          <Route path="analytics" element={<MerchantAnalytics />} />
          <Route path="booking" element={<MerchantBooking />} />
          <Route path="spaces" element={<MerchantSettings />} />
          <Route path="settings" element={<MerchantSettings />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default MerchantsDashboard;
