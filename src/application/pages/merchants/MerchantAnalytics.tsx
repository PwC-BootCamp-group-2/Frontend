import React, { useState } from "react";
import styles from "../../utils/css/merchants/MerchantAnalytics.module.css";
import analytics from "../../utils/images/recent-activities.png";
import { RiFundsFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import WithdrawModal from "../../components/merchants/withdrawModal/WithdrawModal";
import FundModal from "../../components/merchants/fundModal/FundModal";

const MerchantAnalytics = () => {
  const [showModal, setShowModal] = useState(false);
  const [fundModal, setFundModal] = useState(false);

  return (
    <div className={styles.Container}>
      {/* for Withdrawal */}
      {showModal && <WithdrawModal sState={setShowModal} />}
      {fundModal && <FundModal sState={setFundModal} />}

      {/* Component Header */}
      <div className={styles.Container_Header}>
        <h3>Wallet</h3>
      </div>
      {/* Component Body */}
      <div className={styles.Container_Body}>
        {/* Component Wallet */}
        <div className={styles.Container_Body_Card}>
          <div className={styles.Container_Body_Card_Details}>
            <h5>Available Balance</h5>
            <p>NGN 0.00</p>
          </div>
          <div className={styles.Container_Body_Card_Details}>
            <h5>Pending Balance</h5>
            <p>NGN 21,000.00</p>
          </div>
          <div className={styles.Container_Body_Card_Actions}>
            <button onClick={() => setFundModal(true)}>
              <RiFundsFill size={45} />
              <span>Fund</span>
            </button>
            <button onClick={() => setShowModal(true)}>
              <GiReceiveMoney size={45} />
              <span>Withdraw</span>
            </button>
          </div>
        </div>
        {/* Component Wallet Chart */}
        <div className={styles.Container_Body_Chart}>
          <img src={analytics} alt="chartjs" />
        </div>

        {/* Component Transaction History */}
        <div className={styles.Container_Body_transactions}>
          <h5>Transaction History</h5>
          <table>
            <thead></thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MerchantAnalytics;
