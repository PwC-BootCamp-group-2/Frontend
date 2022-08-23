import "./Footer.css";
import { Link } from "react-router-dom";
import AppStore from "../../assets/img/app-stores.png";
import spacehub from "../../assets/img/spacehub.png";
import { FaFacebook, FaInstagram, FaRegUser, FaTwitter } from "react-icons/fa";

import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container >

        <section className="d-flex">
          
          <Col xs={3} className='item'>
            <Link to="/">
              <span id="logo">
                <img alt="Image" src={spacehub} id="footer-logo" />
              </span>
            </Link>

            <p className="mt-5">
              For over 5 years, we pride ourselves on our commitment to
              excellence, as well as our ability to deliver for our customers.
            </p>
          </Col>

          <Col xs={3} className='item'>
            <h6 className="mb-3">Company</h6>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </Col>

          <Col xs={3} className='item'>
            <h6 className="mb-3">Socials</h6>
            <ul>
              <li>
                <Link to="/" className="nav-link" target="_blank">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link" target="_blank">
                  Instagram
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={3} className='item'>
            <h6 className="mb-3">Contact</h6>
            <p>
              <strong>Address:</strong>
              <br />
              3a,John Obasi Kalu Close, Behind Ocean Crest School, Oniru Lekki
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              hello@spacehub.com
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              +234 800 000 000
            </p>
          </Col>
        </section>

        <hr className="divider divider-fade divider-dark my-4" />
        <div className="row align-items-center justify-content-center pb-4">
          <div className="col-md-6">
            <div className="copyright text-sm font-weight-bold text-center text-md-left">
              © 2022
              <Link to="/" className="font-weight-bold" target="_blank">
                Spacehub
              </Link>
              . All rights reserved
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
