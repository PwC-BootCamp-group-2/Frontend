import "./Footer.css";
import { Link } from "react-router-dom";
import AppStore from "../../assets/img/app-stores.png";
import spacehub from "../../assets/img/spacehub.png";
import {
  FaFacebook,
  FaInstagram,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="position-relative" id="footer-main">
      <div className="footer-dark damier-footer">
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h3 className="h3 font-weight-normal mb-0 opacity-8">
                    Setup a free account and start booking any space at your own
                    convenience!
                  </h3>
                </div>
                <div className="col-lg-5 text-lg-right mt-4 mt-lg-0">
                  <Link
                    to="/account"
                    className="btn btn-outline my-2 ml-0 ml-sm-3"
                  >
                    <FaRegUser data-feather="user" />
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-5" />
          <div className="row">
            <div className="col-lg-8">
              <Link to="/" className="float-left mr-3">
                <img src={AppStore} alt />
              </Link>

              <p className="fw-on-mobile">
                Download out apps on Apple App Store or Google Play Store and
                book your spaces on the go!
              </p>
            </div>
            <div className="col">
              <div className="divider-hr" />
            </div>
            <div className="col-lg-3">
              <p>
                Give us a call
                <Link to="tel:+2348098765432">+234 809 876 5432</Link> and we
                can set you up or check our{" "}
                <Link to="pricing.html">Package Plans</Link>.
              </p>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark mt-4 mb-5" />
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <Link to="/">
                <span id="logo">
                  <img
                    alt="Image placeholder"
                    src={spacehub}
                    id="footer-logo"
                  />
                </span>
              </Link>
              <p className="mt-4 text-sm opacity-8 pr-lg-4">
                For over 5 years, we pride ourselves on our commitment to
                excellence, as well as our ability to deliver for our customers.
              </p>
              <ul className="nav mt-4">
                <li className="nav-item">
                  <Link to="/" className="nav-link" target="_blank">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link" target="_blank">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link" target="_blank">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/howitworks">How it Works</Link>
                </li>
                <li>
                  <Link to="/pricing">Package Plans</Link>
                </li>
                <li>
                  <Link to="/carrers">Careers</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Resourcces</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="blog.html">Blog</Link>
                </li>
                <li>
                  <Link to="faqs.html">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Contact</h6>
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
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div className="copyright text-sm font-weight-bold text-center text-md-left">
                © 2022
                <Link to="/" className="font-weight-bold" target="_blank">
                  Damier Spaces
                </Link>
                . All rights reserved
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
                  <Link to="/terms" className="nav-link">
                    Legal and Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
