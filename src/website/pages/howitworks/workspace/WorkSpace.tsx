import React from "react";
import Love from "../../../assets/img/love.png";
import Wifi from "../../../assets/img/wifi.svg";
import Coffee from "../../../assets/img/coffee.svg";
import printer from "../../../assets/img/printer.svg";
import MoreHorizontal from "../../../assets/img/more-horizontal.png";
import Singlespace from "../../../assets/img/single-space.png";
import moneyBag from "../../../assets/img/money_bag.png";
import calender from "../../../assets/img/calendar.png";
import Megaphone from "../../../assets/img/megaphone.png";
import { FaChevronRight, FaCircle, FaStar, FaUserAlt } from "react-icons/fa";

const WorkSpace = () => {
  return (
    <section className=" pb-md-0">
      <div className="damier-light-bugundy">
        <div className="container position-relative zindex-100">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-md-1 mb-5 mb-md-0">
              <div className="position-relative left-5 left-md-0 pt-8 pb-8">
                <figure>
                  <img
                    alt="Image placeholder"
                    src={Singlespace}
                    className="img-fluid"
                  />
                </figure>
              </div>
              
              <div className="card shadow-lg mb-3 col-8 col-md-6 col-lg-5 px-0 position-absolute bottom-n6 bottom-md-n5 right-4 right-md-n4 z-index-100">
                <div className="card-body  text-center h-40">
                  <div className="metas">
                    <div className="row pb-md-3">
                      <div className="col-7 basic">
                        <span className="status">
                          <FaCircle className="open" />
                          Open
                        </span>
                      </div>
                      <div className="col-5 text-right ">
                        <span
                          className="save-unsave save-space"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save Space for Later"
                        >
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-7 basic">
                        <ul>
                          <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title="High Speed Wifi"
                          >
                            <img src={Wifi} alt="" />
                          </li>
                          <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Free Coffee"
                          >
                            <img src={Coffee} alt="" />
                          </li>
                          <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Printer"
                          >
                            <img src={printer} alt="" />
                          </li>
                          <li
                            data-toggle="tooltip"
                            data-placement="top"
                            title="More Amenities"
                          >
                            <img src={MoreHorizontal} alt="" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-right basic">
                        <span
                          className="user-count text-dark"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Space Capacity"
                        >
                          <FaUserAlt /> 12
                        </span>
                      </div>
                      <div className="pt-md-2 pl-md-2 basic">
                        <h5>
                          <a className="damier-color" href="single-space.html">
                            Meeting Room
                          </a>
                        </h5>
                        <p>360 Ikorodu Rd, Maryland, Lagos</p>
                        <ul className="float-left">
                          <li>
                            <span className="space-rating">
                              3.5 <FaStar />   
                            </span>
                          </li>
                          <li className="damier-size">
                            <span>- 0 Reviews</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-2 pl-lg-6 mt-5 mt-md-0">
              <h1 className="display-6 font-weight-bolder mb-3">
                Explore nearby spaces
              </h1>
              <p className=" text-muted">
                For over 5 years, we pride ourselves on our commitment to
                excellence, as well as our ability to deliver for our customers.
                To make the world’s spaces connected, accessible and productive.
              </p>
              <ul>
                <li className="float-left pr-4">
                  <img src={moneyBag} />
                </li>
                <li className="pl-md-5">
                  <h1 className="word font-weight-bolder mb-0">
                    Make more money from spaces
                  </h1>
                  <p className=" text-muted">
                    Make more money from spaces, the{" "}
                  </p>
                </li>
              </ul>
              <ul>
                <li className="float-left pr-4">
                  <img src={calender} />
                </li>
                <li className="pl-md-5">
                  <h1 className="word font-weight-bolder mb-0">
                    Make more money from spaces
                  </h1>
                  <p className=" text-muted">
                    Make more money from spaces, the{" "}
                  </p>
                </li>
              </ul>
              <ul>
                <li className="float-left pr-4">
                  <img src={Megaphone} />
                </li>
                <li className="pl-md-5">
                  <h1 className="word font-weight-bolder mb-0">
                    Make more money from spaces
                  </h1>
                  <p className=" text-muted">
                    Make more money from spaces, the{" "}
                  </p>
                </li>
              </ul>
              <button className="btn-fill btn btn-primary">
                Explore spaces
                <FaChevronRight className="pl-md-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSpace;
