import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WalletType } from '../../types/redux';
import walletService from './walletService';

// Get user from localstorage and set it to state

const initialState : WalletType = {
  wallet: [],
  transactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new bpooking
export const fundWallet = createAsyncThunk(
  'wallet/fund',
  async (reference: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const id = thunkAPI.getState().auth.user.data.id;

      return await walletService.fundWallet(reference, id, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const withdrawFunds = createAsyncThunk(
  'wallet/withdraw',
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const id = thunkAPI.getState().auth.user.data.id;

      return await walletService.withdrawFunds(id, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user bookings
export const getWallet = createAsyncThunk('wallet/get', async (_, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const id = thunkAPI.getState().auth.user.data.id;
    return await walletService.getWallet(id, token);
  } catch (error: any) {
    const message: string =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getTransactions = createAsyncThunk('wallet/getTransactions', async (_, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const id = thunkAPI.getState().auth.user.data.id;
    return await walletService.getTransactions(id, token);
  } catch (error: any) {
    const message: string =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const walletSlice: any = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(withdrawFunds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(withdrawFunds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.bookings.push(action.payload.data);
        // state.message = action.payload.message;
      })
      .addCase(withdrawFunds.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
        // state.bookings = null;
      })
      .addCase(fundWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fundWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wallet = action.payload.data;
        // state.message = action.payload.message;
      })
      .addCase(fundWallet.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
        // state.user = null;
      })
      .addCase(getWallet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wallet = action.payload.data;
        // state.message = action.payload.message;
      })
      .addCase(getWallet.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
        // state.user = null;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.wallet = action.payload.data;
        // state.message = action.payload.message;
      })
      .addCase(getTransactions.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
        // state.user = null;
      })
  },
});

export const { reset } = walletSlice.actions;

export default walletSlice.reducer;
