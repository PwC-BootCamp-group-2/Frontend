import axios from 'axios';
import { LoginType, UserRegisterType } from '../../types/form';
import { SPACE_HUB_USER } from '../../utilities/constants';
import { cacheData, deleteCachedData } from '../../utilities/storage';

const API_URL_LOGIN = 'https://localhost:7229/Auth/login';
const API_URL_REGISTER = 'https://localhost:7229/Auth/register';
const API_URL_VERIFY = 'https://localhost:7229/Auth/verify';


// Register a new user
const register = async (userData: UserRegisterType) => {
  const response = await axios.post(API_URL_REGISTER, userData);
  if (response.data) {
    cacheData(SPACE_HUB_USER, response.data);
  }
  return response.data;
};

// Login a user
const login = async (userData: LoginType) => {
  const response = await axios.post(API_URL_LOGIN, userData);
  if (response.data) {
    cacheData(SPACE_HUB_USER, response.data);
  }
  return response.data;
};

//Verify User 
const verify = async (token: any) => {
  const response = await axios.post(API_URL_VERIFY + "?token=" + token);
  // if (response.data) {
    
  // }
  return response.data;
};

// Logout a user
const logout = () => {
  deleteCachedData(SPACE_HUB_USER);
};

const authService = {
  register,
  login,
  verify,
  logout,
};

export default authService;
