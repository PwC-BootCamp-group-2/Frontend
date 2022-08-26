import axios from 'axios';
import { MakeBookingType } from '../../types/form';

const API_URL_MAKE_BOOKING = "https://localhost:7229/api/Bookings/MakeBooking";
const API_URL_GET_USER_BOOKINGS = "https://localhost:7229/api/Bookings/GetUserBookings/";

// Create new Booking
const makeBooking = async (bookingData: MakeBookingType, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // for the body we need to send the text as I have done below
  const response = await axios.post(API_URL_MAKE_BOOKING, bookingData, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response.data;
};

// Get user Bookings
const getUserBookings = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL_GET_USER_BOOKINGS + id, config);
  // Change this is to response.data, to collect the array of objects being sent from the backend
  return response;
};


const bookingService = {
  makeBooking,
  getUserBookings,
}

export default bookingService;