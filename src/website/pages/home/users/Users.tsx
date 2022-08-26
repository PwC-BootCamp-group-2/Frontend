import { Col, Container, Image, Button } from "react-bootstrap";
import individualUser from "../../../assets/img/individual-user.webp";
import merchantUser from "../../../assets/img/merchant-user.webp";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Users.css";
const Users = () => {
  return (
    <>
      <Container>
        <section>
          <Col className="individual-user-container">
            <Col>
              <Image src={individualUser} className="individual-user-image" />
            </Col>
            <Col>
              <div>
                <h1 className="individual-user-content-title">
                  Book your space with ease.
                </h1>
                <span>
                  We make book of spaces an easy activity. We enable individuals
                  to to automate payments through our platform to help avoid
                  delays and stress. The user gets to connect their credit card
                  to the platform for easy of transactions.
                </span>
              </div>
              <div className="mt-3">
                <button className="individual-user-button">
                  <Link to="/signup">Get Started</Link>
                  <BiChevronRight size={20} color="#fff" />
                </button>
              </div>
            </Col>
          </Col>
          <Col className="individual-user-container">
            {" "}
            <Col>
              <div className="merchant-user-content-container">
                <h1 className="individual-user-content-title">
                  Lease your space with ease.
                </h1>
                <span>
                  We also provide an opportunity for users to host their spaces
                  and resources on our platform with it. They are give the
                  priviledge to make withdrawals seamlessly.
                </span>
              </div>
              <div className="mt-3">
                <button className="individual-user-button">
                  <Link to="/signup">Become a Merchant</Link>
                  <BiChevronRight size={20} color="#fff" />
                </button>
              </div>
            </Col>
            <Col className="merchant-user-image-container">
              <Image src={merchantUser} className="individual-user-image" />
            </Col>
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Users;
