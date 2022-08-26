import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import bookingReducer from '../features/Booking/bookingSlice';
import spaceReducer from '../features/Space/spaceSlice';
import walletReducer from '../features/Wallet/walletSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    space: spaceReducer,
    booking: bookingReducer,
    wallet: walletReducer,

  },
});

export type AppDispatch = typeof store.dispatch