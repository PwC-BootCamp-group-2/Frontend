import searchBg from '../../assets/img/search-bg.png';
import '../../../website/pages/search/Search.css';
import {
  Form,
  Button,
  InputGroup,
  Col,
  Container,
  Table,
  Image,
} from 'react-bootstrap';
import admin from '../../utils/images/admin.png';
import { FaSearch } from 'react-icons/fa';
import { BiSearch, BiWallet, BiPlusMedical } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';

import lekkiOffice from '../../../application/utils/images/lekki-office.png';
import viOffice from '../../../application/utils/images/vi-office.png';
import ikejaOffice from '../../../application/utils/images/ikeja-office.png';
import marylandOffice from '../../../application/utils/images/maryland-office.png';
import { BsStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../../types/redux';
import { useEffect, useState } from 'react';
import {
  getAllSpaces,
  reset,
  setLocation,
  setPrice,
  setType,
} from '../../../features/Space/spaceSlice';
import { AppDispatch } from '../../../app/store';
import { useNavigate } from 'react-router-dom';
import { getBookings } from '../../../features/Booking/bookingSlice';

const Booking = () => {
  const { bookings, isError, isLoading } = useSelector(
    (state: StoreType) => state.booking
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchData, setSearchData] = useState<any>([]);
  // Customize as appropriate.
  // Currently performs a case-insensitive match

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);
  // console.log(searchData)
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getAllSpaces());
  //   // const searchObj = { location, type, price }
  //   console.log(spaces)
  //   // findResults(spaces, searchObj)
  //   })();
  // }, [dispatch]);
  // useEffect(() => {
  //   if (isError) {
  //     // console.log(message);
  //   }
  //   dispatch(getAllSpaces());
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [ isError, dispatch]);

  // console.log("Result 3:", findResults(arr, { patientName: 'jim doe', caseNumber: 123}));
  return (
    <>
      <Container fluid className="p-0 search-container">
        <section className="w-100">
          {/* <section>
            <Col>
              <div>
                <form className="flex web-search-form">
                  <div className="box">
                    <span>City/Street</span>
                    <input
                      type="text"
                      name="location"
                      // value='location'
                      onChange={(e) => dispatch(setLocation(e.target.value))}
                      id="location"
                      className="search-input"
                      placeholder="Location"
                    />
                  </div>
                  <div className="box">
                    <span>Space Type</span>
                    <input
                      type="text"
                      name="spacetype"
                      // value='spacetype'
                      // id='spacetype'
                      onChange={(e) => dispatch(setType(e.target.value))}
                      className="search-input"
                      placeholder="Space Type"
                    />
                  </div>
                  <div className="box">
                    <span>Price Range</span>
                    <input
                      type="text"
                      name="price"
                      onChange={(e) => dispatch(setPrice(e.target.value))}
                      // value='price'
                      // id='price'
                      className="search-input"
                      placeholder="Price Range"
                    />
                  </div>
                  <div className="box">
                    <button className="btn btn-lg btn-block">Search</button>
                  </div>
                  <button className="btn btn-success">
                    <FaSearch />
                  </button>
                </form>
              </div>
            </Col>
          </section> */}

          <section>
            <div className="search-heading">
              <h2>Search Results</h2>
            </div>
            <div>
              <section>
                <Col>
                  {/* <h5>Available Office Bookings</h5> */}
                  <section className="d-flex available-spaces">
                    {bookings.map((data: any, index: number) => {
                      return (
                        <Col
                          key={index}
                          // onClick={() => navigate(`/product/${data.id}`)}
                        >
                          <div>
                            <Image src={lekkiOffice} className="card-image" />
                          </div>
                          <div className="card-content-container">
                            <h4 className="size">
                              <b>{data ? data.name : 'Space Hub'}</b>
                            </h4>
                            <div>
                              <BsStarFill
                                size={15}
                                color="#FFCD83"
                                className="spacing"
                              />
                              <BsStarFill
                                size={15}
                                color="#FFCD83"
                                className="spacing"
                              />
                              <BsStarFill
                                size={15}
                                color="#FFCD83"
                                className="spacing"
                              />
                              <BsStarFill
                                size={15}
                                color="#FFCD83"
                                className="spacing"
                              />
                              <span className="price-size">(4.0)</span>
                            </div>
                            <div>
                              <span className="price-size">Status</span>
                              <p className="price-size">
                                {data ? data.status : 'Booked'}
                              </p>
                            </div>
                            <div>
                              <span className="price-size">Start from</span>
                              <p className="price-size">
                                {data ? data.amount : '1000'}
                              </p>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </section>
                </Col>
              </section>
            </div>
          </section>
          {/* <Col xs={6}>
            <Image src={searchBg} className="search-bg" />
          </Col>
          <Col xs={6} className="search-section">
            <div>
              <div>
                <span className="search-title">Type</span>
                <div className="search-type-container gap-2">
                  <span className="search-type">Dedicated Desk</span>
                  <span className="search-type">Large Desk</span>
                </div>
                <div>
                  <span className="search-title">Select a location</span>
                  <div className="select-location">
                    <Form.Select aria-label="Default select example">
                      <option>Select a Location</option>
                      <option value="1">11, aAdeboye SowandemOkota </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div className="gap-2 search-type-container">
                    <span className="search-title">Facilities</span>
                    <div className="mt-2">
                      <span className="search-facilities">Wifi</span>
                      <span className="search-facilities">Gym</span>
                      <span className="search-facilities">Swimming Pool</span>
                      <span className="search-facilities">Parking Lot</span>
                    </div>
                  </div>
                  <div>
                    <button className="search-button" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col> */}
        </section>
      </Container>
    </>
  );
};

export default Booking;
