import axios from 'axios';
import { LoginType, UserRegisterType } from '../../types/form';
import { SPACE_HUB_USER } from '../../utilities/constants';
import { cacheData, deleteCachedData } from '../../utilities/storage';

const API_URL = '/api/users/';

// Register a new user
const register = async (userData: UserRegisterType) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    cacheData(SPACE_HUB_USER, response.data);
  }
  return response.data;
};

// Login a user
const login = async (userData: LoginType) => {
  const response = await axios.post(API_URL + 'login/', userData);
  if (response.data) {
    cacheData(SPACE_HUB_USER, response.data);
  }
  return response.data;
};

// Logout a user
const logout = () => {
  deleteCachedData(SPACE_HUB_USER);
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
