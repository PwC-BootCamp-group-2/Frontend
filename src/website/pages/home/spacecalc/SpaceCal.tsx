import React from 'react'
import Adjust from '../../../assets/img/adjust.svg'
import Find from '../../../assets/img/find.svg'
import Start from '../../../assets/img/start.svg'
import SideHustle from "../../../assets/img/side-hustle.svg"
import { Link } from 'react-router-dom'

const SpaceCal = () => {
    return (
        <section className="slice-lg damier-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 mb-3 text-center">
                        <h3 className="text-white">Let’s get a space that perfectly fits you.</h3>
                        <p className="text-white">Co-working, Private Offices, Custom Built, Dedicated Desk,<br />Hot Desk,
                            Virtual Offices, Meeting Room, etc.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="pricing-filter">
                                <h4 className="border-bottom pb-2 pt-3 text-center mb-4">Space Calculator</h4>
                                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active text-dark" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i data-feather="user" /> Individual</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-dark" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i data-feather="grid" /> Team</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/* Individuals Here */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="left-col">
                                                    <div className="filter-form">
                                                        <div className="form-group">
                                                            <label className="form-control-label">Hi, what’s your name?</label>
                                                            <div className="input-group input-group-merge mb-3">
                                                                <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="First name only: (e.g: Bosun)" />
                                                                <div className="input-group-prepend"><span className="input-group-text"><i data-feather="user" /></span></div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">How many times would you need a
                                                                    space in a month?</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={100} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">How many spaces would you like
                                                                    access to?</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={100} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">What’s your budget? (₦)</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={100} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <button type="button" className="btn btn-outline check-pricing float-none">Calculate</button>
                                                            </div>
                                                            <div className="col text-right">
                                                                <a className="reset-pricing" href="#!"><i data-feather="refresh-cw" />
                                                                    Reset Form</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="right-col before">
                                                    <div className="loader-holder">
                                                        <div className="loader">Loading...</div>
                                                    </div>
                                                    <h5 className="text-center">Enter your space considerations and find out how much
                                                        space you need!</h5>
                                                    <ul>
                                                        <li>
                                                            <img src={Adjust} alt='' />
                                                            <p>Adjust the<br />filters</p>
                                                        </li>
                                                        <li>
                                                            <img src={Find} alt='' />
                                                            <p>Get the<br />package</p>
                                                        </li>
                                                        <li>
                                                            <img src={Start} alt='' />
                                                            <p>Let’s get<br />started!</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* End Suggest */}
                                                <div className="right-col after">
                                                    <div className="text-center">
                                                        <img src="../../assets/img/side-hustle.svg" alt='' />
                                                        <h5 className="text-center mb-0">You’re a Side Hustler!</h5>
                                                        <p>Here are our top recommendations</p>
                                                    </div>
                                                    <div id="accordion-1" className="accordion accordion-spaced">
                                                        <div className="card">
                                                            <div className="card-header py-4" id="heading-1-1" data-toggle="collapse" role="button" data-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                                                <h6 className="mb-0"><i data-feather="layers" className="mr-3" />Flexi - Low
                                                                </h6>
                                                            </div>
                                                            <div id="collapse-1-1" className="collapse" aria-labelledby="heading-1-1" data-parent="#accordion-1">
                                                                <div className="card-body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>High and stable internet</td>
                                                                                <td className="text-right">Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="row mt-4">
                                                                        <div className="col-lg-12 d-block">
                                                                            <a href="../users-hosts/user-payment.html" className="btn btn-fill">Subscribe</a>
                                                                            <br /><small>Note: All packages last for 30 days.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header py-4" id="heading-1-2" data-toggle="collapse" role="button" data-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                                                <h6 className="mb-0"><i data-feather="layers" className="mr-3" />Flexi - Mid
                                                                </h6>
                                                            </div>
                                                            <div id="collapse-1-2" className="collapse" aria-labelledby="heading-1-2" data-parent="#accordion-1">
                                                                <div className="card-body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>High and stable internet</td>
                                                                                <td className="text-right">Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="row mt-4">
                                                                        <div className="col-lg-12 d-block">
                                                                            <a href="../users-hosts/user-payment.html" className="btn btn-fill">Subscribe</a>
                                                                            <br /><small>Note: All packages last for 30 days.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button" data-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                                                <h6 className="mb-0"><i data-feather="layers" className="mr-3" />Flexi - High
                                                                </h6>
                                                            </div>
                                                            <div id="collapse-1-3" className="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
                                                                <div className="card-body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>High and stable internet</td>
                                                                                <td className="text-right">Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="row mt-4">
                                                                        <div className="col-lg-12 d-block">
                                                                            <a href="../users-hosts/user-payment.html" className="btn btn-fill">Subscribe</a>
                                                                            <br /><small>Note: All packages last for 30 days.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="help-text">
                                                            <p>If you can’t find a suitable pricing <a href="pricing.html">Click Here</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Suggest */}
                                            </div>
                                        </div>
                                        {/*/ Individuals Here */}
                                    </div>

                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                        {/* Teams Here */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="left-col">
                                                    <div className="filter-form">
                                                        <div className="form-group">
                                                            <label className="form-control-label">What's the name of your team?</label>
                                                            <div className="input-group input-group-merge mb-3">
                                                                <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="Team name: (e.g: Acme Team)" />
                                                                <div className="input-group-prepend"><span className="input-group-text"><i data-feather="user" /></span></div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">What is the size of your team?</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={2} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">How many times would you need a
                                                                    space in a month?</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={100} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">How many spaces would you like
                                                                    access to?</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={100} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="form-control-label">What’s your budget? (₦)</label>
                                                                <div className="range-slider">
                                                                    <input className="range-slider__range" type="range" defaultValue={100} min={0} max={500} />
                                                                    <span className="range-slider__value">0</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col">
                                                                <button type="button" className="btn btn-outline check-pricing float-none">Calculate</button>
                                                            </div>
                                                            <div className="col text-right">
                                                                <a className="reset-pricing" href="#!"><i data-feather="refresh-cw" />
                                                                    Reset Form</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="right-col before">
                                                    <div className="loader-holder">
                                                        <div className="loader">Loading...</div>
                                                    </div>
                                                    <h5 className="text-center">Enter your space considerations and find out how much
                                                        space you need!</h5>
                                                    <ul>
                                                        <li>
                                                            <img src={Adjust} alt='' />
                                                            <p>Adjust the<br />filters</p>
                                                        </li>
                                                        <li>
                                                            <img src={Find} alt='' />
                                                            <p>Get the<br />package</p>
                                                        </li>
                                                        <li>
                                                            <img src={Start} alt='' />
                                                            <p>Let’s get<br />started!</p>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* End Suggest */}
                                                <div className="right-col after">
                                                    <div className="text-center">
                                                        <img src={SideHustle} alt='' />
                                                        <h5 className="text-center mb-0">You’re a Side Hustler!</h5>
                                                        <p>Here are our top recommendations</p>
                                                    </div>
                                                    <div id="accordion-1" className="accordion accordion-spaced">
                                                        <div className="card">
                                                            <div className="card-header py-4" id="heading-1-1" data-toggle="collapse" role="button" data-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                                                                <h6 className="mb-0"><i data-feather="layers" className="mr-3" />Flexi - Low
                                                                </h6>
                                                            </div>
                                                            <div id="collapse-1-1" className="collapse" aria-labelledby="heading-1-1" data-parent="#accordion-1">
                                                                <div className="card-body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>High and stable internet</td>
                                                                                <td className="text-right">Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="row mt-4">
                                                                        <div className="col-lg-12 d-block">
                                                                            <a href="../users-hosts/user-payment.html" className="btn btn-fill">Subscribe</a>
                                                                            <br /><small>Note: All packages last for 30 days.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="card">
                                                            <div className="card-header py-4" id="heading-1-2" data-toggle="collapse" role="button" data-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                                                                <h6 className="mb-0"><i data-feather="layers" className="mr-3" />Flexi - Mid
                                                                </h6>
                                                            </div>
                                                            <div id="collapse-1-2" className="collapse" aria-labelledby="heading-1-2" data-parent="#accordion-1">
                                                                <div className="card-body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>High and stable internet</td>
                                                                                <td className="text-right">Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="row mt-4">
                                                                        <div className="col-lg-12 d-block">
                                                                            <a href="../users-hosts/user-payment.html" className="btn btn-fill">Subscribe</a>
                                                                            <br /><small>Note: All packages last for 30 days.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="card">
                                                            <div className="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button" data-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                                                                <h6 className="mb-0"><i data-feather="layers" className="mr-3" />Flexi - High
                                                                </h6>
                                                            </div>
                                                            <div id="collapse-1-3" className="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
                                                                <div className="card-body">
                                                                    <table className="table table-hover">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>High and stable internet</td>
                                                                                <td className="text-right">Yes</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>No. of slots per month</td>
                                                                                <td className="text-right">3</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="row mt-4">
                                                                        <div className="col-lg-12 d-block">
                                                                            <Link to='/UserPayment' className="btn btn-fill">Subscribe</Link>
                                                                            <br /><small>Note: All packages last for 30 days.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="help-text">
                                                            <p>If you can’t find a suitable pricing <a href="pricing.html">Click Here</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Suggest */}
                                            </div>
                                        </div>
                                        {/*/ Teams Here */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SpaceCal