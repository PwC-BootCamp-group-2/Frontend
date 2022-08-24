import "./Footer.css";
import { Link } from "react-router-dom";
import AppStore from "../../assets/img/app-stores.png";
import spacehub from "../../assets/img/spacehub.png";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaRegUser, FaTwitter, FaYoutube } from "react-icons/fa";

import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      {/* <footer>
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
    </footer> */}

      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">Spacehub</span>
            </div>
            <div className="media-icons">
              <Link className="links" to="#"><FaFacebookF /></Link>
              <Link className="links" to="#"><FaTwitter /></Link>
              <Link className="links" to="#"><FaInstagram /></Link>
              <Link className="links" to="#"><FaLinkedinIn /></Link>
              <Link className="links" to="#"><FaYoutube  /></Link>
            </div>
          </div>
          <hr style={{color: '#fff', height: '4px'}}/>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/login">Get started</Link></li>
            </ul>
            <ul className="box">
              <li className="link_name">Spaces</li>
              <li><Link to="#">Business</Link></li>
              <li><Link to="#">Conferences</Link></li>
              <li><Link to="#">Meeting rooms</Link></li>
              <li><Link to="#">Executive Suites</Link></li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li><Link to="/login">Profile</Link></li>
              <li><Link to="/login">My account</Link></li>
              <li><Link to="/login">Bookings</Link></li>
              <li><Link to="/login">Purchase</Link></li>
            </ul>
            <ul className="box">
              <li className="link_name">Partners</li>
              <li><Link to="#">PWC</Link></li>
              <li><Link to="#">Xerde</Link></li>
              <li><Link to="#">Regus</Link></li>
              <li><Link to="#">Workbay</Link></li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" defaultValue="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2022 <Link to="#">PWC Bootcamp Group 2.</Link>All rights reserved</span>
            <span className="policy_terms">
              <Link to="#">Privacy policy</Link>
              <Link to="#">Terms &amp; condition</Link>
            </span>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
