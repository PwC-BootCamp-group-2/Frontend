import React, { FC, useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import styles from "./fModal.module.css";

type ModalType = {
  sState: any;
};
const FundModal: FC<ModalType> = ({ sState }) => {
  const [amount, setAmount] = useState("");

  const config = {
    reference: new Date().getTime().toString() + "SK",
    email: "faniogor@gmail.com",
    amount: parseInt(amount) * 100,
    publicKey: "pk_test_456c29a0ac507bc9772fad85305795def3efb6f8",
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
