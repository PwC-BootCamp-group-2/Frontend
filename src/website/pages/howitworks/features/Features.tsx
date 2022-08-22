import React from "react";
import Ellipse from "../../../assets/img/ellipse.svg";
import Billboard from "../../../assets/img/billboard.png";
import Divider from "../../../assets/img/divider.png";

const Features = () => {
  return (
    <section>
      <div className="damier-grey">
        <div className="container">
          <div className="text-center">
            <div className="pt-5">
              <h1 className="display-6 font-weight-bolder mb-3 text-dark">
                Features
              </h1>
            </div>
            <ul
              className="nav nav-tabs justify-content-center mb-5"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active text-dark"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <i data-feather="user" /> For Individuals
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <i data-feather="grid" /> For Teams
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                Individual Here
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                Team Here
              </div>
            </div>
            <div className="row">
              <div className="col text-left">
                <ul>
                  <li className="float-left">
                    <img src={Ellipse} />
                  </li>
                  <li className="pl-md-6">
                    <h1 className="word font-weight-bolder mb-0">
                      Reserve space on the go
                    </h1>
                    <p className=" text-muted">
                      Make more money from spaces, the{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col text-left">
                <ul>
                  <li className="float-left">
                        <img src={Ellipse} />
                  </li>
                  <li className="pl-md-6">
                    <h1 className="word font-weight-bolder mb-0">
                      Find spaces seamlesslessly
                    </h1>
                    <p className=" text-muted">
                      By using damier spaces,
                      <br />
                      this allows you to reserve space
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col text-left">
                <ul>
                  <li className="float-left">
                    <img src={Ellipse} />
                  </li>
                  <li className="pl-md-6">
                    <h1 className="word font-weight-bolder mb-0">
                      Subscription based model
                    </h1>
                    <p className=" text-muted">
                      By using damier spaces,
                      <br />
                      this allows you to reserve space
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col text-left">
                <ul>
                  <li className="float-left">
                    <img src={Ellipse} />
                  </li>
                  <li className="pl-md-6">
                    <h1 className="word font-weight-bolder mb-0">
                      Reserve space on the go
                    </h1>
                    <p className=" text-muted">
                      By using damier spaces,
                      <br />
                      this allows you to reserve space
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col text-left">
                <ul>
                  <li className="float-left">
                    <img src={Ellipse} />
                  </li>
                  <li className="pl-md-6">
                    <h1 className="word font-weight-bolder mb-0">
                      Find spaces seamlesslessly
                    </h1>
                    <p className=" text-muted">
                      By using damier spaces,
                      <br />
                      this allows you to reserve space
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col text-left">
                <ul>
                  <li className="float-left">
                    <img src={Ellipse} />
                  </li>
                  <li className="pl-md-6">
                    <h1 className="word font-weight-bolder mb-0">
                      Subscription based model
                    </h1>
                    <p className=" text-muted">
                      By using damier spaces,
                      <br />
                      this allows you to reserve space
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <a href="faqs.html" className="btn-fill btn btn-primary">
              Frequently Asked Questions
              <i className="fas fa-chevron-right pl-md-2" />
            </a>
            <div className="text-center pt-8">
              <img
                src={Billboard}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="pt-3 text-left">
              <p>
                Cross Platform experience on any smartphone,
                <br /> tablets and modern devices.
              </p>
            </div>
            <div className="pt-3 pb-3 w-100 text-left">
              <img src={Divider} alt='' />
            </div>
            <div>
              <div>
                <h1 className="display-6 font-weight-bold mb-0 text-dark text-left">
                  End to end booking system flows for multi-party workspaces
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
