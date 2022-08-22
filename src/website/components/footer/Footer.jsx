<<<<<<< HEAD
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

=======
import './Footer.css'
>>>>>>> origin/gabriel
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
<<<<<<< HEAD
                  <Link
                    to="/account"
                    className="btn btn-outline my-2 ml-0 ml-sm-3"
                  >
                    <FaRegUser data-feather="user" />
                    Create an Account
                  </Link>
=======
                  <a
                    href="../users-hosts/create-account.html"
                    className="btn btn-outline my-2 ml-0 ml-sm-3"
                  >
                    <i data-feather="user" className="text-primary" /> Create an
                    Account
                  </a>
>>>>>>> origin/gabriel
                </div>
              </div>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-5" />
          <div className="row">
            <div className="col-lg-8">
<<<<<<< HEAD
              <Link to="/" className="float-left mr-3">
                <img src={AppStore} alt />
              </Link>

=======
              <a href="#" className="float-left mr-3">
                <img src="../../assets/img/app-stores.png" alt />
              </a>
>>>>>>> origin/gabriel
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
<<<<<<< HEAD
                Give us a call
                <Link to="tel:+2348098765432">+234 809 876 5432</Link> and we
                can set you up or check our{" "}
                <Link to="pricing.html">Package Plans</Link>.
=======
                Give us a call{" "}
                <a href="tel:+2348098765432">+234 809 876 5432</a> and we can
                set you up or check our <a href="pricing.html">Package Plans</a>
                .
>>>>>>> origin/gabriel
              </p>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark mt-4 mb-5" />
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
<<<<<<< HEAD
              <Link to="/">
                <span id="logo">
                  <img
                    alt="Image placeholder"
                    src={spacehub}
                    id="footer-logo"
                  />
                </span>
              </Link>
=======
              <a href="index.html">
                <img
                  alt="Image placeholder"
                  src="../../assets/img/brand/dark.svg"
                  id="footer-logo"
                />
              </a>
>>>>>>> origin/gabriel
              <p className="mt-4 text-sm opacity-8 pr-lg-4">
                For over 5 years, we pride ourselves on our commitment to
                excellence, as well as our ability to deliver for our customers.
              </p>
              <ul className="nav mt-4">
                <li className="nav-item">
<<<<<<< HEAD
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
=======
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
>>>>>>> origin/gabriel
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Company</h6>
              <ul className="list-unstyled">
                <li>
<<<<<<< HEAD
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
=======
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="how-it-works.html">How it Works</a>
                </li>
                <li>
                  <a href="pricing.html">Package Plans</a>
                </li>
                <li>
                  <a href="careers.html">Careers</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
>>>>>>> origin/gabriel
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Resourcces</h6>
              <ul className="list-unstyled">
                <li>
<<<<<<< HEAD
                  <Link to="blog.html">Blog</Link>
                </li>
                <li>
                  <Link to="faqs.html">FAQs</Link>
=======
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="faqs.html">FAQs</a>
>>>>>>> origin/gabriel
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
<<<<<<< HEAD
                hello@spacehub.com
=======
                hello@damierspaces.com
>>>>>>> origin/gabriel
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
<<<<<<< HEAD
                +234 800 000 000
=======
                +234 809 8765 432
>>>>>>> origin/gabriel
              </p>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div className="copyright text-sm font-weight-bold text-center text-md-left">
<<<<<<< HEAD
                © 2022
                <Link to="/" className="font-weight-bold" target="_blank">
                  Damier Spaces
                </Link>
=======
                © 2020{" "}
                <a
                  href="https://damierspaces.com/"
                  className="font-weight-bold"
                  target="_blank"
                >
                  Damier Spaces
                </a>
>>>>>>> origin/gabriel
                . All rights reserved
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
<<<<<<< HEAD
                  <Link to="/terms" className="nav-link">
                    Legal and Terms
                  </Link>
=======
                  <a className="nav-link" href="terms.html">
                    Legal and Terms
                  </a>
>>>>>>> origin/gabriel
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
