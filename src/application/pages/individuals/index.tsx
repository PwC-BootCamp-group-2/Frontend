import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../app/store";
import { reset } from "../../../features/Auth/authSlice";
import { StoreType } from "../../../types/redux";
import MerchantSidebar from "../../components/merchants/MerchantSidebar";
import style from "../merchants/Merchant.module.css";

function Index(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  return (
    <div className={style.Wrapper}>
      <MerchantSidebar />
      <div className={style.Wrapper_Maincontent}>
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
