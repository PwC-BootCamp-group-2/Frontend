import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MakeBookingType } from '../../types/form';
import { BookingType } from '../../types/redux';
import { SPACE_HUB_USER } from '../../utilities/constants';
import { getCachedData } from '../../utilities/storage';
import bookingService from './bookingService';

// Get user from localstorage and set it to state
const user: any = getCachedData(SPACE_HUB_USER);

const initialState : BookingType = {
  bookings: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new bpooking
export const createBooking = createAsyncThunk(
  'booking/create',
  async (bookingData: MakeBookingType, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await bookingService.makeBooking(bookingData, token);
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
export const getBookings = createAsyncThunk('booking/get', async (_, thunkAPI: any) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const id = thunkAPI.getState().auth.user.data.id;
    return await bookingService.getUserBookings(id, token);
  } catch (error: any) {
    const message: string =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const authSlice = createSlice({
  name: 'auth',
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
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings.push(action.payload);
        // state.message = action.payload.message;
      })
      .addCase(createBooking.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.bookings = null;
      })
      .addCase(getBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = action.payload;
        // state.message = action.payload.message;
      })
      .addCase(getBookings.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        // state.user = null;
      })
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
