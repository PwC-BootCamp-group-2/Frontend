import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { reset, verify } from '../../../features/Auth/authSlice';
import { StoreType } from '../../../types/redux';
import { useParams } from 'react-router-dom';
import '../booking/Booking.css';
import { AppDispatch } from '../../../app/store';
import Spinner from '../../../application/components/Spinner';
import { toast } from 'react-toastify';

const Verified = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  let { token } = useParams();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!token) {
      // navigate('/');
    }
    if (isSuccess) {
      toast.success(message);
    }
    dispatch(verify(token));
    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch, token, isSuccess]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Container fluid className="p-0 booking-container">
        <div className="booking">
          <FaCheckCircle size={100} color="green" />
          <h1>Account Verified</h1>
          <p>Your account has been verified, you can now login!</p>
          <div>
            <Link to="/login" className="mybtn btn-dash">
              Proceed to Login
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Verified;
