import { FC } from "react";
import IndvidualDashboard from "./components/IndvidualDashboard";
import MerchantsDashboard from "./components/MerchantsDashboard";

const ApplicationRoutes: FC = () => {
  return <>{true ? <IndvidualDashboard /> : <MerchantsDashboard />}</>;
};

export default ApplicationRoutes;
