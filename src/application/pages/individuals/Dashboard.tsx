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
import { FaRegBell, FaRegUser } from 'react-icons/fa';
import { BiSearch, BiWallet, BiPlusMedical } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';
import '../../utils/css/individuals/Dashboard.css';
import lekkiOffice from '../../utils/images/lekki-office.png';
import viOffice from '../../utils/images/vi-office.png';
import ikejaOffice from '../../utils/images/ikeja-office.png';
import marylandOffice from '../../utils/images/maryland-office.png';
import firstUser from '../../utils/images/first-user.png';
import secondUser from '../../utils/images/second-user.png';
import thirdUser from '../../utils/images/third-user.png';

import { BsStarFill } from 'react-icons/bs';
import { GiTakeMyMoney } from 'react-icons/gi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../../app/store';
import { reset } from '../../../features/Auth/authSlice';
import { StoreType } from '../../../types/redux';
import Spinner from '../../components/Spinner';
import { getAllSpaces } from '../../../features/Space/spaceSlice';
import { getBookings } from '../../../features/Booking/bookingSlice';
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: StoreType) => state.auth);
  const { spaces, isLoading, isError, message } = useSelector(
    (state: StoreType) => state.space
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }
    dispatch(getAllSpaces());
    // console.log(spaces);
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  const { bookings } = useSelector((state: StoreType) => state.booking);
  // Customize as appropriate.
  // Currently performs a case-insensitive match

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);
  if (isLoading) {
    return <Spinner />;
  }
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }
  //   if (!user) {
  //     // navigate('/login');
  //   }
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate, isError, message, dispatch]);
  return (
    <>
      <Container fluid>
        <section className="header-section">
          <div>
            <h3>
              <b>Dashboard</b>
            </h3>
          </div>
          <div className="dashboard-search-container">
            <Form className="d-flex search-form">
              <InputGroup>
                <InputGroup.Text>
                  <BiSearch size={20} />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </InputGroup>
            </Form>
            <FaRegBell size={32} />
          </div>
          <div className="wallet-container d-flex align-items-center gap-2">
            <BiWallet size={25} />
            <div className="">
              <p className="m-0 wallet-balance">NGN 1,500</p>
              <h6 className="m-0 wallet-balance">Wallet</h6>
            </div>
            <BiPlusMedical size={25} />
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaRegBell size={32} />
            <span>
              <b>
                Welcome <br /> {user && user.data.fullName}
              </b>
            </span>
            <div className="mx-2">
              <Image src={admin} />
            </div>
          </div>
          {/* <div className="user-profile">
          <FaRegUser size={32} color="white" />
        </div> */}
        </section>
        <section>
          <section>
            <Col>
              {/* <h5>Available Office Bookings</h5> */}
              <section className="d-flex dashboard-available-spaces">
                {spaces.length !== 0 &&
                  spaces.map((item: any, index: number) => {
                    return (
                      <Col
                        key={index}
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        <div>
                          <Image src={lekkiOffice} />
                        </div>
                        <div className="card-content-container">
                          <h4 className="size">
                            <b>{item.name}</b>
                          </h4>
                          <span>{item.location}</span>
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
                            {/* <span className="price-size">Start from</span> */}
                            <p className="price-size">₦ {item.price}</p>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </section>
            </Col>
          </section>
          <section className="d-flex  dashboard-recent-bookings-container">
            <Col xs={8} className="dashboard-recent-bookings">
              <Col className="table-container">
                <Col className="d-flex justify-content-between">
                  <h4>Recent Bookings</h4>
                  {/* <div>
                    <FiFilter size={30} />
                    <span className="size">
                      <b>Sort By</b>
                    </span>
                  </div> */}
                </Col>
                <Col>
                  <Table borderless hover className="text-center">
                    <thead className="text-blue">
                      <tr>
                        <th>Order</th>
                        <th>Office Name</th>
                        <th>Date Created</th>
                        <th>Amount Paid</th>
                        <th>No of Resources</th>
                        <th>Order Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((data: any, index: number) => {
                        return (
                          <tr>
                            <td>{index}</td>
                            <td>{data.spaceName}</td>
                            <td>{new Date(data.createdAt).toLocaleDateString()}</td>
                            <td>{data.amount}</td>
                            <td>{data.noR}</td>
                            <td style={{ color: 'orange' }}>{data.status}</td>
                          </tr>
                        );
                      })}

                      {/* <tr>
                        <td>2</td>
                        <td>Ikoyi Office</td>
                        <td>15-12-2022</td>
                        <td>#100,000</td>
                        <td>50</td>
                        <td style={{ color: 'green' }}>Completed</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>VI Office</td>
                        <td>1-10-2022</td>
                        <td>#80,000</td>
                        <td>10</td>
                        <td style={{ color: 'red' }}>Cancel</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </Col>
              </Col>
            </Col>

            <Col xs={4} className="dashboard-recent-reviews">
              <Col>
                <div className="mx-3">
                  <h5 className="dashboard-review-title">
                    <b>Recent Reviews</b>
                  </h5>
                </div>
                <Col className="dashboard-reviews-container">
                  <div>
                    <Image src={firstUser} />
                  </div>
                  <div className="dashboard-reviews">
                    <h6 className="dashboard-review-title">
                      <b>Sarah Richard</b>
                    </h6>
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
                      <BsStarFill
                        size={15}
                        color="#FFCD83"
                        className="spacing"
                      />
                      <span className="dashboard-review-content">(5.0)</span>
                    </div>
                    <p className="dashboard-review-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit amet consequat lectus leo vel.
                    </p>
                  </div>
                </Col>
                <Col className="dashboard-reviews-container">
                  <div>
                    <Image src={secondUser} />
                  </div>
                  <div className="dashboard-reviews">
                    <h6 className="dashboard-review-title m-0">
                      <b>Ayoola Anibaba</b>
                    </h6>
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
                      <BsStarFill
                        size={15}
                        color="#FFCD83"
                        className="spacing"
                      />
                      <span className="dashboard-review-content">(5.0)</span>
                    </div>
                    <p className="dashboard-review-content m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit amet consequat lectus leo vel.
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
          </section>
        </section>
      </Container>

      {/* <section className="d-flex dashboard-content">
        <Col xs={8}>
          <Col className="d-flex">
            <section>
              <Col>
                <div>
                  <Image src={lekkiOffice} />
                </div>
                <div className="card-content-container">
                  <h4 className="size">
                    <b>Lekki Office</b>
                  </h4>
                  <div>
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <span className="price-size">(4.0)</span>
                  </div>
                  <div>
                    <span className="price-size">Start from</span>
                    <p className="price-size">#50,000</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <Image src={lekkiOffice} />
                </div>
                <div className="card-content-container">
                  <h4 className="size">
                    <b>Lekki Office</b>
                  </h4>
                  <div>
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <span className="price-size">(4.0)</span>
                  </div>
                  <div>
                    <span className="price-size">Start from</span>
                    <p className="price-size">#50,000</p>
                  </div>
                </div>
              </Col>

              <Col>
                <div>
                  <Image src={lekkiOffice} />
                </div>
                <div className="card-content-container">
                  <h4 className="size">
                    <b>Lekki Office</b>
                  </h4>
                  <div>
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <BsStarFill size={15} color="#FFCD83" className="spacing" />
                    <span className="price-size">(4.0)</span>
                  </div>
                  <div>
                    <span className="price-size">Start from</span>
                    <p className="price-size">#50,000</p>
                  </div>
                </div>
              </Col>
            </section>
          </Col>
          <Col className="table-container">
            <Col className="d-flex justify-content-between">
              <h4>Recent Bookings</h4>
              <div>
                <FiFilter size={30} />
                <span className="size">
                  <b>Sort By</b>
                </span>
              </div>
            </Col>
            <Col>
              <Table borderless hover className="text-center">
                <thead className="text-blue">
                  <tr>
                    <th>Order</th>
                    <th>Office Type</th>
                    <th>Date Created</th>
                    <th>Amount Paid</th>
                    <th>No of Resources</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lekki Office</td>
                    <td>12-12-2022</td>
                    <td>#50,000</td>
                    <td>50</td>
                    <td style={{ color: "orange" }}>In Review</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ikeja Conference Room</td>
                    <td>15-12-2022</td>
                    <td>#100,000</td>
                    <td>50</td>
                    <td style={{ color: "green" }}>Completed</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>VI Office</td>
                    <td>1-10-2022</td>
                    <td>#80,000</td>
                    <td>10</td>
                    <td style={{ color: "red" }}>Cancel</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Maryland Office</td>
                    <td>21-05-2022</td>
                    <td>#120,000</td>
                    <td>5</td>
                    <td style={{ color: "orange" }}>In Review</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Col>
        </Col>
        <Col xs={4} className="mx-2">
          <Col>
            <div className="mx-3">
              <h5>
                <b>Recent Reviews</b>
              </h5>
            </div>
            <Col className="reviews-container">
              <div>
                <Image src={firstUser} />
              </div>
              <div className="reviews">
                <h6>
                  <b>Sarah Richard</b>
                </h6>
                <div>
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <span className="price-size">(5.0)</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  amet consequat lectus leo vel.
                </p>
              </div>
            </Col>
            <Col className="reviews-container">
              <div>
                <Image src={secondUser} />
              </div>
              <div className="reviews">
                <h6>
                  <b>Ayoola Anibaba</b>
                </h6>
                <div>
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <span className="price-size">(5.0)</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  amet consequat lectus leo vel.
                </p>
              </div>
            </Col>
            <Col className="reviews-container">
              <div>
                <Image src={thirdUser} />
              </div>
              <div className="reviews">
                <h6>
                  <b>Christiana Yang</b>
                </h6>
                <div>
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <BsStarFill size={15} color="#FFCD83" className="spacing" />
                  <span className="price-size">(5.0)</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  amet consequat lectus leo vel.
                </p>
              </div>
            </Col>
          </Col>
        </Col>
      </section> */}
    </>
  );
};

export default Dashboard;
