import { Container, Col, Button, Image, Badge, Modal } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { DatePicker } from 'antd';
import './Product.css';
import singleProduct from '../../assets/img/single-product.png';
import smallSingleproduct from '../../assets/img/small-single-product.png';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from '../../../app/store';
// import Spinner from '../../../application/components/Spinner';
import { getSingleSpace } from '../../../features/Space/spaceSlice';
import { StoreType } from '../../../types/redux';
// import Spinner from '../../components/Spinner';
import { toast } from 'react-toastify';
import { MakeBookingType } from '../../../types/form';
import { createBooking, reset } from '../../../features/Booking/bookingSlice';
import Spinner from '../../components/Spinner';

const { RangePicker } = DatePicker;

function range(start: any, end: any) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  // console.log(result);
  return result;
}

function disabledDate(current: any) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => [1, 4],
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

// import ProductDetails from "../../components/productDetails/ProductDetails";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: StoreType) => state.auth);
  const { space, isLoading, isError, message } = useSelector(
    (state: StoreType) => state.space
  );
  const bookingState = useSelector(
    (state: StoreType) => state.booking
  );
  const { id } = useParams();
  const [noR, setNor] = useState(0);
  const [date, setDate] = useState();
  const onChange = (range: any) => {
  const valueOfInput1 = range[0].format();
  const valueOfInput2 = range[1].format();
  setDate(valueOfInput2);
  }

  const setNumber = (e: any) => {
    setNor(e.target.value)
  }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user || !space) {
      navigate('/login');
    }
    dispatch(getSingleSpace(id));
    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch, id]);
  // useEffect(() => {
  //   if (bookingState.isError) {
  //     toast.error("You do not have sufficient balance Kindly fund your wallet")
  //   }
  //   if (bookingState.isSuccess) {
  //     console.log("hi")
  //     navigate("/bookingsuccessful")
  //   }
  // },[bookingState.isError, bookingState.isSuccess, navigate])
  if (isLoading) {
    return <Spinner />;
  }
  const makeBooking = (e: any) => {
    if (!user) {
      toast.error('Kindly login/register to make a booking!');
      setTimeout(() => {
        navigate('/login');
      }, 5000);
      return;
    } else {
      const data: MakeBookingType = {
        spaceId: space.id,
        userId: user.data.id,
        merchantId: space.merchantId,
        resourceId: space.merchantId,
        noR,
        bookedDates: [{date: date}],
        amount: space.price,
        status: 'booked',
        createdAt: new Date(),
        updatedAt: new Date(),
        Used: false,
        spaceName: space.name,
      };
      dispatch(createBooking(data));
      dispatch(reset());
      if (bookingState.isSuccess) {
        navigate("/bookingsuccessful")
      }
      if (bookingState.isError) {
        toast.error("You Do not have sufficient fund kindly fund your wallet")
      }

    }
  };

  
  return (
    <>
      <Container fluid>
        <section className="product-container">
          <Col xs={7} className="product-image">
            <Image src={singleProduct} width="100%" height="100%"></Image>
          </Col>
          <Col xs={5}>
            <Image src={smallSingleproduct} width="100%"></Image>
            <div className="product-details">
              {/* <ProductDetails
                spaceType="Bella Bellagio Hotel & Casino"
                location="Las vegas, United Status"
              /> */}
              <h4>{space && space.name}</h4>
              <span className="product-location">
                {space && space.location}
              </span>
              <br/>
              <b>
                Capacity : {space && space.capacity}
              </b>
              <div>
                <BsStarFill size={20} color=" #FFC329" />
                <BsStarFill size={20} color=" #FFC329" />
                <BsStarFill size={20} color=" #FFC329" />
                <BsStarFill size={20} color=" #FFC329" />
              </div>
              <span className="review-text">4.8 Stars (12.5k Reviews)</span>
              <div className="divider"> </div>
              <div className="product-description">
                <h4>About</h4>
                <span>
                  {space.description
                    ? space.description
                    : 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus mus, leo taciti vel convallis fermentum tempor congue. Necturpis pellentesque lectus iaculis curae arcu nam, tacitilibero.'}
                </span>
              </div>
              <div className="mt-3">
                <h4>Facilities</h4>
                <div className="assets-container">
                  <div className="assets">Wifi</div>
                  <div className="assets">Printer</div>
                  <div className="assets">Gym</div>
                  <div className="assets">Parking Lot</div>
                </div>
                <div >
                  <label>
                    Input number of Resources:
                    <input
                      style={{ marginLeft: '10px' }}
                      className="range-picker"
                      type="number"
                      onChange={setNumber}
                    />
                  </label>
                </div>
                <br />
                <div>
                  <p>Select a date:</p>
                  <RangePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime
                    className="range-picker"
                    format="DD/MM/YYYY HH:mm"
                    onChange={onChange}
                  />
                </div>

                <div className="product-button-container">
                  <button type="submit" className="product-button" onClick={makeBooking}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Product;
