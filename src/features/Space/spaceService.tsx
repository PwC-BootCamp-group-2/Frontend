import axios from 'axios';
import { CreateSpaceType } from '../../types/form';

const API_URL_SPACE = 'https://localhost:7229/api/Spaces/';
const API_URL_GET_MERCHANT_SPACES = 'https://localhost:7229/api/Spaces/User';

// Create new Space
const createSpace = async (spaceData: CreateSpaceType, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // for the body we need to send the text as I have done below
  const response = await axios.post(API_URL_SPACE, spaceData, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

// Get All Spaces
const getAllSpaces = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_SPACE, config);
  // console.log(response);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response;
};

// Get Single Space
const getSingleSpace = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_SPACE + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response;
};

// Get Merchant Spaces
const getMerchantSpaces = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_GET_MERCHANT_SPACES + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

// Update Merchant Space
const updateMerchantSpace = async (
  spaceData: CreateSpaceType,
  id: string,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL_SPACE + id, spaceData, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

// Delete Merchant Space
const deleteMerchantSpace = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL_SPACE + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

const bookingService = {
  createSpace,
  getAllSpaces,
  getSingleSpace,
  getMerchantSpaces,
  updateMerchantSpace,
  deleteMerchantSpace,
};

export default bookingService;
