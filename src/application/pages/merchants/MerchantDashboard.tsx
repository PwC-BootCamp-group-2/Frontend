import "../../utils/css/merchants/MerchantDashboard.css";
import {
  // Form,
  // Button,
  // InputGroup,
  Container,
  Col,
  // Card,
  Table,
  // Dropdown,
  // DropdownButton,
  Image,
  Row,
} from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import {
  BsArrowUpSquare,
  BsArrowDownSquare,
  BsDashSquare,
  BsArrowRight,
  BsCheck2,
  BsThreeDotsVertical,
  BsX,
  // BsStarFill,
} from "react-icons/bs";
import admin from "../../utils/images/admin.png";
import analytics from "../../utils/images/recent-activities.png";
import { useEffect, useState } from "react";
import WithdrawModal from "../../components/merchants/withdrawModal/WithdrawModal";
import { reset } from "../../../features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { StoreType } from "../../../types/redux";
import { useNavigate } from "react-router-dom";
// import firstUser from "../../utils/images/first-user.png";
// import secondUser from "../../utils/images/second-user.png";
// import thirdUser from "../../utils/images/third-user.png";

const MerchantDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  const [showModal, setShowModal] = useState(false);

  const handleWmodal = () => {
    setShowModal(true);
  }
  return (
    <>
      <Container className="main">
        <section className="header-section">
          <div>
            <h3>
              <b>Dashboard</b>
            </h3>
          </div>
          <div className="search-container d-flex justify-content-end">
            {/* <Form className="d-flex search-form">
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
            </Form> */}
            <div className="wallet-container d-flex align-items-center gap-2">
              <BiWallet size={25} />
              <div className="wallet-container-balance">
                <p className="m-0">NGN 1,500</p>
                <h6 className="m-0">
                  Wallet
                </h6>
                
              </div>
              <GiTakeMyMoney onClick={handleWmodal} size={25}/>
            </div>
            
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaRegBell size={32} />
            <span>
              <b>Welcome <br/> Rachel Maduka! (Admin)</b>
            </span>
            <div className="mx-2">
              <Image src={admin} />
            </div>
          </div>
        </section>
        <section>
          <section className="d-flex mt-5 align-items-center">
          
            <Col className="w-75">
              <WithdrawModal/>
              <Image src={analytics} />
            </Col>
            <Col className="w-25 all-transactions">
              <div className="d-flex justify-content-between">
                <span>All transactions</span>
                {/* <div>
                  <DropdownButton
                    id="dropdown-basic-button"
                    variant="outline-secondary"
                    title="This Month"
                    size="sm"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </div> */}
              </div>
              <div>
                <div className="d-flex   justify-content-around  total-income">
                  <BsArrowUpSquare size={25} color="#00A870" />
                  <div>
                    <span>Total Income</span>
                    <h3>
                      <b>$12,650.00</b>
                    </h3>
                  </div>
                </div>
                <div className="d-flex   justify-content-around  total-income">
                  <BsArrowDownSquare size={25} color="#FF7426" />
                  <div>
                    <span>Total Withdrawal</span>
                    <h3>
                      <b>$6,250.00</b>
                    </h3>
                  </div>
                </div>
                <div className="d-flex   justify-content-around  total-income">
                  <BsDashSquare size={25} color="#2874CE" />
                  <div>
                    <span>Total Balance</span>
                    <h3>
                      <b>$6,310.00</b>
                    </h3>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </Col>
          </section>
          <section className="w-100 d-flex mt-5 align-items-center">
            <Row className="merchant-table-container w-100">
              <Col className="d-flex justify-content-between">
                <h4>
                  <b>Latest Bookings</b>
                </h4>
                <div>
                  <span className="size">
                    <b>View All</b>
                  </span>
                  <BsArrowRight size={20} color="#07163E" className="mx-2" />
                </div>
              </Col>
              <Row>
                <Table borderless hover>
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
                      <td className="d-flex align-items-center">
                        <Image src={admin} />
                        <span className="mx-4">Kiwumi</span>
                      </td>
                      <td>Jan 15, 2021 at 5:37 PM </td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="booking-status">
                            <BsCheck2 size={25} />
                            <BsX size={25} />
                          </div>
                        </div>
                      </td>
                      <td className="amount-text">
                        <span style={{ color: "red" }}>- 1700.00 USD</span>
                        <BsThreeDotsVertical
                          size={25}
                          color="#7F8492"
                          className="mx-3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center">
                        <Image src={admin} />
                        <span className="mx-4">Catherine</span>
                      </td>
                      <td>Jan 15, 2021 at 5:37 PM</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="booking-status">
                            <BsCheck2 size={25} />
                            <BsX size={25} />
                          </div>
                        </div>
                      </td>
                      <td className="amount-text">
                        <span style={{ color: "red" }}>- 2,000.00 USD</span>
                        <BsThreeDotsVertical
                          size={25}
                          color="#7F8492"
                          className="mx-3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center">
                        <Image src={admin} />
                        <span className="mx-4">Favour</span>
                      </td>
                      <td>Jan 15, 2021 at 5:37 PM</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="booking-status">
                            <BsCheck2 size={25} />
                            <BsX size={25} />
                          </div>
                        </div>
                      </td>
                      <td className="amount-text">
                        <span style={{ color: "red" }}>- 9, 256.00 USD</span>
                        <BsThreeDotsVertical
                          size={25}
                          color="#7F8492"
                          className="mx-3"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center">
                        <Image src={admin} />
                        <span className="mx-4">Ayooluwa</span>
                      </td>
                      <td>Jan 15, 2021 at 5:37 PM</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="booking-status">
                            <BsCheck2 size={25} />
                            <BsX size={25} />
                          </div>
                        </div>
                      </td>
                      <td className="amount-text">
                        <span style={{ color: "#00A870" }}>
                          + 12, 560.00 USD
                        </span>
                        <BsThreeDotsVertical
                          size={25}
                          color="#7F8492"
                          className="mx-3"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Row>
            {/* <Col className=" w-25 bg-white recent-reviews">
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
            </Col> */}
          </section>
        </section>
      </Container>
    </>
  );
};

export default MerchantDashboard;
