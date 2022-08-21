import { FaCheck } from "react-icons/fa";
import works from "../../../assets/img/how-it-works.png";
import partner from "../../../assets/img/spaces-logo.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section pt-md-8 pb-md-0 bg-section-secondary">
      <div className="hero-main">
        <div className="container position-relative zindex-100">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-md-2 mb-5 mb-md-0">
              <div className="position-relative left-5 left-md-0">
                <figure>
                  <img
                    alt="Image placeholder"
                    src={works}
                    className="img-fluid mw-md-130 mw-lg-100 rounded perspective-md-right"
                  />
                </figure>
              </div>
              <div className="home-card shadow-lg mb-3 col-8 col-md-6 col-lg-5 px-0 position-absolute bottom-n6 bottom-md-n5 left-4 left-md-n4 z-index-100">
                <div className="card-body px-lg-5 pt-5 text-center h-100">
                  <div className="icon icon-lg icon-shape rounded-circle bg-soft-success text-success">
                    <FaCheck  />
                  </div>
                  <p className="mt-4 text-muted mb-0">
                    You are currently checked in at:
                  </p>
                  <p className="damier-color font-weight-bold">
                    Dedicated Desk
                  </p>
                  <hr className="divider divider-fade my-3" />
                  <p className="mb-0">
                    <small>Host: Workstation NG</small>
                  </p>
                  <p className="mb-0">
                    <small>Location: Maryland Mall, Lagos</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-1 pr-lg-5 mt-5 mt-md-0">
              <h1 className="hero-text">
                How it Works
                <strong className="d-block font-weight-normal h4">
                  Create a world where people work to make a life, not just a
                  living.
                </strong>
              </h1>
              <p className="text-muted">
                For over 5 years, we pride ourselves on our commitment to
                excellence, as well as our ability to deliver for our customers.
                To make the world’s spaces connected, accessible and productive.
              </p>
              <div className="">
                <div className="d-flex">
                  <h5 className="lh-180 mt-4 mb-6">
                    <img src={partner} className="img-fluid" alt="" />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-container shape-line shape-position-bottom">
        <svg
          width="2560px"
          height="100px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          x="0px"
          y="0px"
          viewBox="0 0 2560 100"
          xmlSpace="preserve"
          className=""
        >
          <polygon points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
