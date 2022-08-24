import React, { FC, useEffect, useState } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import axios from "axios";
import styles from "./wModal.module.css";

type ModalType = {
  sState: any;
};
const WithdrawModal: FC<ModalType> = ({ sState }) => {
  const initialstate = {
    accno: "",
    code: "",
    name: "",
    amount: "",
    canWithdraw: false,
  };
  //Form inputvalues
  const [bankDetails, SetBankDetails] = useState({ ...initialstate });
  //All Banks in Nigeria
  const [banks, setBanks] = useState([]);

  //My Bank interface
  interface bankInterFace {
    active: Boolean;
    code: string;
    country: String;
    createdAt: String;
    currency: String;
    gateway: String;
    id: Number;
    is_deleted: Boolean;
    longcode: String;
    name: String;
    pay_with_bank: Boolean;
    slug: String;
    type: String;
    updatedAt: String;
  }

  //Getting my Bank List from the API
  useEffect(() => {
    const getBanks = async () => {
      //remember to use redux for this
      try {
        const response = await axios.get(
          "https://api.paystack.co/bank?currency=NGN",
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PSK}`,
            },
          }
        );
        setBanks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBanks();
  }, []);

  //Handle Changes in my form
  const handleChanges = (e: any) => {
    const { name, value } = e.target;
    SetBankDetails({ ...bankDetails, [name]: value });
  };

  //Handling Our forms for errors
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const getBankDetails = async () => {
      //remember to use redux for this
      try {
        const response = await axios.get(
          `https://api.paystack.co/bank/resolve?account_number=${bankDetails.accno}&bank_code=${bankDetails.code}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PSK}`,
            },
          }
        );
        SetBankDetails({
          ...bankDetails,
          name: response.data.data.account_name,
          canWithdraw: true,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getBankDetails();
  };

  //Handling our withdrawing method
  const handleWithdraw = () => {
    const MakeWithdrawal = async (res: any) => {
      const params = JSON.stringify({
        source: "balance",
        amount: "1500000",
        recipient: res?.data.recipient_code,
        reason: "Withdrawing from SpaceHub",
      });
      try {
        const response = await axios.post(
          `https://api.paystack.co/transfer`,
          params,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PSK}`,
              "Content-Type": "application/json",
            },
          }
        );
        // call the backend site --here
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getRecipient = async () => {
      //remember to use redux for this
      const params = JSON.stringify({
        type: "nuban",
        name: bankDetails.name,
        account_number: bankDetails.accno,
        bank_code: bankDetails.code,
        currency: "NGN",
      });
      try {
        const response = await axios.post(
          `https://api.paystack.co/transferrecipient`,
          params,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PSK}`,
              "Content-Type": "application/json",
            },
          }
        );
        MakeWithdrawal(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipient();
  };

  return (
    <div
      className={styles.Wrapper}
      onClick={(e: any) => {
        console.log(e?.target.className);
        e.target.className === "wModal_Wrapper__Kd1H5" && sState(false);
      }}
    >
      <form onSubmit={handleSubmit}>
        <h3>Account Details</h3>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Amount NGN:
          </span>
          <input
            type="text"
            className="form-control"
            name="amount"
            value={bankDetails.amount}
            onChange={handleChanges}
            placeholder="1000"
            aria-label="accountno"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Account No:
          </span>
          <input
            type="text"
            className="form-control"
            name="accno"
            value={bankDetails.accno}
            onChange={handleChanges}
            placeholder="0123456789"
            aria-label="accountno"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Bank:
          </span>
          <select
            className="form-control"
            name="code"
            value={bankDetails.code}
            onChange={handleChanges}
            aria-label="accountno"
            aria-describedby="basic-addon1"
          >
            {banks?.map((bank: bankInterFace) => (
              <option value={bank.code}>{bank.name}</option>
            ))}
          </select>
        </div>
        <p className="alert alert-success">{bankDetails?.name}</p>
        {!bankDetails.canWithdraw ? (
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        ) : (
          <button onClick={handleWithdraw} className="btn btn-success">
            <GiReceiveMoney /> Withdraw
          </button>
        )}
      </form>
    </div>
  );
};

export default WithdrawModal;
