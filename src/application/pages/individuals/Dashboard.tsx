import {
  Form,
  Button,
  InputGroup,
  Col,
  Card,
  Table,
  Image,
} from "react-bootstrap";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import "../../utils/css/individuals/Dashboard.css";
import lekkiOffice from "../../utils/images/lekki-office.png";
import viOffice from "../../utils/images/vi-office.png";
import ikejaOffice from "../../utils/images/ikeja-office.png";
import marylandOffice from "../../utils/images/maryland-office.png";
import firstUser from "../../utils/images/first-user.png";
import secondUser from "../../utils/images/second-user.png";
import thirdUser from "../../utils/images/third-user.png";

import { BsStarFill } from "react-icons/bs";
const Dashboard = () => {
  return (
    <>
      <section className="header-section">
        <div>
          <h3>
            <b>Dashboard</b>
          </h3>
          <p>Available Office Spaces</p>
        </div>
        <div className="search-container">
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
        <div className="user-profile">
          <FaRegUser size={32} color="white" />
        </div>
      </section>
      <section className="d-flex dashboard-content">
        <section>
          <Col className="d-flex">
            <Card className="card-section">
              <Card.Img variant="top" src={lekkiOffice} />
              <Card.Body className="px-0">
                <Card.Title className="size">Lekki Office</Card.Title>
                <Card.Text>
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <span className="price-size">(4.0)</span>
                </Card.Text>
                <Card.Text>
                  <span className="price-size">
                    <b>Start from</b>
                  </span>
                  <p className="price-size">#50,000</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-section">
              <Card.Img variant="top" src={viOffice} />
              <Card.Body className="px-0">
                <Card.Title className="size">VI Office</Card.Title>
                <Card.Text>
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <span className="price-size">(4.0)</span>
                </Card.Text>
                <Card.Text>
                  <span className="price-size">
                    <b>Start from</b>
                  </span>
                  <p className="price-size">#50,000</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-section">
              <Card.Img variant="top" src={ikejaOffice} />
              <Card.Body className="px-0">
                <Card.Title className="size">Ikeja Office</Card.Title>
                <Card.Text>
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />

                  <span className="price-size">(3.0)</span>
                </Card.Text>
                <Card.Text>
                  <span className="price-size">
                    <b>Start from</b>
                  </span>
                  <p className="price-size">#50,000</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-section">
              <Card.Img variant="top" src={marylandOffice} />
              <Card.Body className="px-0">
                <Card.Title className="size">Maryland Office</Card.Title>
                <Card.Text>
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <BsStarFill size={20} color="#FFCD83" className="spacing" />
                  <span className="price-size">(4.0)</span>
                </Card.Text>
                <Card.Text>
                  <span className="price-size">
                    <b>Start from</b>
                  </span>
                  <p className="price-size">#50,000</p>
                </Card.Text>
                <Card.Text className="text-right">
                  <Button variant="link" className="load-more">
                    Load More
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
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
        </section>
        <section className="mx-2">
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
        </section>
      </section>
    </>
  );
};

export default Dashboard;
