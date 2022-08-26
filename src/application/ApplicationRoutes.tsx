import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../app/store";

import { StoreType } from "../types/redux";
import { ROLES } from "../utilities/constants";
import IndvidualDashboard from "./components/IndvidualDashboard";
import MerchantsDashboard from "./components/MerchantsDashboard";

const ApplicationRoutes: FC = () => {
  const { user } = useSelector((state: StoreType) => state.auth);
  return (
    <>
      {/* {!user && user.role !== ROLES.INDIVIDUAL ? (
        <IndvidualDashboard />
      ) : (
        <MerchantsDashboard />
      )} */}
      <MerchantsDashboard />
    </>
  );
};

export default ApplicationRoutes;
