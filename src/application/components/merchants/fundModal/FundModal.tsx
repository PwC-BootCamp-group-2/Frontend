import React, { FC, useState } from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import styles from "./fModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../app/store";
type ModalType = {
  sState: any;
};
const FundModal: FC<ModalType> = ({ sState }) => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const config: any = {
    reference: new Date().getTime().toString(),
    email: "faniogor@gmail.com",
    amount: parseInt(amount) * 100,
    publicKey: "pk_test_56c49c3791cd84a7f3e8f6f60b8ccc9ecd936e3f",
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment: any = usePaystackPayment(config);
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (parseInt(amount) >= 1000) {
              initializePayment(onSuccess, onClose);
            }
          }}
        >
          Continue
        </button>
      </div>
    );
  };

  return (
    <div
      className={styles.Wrapper}
      onClick={(e: any) => {
        console.log(e?.target.className);
        e.target.className === "fModal_Wrapper__mAWz7" && sState(false);
      }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Fund Account</h3>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Amount NGN:
          </span>
          <input
            type="text"
            className="form-control"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="1000"
            aria-label="accountno"
            aria-describedby="basic-addon1"
          />
        </div>
        <PaystackHookExample />
      </form>
    </div>
  );
};

export default FundModal;
