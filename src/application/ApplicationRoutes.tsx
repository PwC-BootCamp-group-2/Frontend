import { FC } from 'react';
import { useSelector } from 'react-redux';

import { StoreType } from '../types/redux';
import { ROLES } from '../utilities/constants';
import IndvidualDashboard from './components/IndvidualDashboard';
import MerchantsDashboard from './components/MerchantsDashboard';

const ApplicationRoutes: FC = () => {
  const { user } = useSelector((state: StoreType) => state.auth);
  return (
    <>
      {user && user.data.role === ROLES.INDIVIDUAL ? (
        <IndvidualDashboard />
      ) : (
        <MerchantsDashboard />
      )}
    </>
  );
};

export default ApplicationRoutes;
