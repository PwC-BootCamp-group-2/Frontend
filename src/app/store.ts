import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import bookingReducer from '../features/Booking/bookingSlice';
import spaceReducer from '../features/Space/spaceSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    space: spaceReducer,
    booking: bookingReducer,
  },
});

export type AppDispatch = typeof store.dispatch