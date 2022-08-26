import "../../utils/css/merchants/MerchantDashboard.css";
import { Table, Image } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import {
  BsArrowUpSquare,
  BsArrowDownSquare,
  BsDashSquare,
  BsArrowRight,
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

const MerchantDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }
  //   if (!user) {
  //     navigate('/login');
  //   }
  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate, isError, message, dispatch]);
  const [showModal, setShowModal] = useState(false);

  const handleWmodal = () => {
    setShowModal(true);
  };
  return (
    <div className="merchant-container">
      <section className="header-section">
        <div>
          <h3>
            <b>Dashboard</b>
          </h3>
        </div>
        <div className="d-flex justify-content-end">
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
              <h6 className="m-0">Wallet</h6>
            </div>
            <GiTakeMyMoney title="Withdraw" onClick={handleWmodal} size={25} />
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaRegBell size={32} />
          <span>
            <b>
              Welcome <br /> {user && user.data.fullName} (Admin)
            </b>
          </span>
          <div className="mx-2">
            <Image src={admin} />
          </div>
        </div>
      </section>
      <section>
        <section className="d-flex analytics mt-5 align-items-center">
          <div className="stats">
            {showModal && <WithdrawModal sState={setShowModal} />}
            <Image src={analytics} alt="Stats" />
          </div>
          <div className="w-25 all-transactions">
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
              <div className="d-flex align-items-center total-income">
                <BsArrowUpSquare size={25} color="#00A870" />
                <div>
                  <span>Total Income</span>
                  <h3>
                    <b>$12,650.00</b>
                  </h3>
                </div>
              </div>
              <div className="d-flex align-items-center total-income">
                <BsArrowDownSquare size={25} color="#FF7426" />
                <div>
                  <span>Total Withdrawal</span>
                  <h3>
                    <b>$6,250.00</b>
                  </h3>
                </div>
              </div>
              <div className="d-flex align-items-center total-income">
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
          </div>
        </section>
        <section className="w-100 d-flex mt-5 align-items-center">
          <div className="merchant-table-container w-100">
            <div className="d-flex justify-content-between">
              <h4>
                <b>Latest Bookings</b>
              </h4>
              <div>
                <span className="size">
                  <b>View All</b>
                </span>
                <BsArrowRight size={20} color="#07163E" className="mx-2" />
              </div>
            </div>
            <div>
              <Table borderless>
                <tbody>
                  <tr className="d-flex align-items-center justify-content-evenly">
                    <td className="d-flex align-items-center">
                      <Image src={admin} />
                      <div>
                        <p className="mx-4 my-0">Fiji Hall</p>
                        <span className="mx-4">ByKiwumi</span>
                      </div>
                    </td>
                    <td>Jan 15, 2021 at 5:37 PM </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <div className="booking-status">
                          <p>Cancel</p>
                        </div>
                      </div>
                    </td>
                    <td className="amount-text">
                      <span style={{ color: "red" }}>- 1700.00 USD</span>
                      {/* <BsThreeDotsVertical
                        size={25}
                        color="#7F8492"
                        className="mx-3"
                      /> */}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className=" w-25 bg-white recent-reviews">
            <div className="mx-3">
              <h5>
                <b>Notifications</b>
              </h5>
            </div>
            <div className="reviews-container">
              <div>{/* <Image src={firstUser} /> */}</div>
              <div className="reviews">
                <h6>
                  <b>New Order</b>
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MerchantDashboard;
