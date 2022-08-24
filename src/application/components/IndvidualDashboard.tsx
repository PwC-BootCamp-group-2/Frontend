import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/individuals/Dashboard";
import Analytics from "../pages/individuals/Analytics";
import Booking from "../pages/individuals/Booking";
import Spaces from "../pages/individuals/Spaces";
import Settings from "../pages/individuals/Settings";
import Index from "../pages/individuals/index";

function IndvidualDashboard() {
  return (
    <Routes>

      <Route path="dashboard" element={<Index />}>
      <Route path="" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="booking" element={<Booking />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default IndvidualDashboard;
