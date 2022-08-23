import React from "react";
import About from "../../assets/img/about-bg.png";
import Divider from "../../assets/img/divider.png";
import Value from "../../assets/img/value.svg";
import Inspire from "../../assets/img/inspire.svg";
import Mission from "../../assets/img/Group 445.svg";
import Rectangle from "../../assets/img/Rectangle 344.png";
import Rectangle2 from "../../assets/img/Rectangle 343.png";
import Clients1 from "../../assets/img/clients 1.png";
import Rectangle3 from "../../assets/img/Rectangle 319.png";
import Rectangle4 from "../../assets/img/Rectangle 321.png";
import Rectangle5 from "../../assets/img/Rectangle 322.png";
import Vector62 from "../../assets/img/Vector 62.svg";
import Rectangle32 from "../../assets/img/Rectangle 320.png";
import "./About.css";

const AboutUs = () => {
  return (
    <>
      <section className="slice py-8 bg-white bg-cover bg-size--cover about-inro">
        <span className="mask bg-gradient-white opacity-9"></span>
        <div>
          <div className="container d-flex align-items-center text-center text-lg-left py-5">
            <div className="col px-0">
              <div className="row row-grid align-items-center justify-content-center">
                <div className="col-lg-7 text-center text-lg-left">
                  <h1 className="mb-4 text-center damier-color">About Us</h1>
                  <p className="lead text-center mb-lg-2">
                    <strong>
                      Create a world where people work to make a life, not just
                      a living.
                    </strong>
                  </p>
                  <p className="text-center opacity-10">
                    For over 5 years, we pride ourselves on our commitment to
                    excellence, as well as our ability to deliver for our
                    customers. To make the world’s spaces connected, accessible
                    and productive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg damier-light-bugundy">
        <div className="container">
          <div className="about-img">
            <img src={About} alt="" />
          </div>
        </div>
      </section>

      <section
        className="damier-light-bugundy"
        style={{ border: "2px solid red" }}
      >
        <div className="container">
          <div
            className="pt-3 pb-2 w-100"
            style={{
              paddingTop: "1rem",
              paddingBottom: "0.5rem",
              width: "100%",
            }}
          >
            <img src={Divider} alt="" />
          </div>
          <div className="row pb-2" style={{ border: "2px solid purple" }}>
            <div className="col-lg-4 text-lg-left">
              <h3 className="text-black mb-2">Building the next frontier</h3>
              <p>
                Create a world where people work to make a life, not just a
                living.
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={{ border: "2px solid green" }}>
          <div className="row pt-5 pb-6">
            <div className="col-4 text-lg-left">
              <img src={Mission} alt="mission" />
              <h5 className="mt-2 mb-2">Our Mission</h5>
              <p>
                When we started WeWork in 2010, we wanted to build more than
                beautiful, shared office spaces.
              </p>
            </div>
            <div className="col-4 text-lg-left">
              <img src={Inspire} alt="Inspire" />
              <h5 className="mt-2 mb-2">What inspires us</h5>
              <p>
                When we started WeWork in 2010, we wanted to build more than
                beautiful, shared office spaces.
              </p>
            </div>
            <div className="col-4 text-lg-left">
              <img src={Value} alt="value" />
              <h5 className="mt-2 mb-2">Our Values</h5>
              <p>
                When we started WeWork in 2010, we wanted to build more than
                beautiful, shared office spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg" style={{ border: "2px solid blue" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 mt-4 pt-4">
              <h3 className="text-center text-wrap mb-2">What we do</h3>
              <p className="text-center">
                When we started Damier Spaces in 2010, we wanted to build more
                than beautiful, shared office spaces. We wanted to build a
                community. A place you join as an individual, 'me', but where
                you become part of a greater 'we'. A place where we’re
                redefining success measured by personal fulfillment.
              </p>
            </div>
          </div>
        </div>
        <hr className="opacity-1" />
        <div className="row pt-3 pb-4 justify-content-center">
          <div className="col-5">
            <h3 className="mb-2 text-center">
              We’re happy to find incredible offices
            </h3>
            <p className="text-center">
              Join the ranks of industry leaders turning to Damier Spaces for
              their commercial real estate needs.
            </p>
          </div>
        </div>
        <div className="container">
          <img
            src={Vector62}
            alt=""
            className="img-fluid justify-content-center"
          />
        </div>
        <div className="container pt-4 pb-6">
          <div className="row justify-content-center">
            <img src={Clients1} alt="" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="grey-bg">
        <div className="container">
          <div className="row pt-7 mb-3">
            <div className="col-lg-3 text-lg-left pr-lg-4">
              <h2>Our Team</h2>
              <p>
                When we started WeWork in 2010, we wanted to build more than
                beautiful, shared office spaces.
              </p>
              <a className="btn btn-primary" href="careers.html">
                Join Our Team
              </a>
            </div>
            <div className="col-lg-3 offset-lg-3">
              <img src={Rectangle3} alt="" className="img-fluid rounded-lg" />
              <p className="mb-0 mt-2">
                <strong>Bosun Jones</strong>
              </p>
              <p>
                <small>PRINCIPAL PARTNER</small>
              </p>
            </div>
            <div className="col-lg-3">
              <img src={Rectangle32} alt="" className="img-fluid rounded-lg" />
              <p className="mb-0 mt-2">
                <strong>Kosara Okafor</strong>
              </p>
              <p>
                <small>HEAD, TECHNOLOGY</small>
              </p>
            </div>
          </div>
          <div className="row mb-3 justify-content-md-end">
            <div className="col-lg-3">
              <img src={Rectangle4} alt="" className="img-fluid rounded-lg" />
              <p className="mb-0 mt-2">
                <strong>Mordi Chukwu</strong>
              </p>
              <p>
                <small>PEOPLE HR</small>
              </p>
            </div>
            <div className="col-lg-3">
              <img src={Rectangle5} alt="" className="img-fluid rounded-lg" />
              <p className="mb-0 mt-2">
                <strong>Ngozi Udeagbara</strong>
              </p>
              <p>
                <small>CUSTOMER SUPPORT</small>
              </p>
            </div>
          </div>
          <div className="row pb-5 justify-content-md-end">
            <div className="col-lg-3">
              <img src={Rectangle2} alt="" className="img-fluid rounded-lg" />
              <p className="mb-0 mt-2">
                <strong>Ijeoma Chukwu</strong>
              </p>
              <p>
                <small>PEOPLE HR</small>
              </p>
            </div>
            <div className="col-lg-3">
              <img src={Rectangle} alt="" className="img-fluid rounded-lg" />
              <p className="mb-0 mt-2">
                <strong>Ahmadu Haruna</strong>
              </p>
              <p>
                <small>CUSTOMER SUPPORT</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
