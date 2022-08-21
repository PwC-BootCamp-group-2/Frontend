import React from 'react'
import SmilinBoy from "../../../assets/img/smiling-boy.png";
import Clock from "../../../assets/img/clock.svg";


const EasyToUse = () => {
  return (
    <section className="position-relative pb-md-0">
  <div className="damier-grey">
    <div className="container position-relative zindex-100">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 order-md-1 mb-5 mb-md-0">
          <div className="position-relative left-5 left-md-0 pt-5 pb-5">
            <figure><img alt="Image placeholder" src={SmilinBoy} className="img-fluid  mw-lg-100 rounded " /></figure>
          </div>
          <div className="card shadow-lg mb-3 col-8 col-md-6 col-lg-5 px-0 position-absolute bottom-n6 bottom-md-n5 right-4 right-md-n4 z-index-100">
            <div className="card-body p-0 text-center h-40">
              <div className="metas">
                <div className="row">
                  <div className=" col px-3 p-4">
                    <ul className="m-0">
                      <li>
                        <img src={Clock} alt="" />
                      </li>
                      <li>														<span>TIME LEFT</span></li>
                    </ul>
                    <ul>
                      <li>
                        <p><strong>10minutes</strong>  <strong>5seconds</strong></p>
                      </li>
                    </ul>
                    <ul className="extend">
                      <li className="pr-md-2">
                        <button className="btn-fill">Extend My Time</button>
                      </li>
                      <li>
                        <button className="btn-outline">Check-In Now</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-2 pl-md-6 mt-5 mt-md-0">
          <h1 className="display-6 font-weight-bolder mb-3">Reserve a Space ahead of time</h1>
          <p className=" text-muted">Customise how payments can be made or split for single items, and choose to collect payment for one or more sub-merchants.</p>
          <p className=" text-muted">Multiple payment methods are accepted, and payouts can be made as they happen.</p>
        </div>
      </div>
    </div>
  </div>
</section>
	
  )
}

export default EasyToUse
