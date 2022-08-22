import React from 'react'
import Subscription from "../../../assets/img/subscription.png";

const Subscriptions = () => {
  return (
    <div>
  <section className="position-relative pb-md-0">
    <div className="damier-grey">
      <div className="container position-relative zindex-100">
        <div className="row align-items-center pt-lg-5">
          <div className="col-12 col-md-6 order-md-2 mb-5 mb-md-0">
            <div className="position-relative left-5 left-md-0 pt-5 pb-5">
              <figure><img alt="Image placeholder" src={Subscription} className="img-fluid  mw-lg-100 rounded " /></figure>
            </div>
            <div className="card shadow-lg mb-3 col-8 col-md-6 col-lg-5 px-0 position-absolute bottom-n6 bottom-md-n5 right-4 right-md-n4 z-index-100">
              <div className="card-body p-0 text-center h-40">
                <div className="metas">
                  <div className="row">
                    <div className=" col px-md-5 pt-4 pb-4">
                      <ul>
                        <li>
                          <h1>N15,000</h1>
                        </li>
                        <li>
                          <span>Maxi Low</span>
                        </li>
                      </ul>
                      <div>
                        <ul>
                          <li>
                            <img src="../../assets/img/check.svg" className="float-md-left pr-md-3" alt="" />
                            <p>No. of slots per month</p>
                          </li>
                          <li>
                            <img src="../../assets/img/check.svg" className="float-md-left pr-md-3" alt="" />
                            <p>High and stable internet</p>
                          </li>
                          <li>
                            <img src="../../assets/img/check.svg" className="float-md-left pr-md-3" alt=""/>
                            <p>Table space</p>
                          </li>
                          <li>
                            <img src="../../assets/img/check.svg" className="float-md-left pr-md-3" alt=""/>
                            <p>Print, scan and copy</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 order-md-1 mt-5 mt-md-0">
            <h1 className="display-6 font-weight-bolder mb-3">Flexible Subscription based model</h1>
            <p className=" text-muted">Customise how payments can be made or split for single items, and choose to collect payment for one or more sub-merchants.</p>
            <p className=" text-muted">Multiple payment methods are accepted, and payouts can be made as they happen.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
</div>

  )
}

export default Subscriptions
