import React from 'react';
import { Outlet } from 'react-router-dom';
import MerchantSidebar from '../../components/merchants/MerchantSidebar';
import style from "./Merchant.module.css";

function Index(): JSX.Element {
  return (
    <div className={style.Wrapper}>
        <MerchantSidebar/>
        <div className={style.Wrapper_Maincontent}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Index;