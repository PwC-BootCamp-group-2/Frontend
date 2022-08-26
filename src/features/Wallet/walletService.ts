import axios from 'axios';

const API_URL_GET_WALLET = 'https://localhost:7229/api/Wallets/GetWallet/';

const API_URL_FUND_WALLET = 'https://localhost:7229/api/Wallets/FundWallet/';

const API_URL_WITHDRAW = 'https://localhost:7229/api/Wallets/WithdrawFunds/';

const API_URL_GET_TRANSACTIONS = 'https://localhost:7229/api/Wallets/GetTransactions/';

// Create new Booking
const fundWallet = async (reference: any, id: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // for the body we need to send the text as I have done below
  const response = await axios.patch(
    API_URL_FUND_WALLET + id + '/' + reference,
    config
  );
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

const withdrawFunds = async (id: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // for the body we need to send the text as I have done below
  const response = await axios.patch(API_URL_WITHDRAW + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

// Get user Bookings
const getWallet = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_GET_WALLET + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response;
};

const getTransactions = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_GET_TRANSACTIONS + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response;
};
const walletService = {
  withdrawFunds,
  fundWallet,
  getWallet,
  getTransactions,
};

export default walletService;
