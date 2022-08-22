import React from 'react'
import { FaChevronRight, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Group828 from "../../../assets/img/Group 828.png"
import Ellipse352 from "../../../assets/img/Ellipse 352.png"
import Ellipse353 from "../../../assets/img/Ellipse 353.png"
import Ellipse354 from "../../../assets/img/Ellipse 354.png"
import BlogHero1 from "../../../assets/img/blog-hero-1.jpg"
import Wifi from "../../../assets/img/wifi.svg"
import Coffee from "../../../assets/img/coffee.svg"
import printer from "../../../assets/img/printer.svg"

const SpaceBoard = () => {
    return (
        <section className="grey-bg">
            <div className="container pb-7">
                <div className="row justify-content-md-between pt-10 align-items-center">
                    <div className="col-lg-4  pt-5">
                        <h4>Own a space?<br />Come on board!</h4>
                        <p>The ultimate workspace experience, with ultimate flexibility. Access more than 50 coworking
                            spaces across 20 cities, with a single membership.</p>
                        <Link to='/Signup'><FaChevronRight className='pl-2' /> Become a Host</Link>

                    </div>
                    <div className="col-lg-6 pt-5">
                        <img src={Group828} alt='' />
                    </div>
                </div>
                <div className="row mt-7 pb-4">
                    <h2 className="col-lg-4">Trusted by over 5,000 Users in Lagos</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card-deck">
                            <div className="card col-lg-4 hover-translate-y-n10 hover-shadow-lg">
                                <div className="container pt-4">
                                    <ul className="d-flex">
                                        <li><span className="space-rating">3.5 <FaStar /></span></li>
                                        <li className="damier-size"><span>- Ratings</span></li>
                                    </ul>
                                </div>
                                <div className="container">
                                    <p>This is the best experience I’ve ever had. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                </div>
                                <div className="container pb-4 d-flex">
                                    <img src={Ellipse352} className="img-fluid" alt='' />
                                    <div>
                                        <p className="mb-0 ml-2"><strong>Bosun Jones</strong></p>
                                        <p className="mb-0 ml-2"><small>Designer</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card col-lg-4 hover-translate-y-n10 hover-shadow-lg">
                                <div className="container pt-4">
                                    <ul className="d-flex">
                                        <li><span className="space-rating">3.5 <FaStar /> </span></li>
                                        <li className="damier-size"><span>- Ratings</span></li>
                                    </ul>
                                </div>
                                <div className="container">
                                    <p>This is the best experience I’ve every had. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                </div>
                                <div className="container pb-4 d-flex">
                                    <img src={Ellipse353} className="img-fluid" alt='' />
                                    <div>
                                        <p className="mb-0 ml-2"><strong>Modupe Janet</strong></p>
                                        <p className="mb-0 ml-2"><small>Content Creator</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card col-lg-4 hover-translate-y-n10 hover-shadow-lg">
                                <div className="container pt-4">
                                    <ul className="d-flex">
                                        <li><span className="space-rating">3.5 <FaStar /></span></li>
                                        <li className="damier-size"><span>- Ratings</span></li>
                                    </ul>
                                </div>
                                <div className="container">
                                    <p>This is the best experience I’ve every had. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                </div>
                                <div className="container pb-4 d-flex">
                                    <img src={Ellipse354} className="img-fluid" alt='' />
                                    <div>
                                        <p className="mb-0 ml-2"><strong>Tracy Ashiru</strong></p>
                                        <p className="mb-0 ml-2"><small>Blogger</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Continue to Dashboard Area */}
                <div className="container">
                    <div className="row justify-content-md-between">
                        <div className="col-lg-6 pt-7 mb-4">
                            <h4 className="mb-0">Featured Spaces</h4>
                            <p>Explore some of our top featured workspaces.</p>
                        </div>
                        <div className="col-lg-6 text-right float-right pt-7 mb-4">
                            <Link to='/login' className="btn btn-outline">Continue to Dashboard <i data-feather="chevron-right" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Area */}
                <div className="container">
                    <div className="row">
                        <div className="card-deck">
                            <div className="card p-0 h-40">
                                <div className="img-hold">
                                    <img src={BlogHero1} alt='' />
                                </div>
                                <div className="card-img-overlay">
                                    <div className="container">
                                        <ul className="d-flex">
                                            <li><span className="space-rating"><strong>Flexi</strong>/Low </span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Conference Room</h5>
                                    <p className="card-text">Workstation NG - Maryland, Lagos</p>
                                    <div className="row justify-content-left">
                                        <div className="col-8 basic">
                                            <ul className="mb-0">
                                                <li data-toggle="tooltip" data-placement="top" title="High Speed Wifi"><img src={Wifi} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="Free Coffee"><img src={Coffee} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="Printer"><img src={printer} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="High Speed Wifi"><img src={Wifi} alt='' /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="container align-items-lg-center">
                                    <div className="row mr-2 card-footer justify-content-md-between">
                                        <div className="col-sm-6 text-sm-right p-0"><a href="single-space.html" className="btn btn-fill btn-sm">View details</a></div>
                                        <div className="col-sm-2 d-flex mt-2 mr-2">
                                            <ul>
                                                <li> <i data-feather="user" />
                                                </li></ul>
                                            <p className="mb-0" data-toggle="tooltip" data-placement="top" title="Space Capacity">20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-0 h-40">
                                <div className="img-hold">
                                    <img src={BlogHero1} alt='' />
                                </div>
                                <div className="card-img-overlay">
                                    <div className="container">
                                        <ul className="d-flex">
                                            <li><span className="space-rating"><strong>Maxi</strong>/Mid </span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Private Office</h5>
                                    <p className="card-text">Workstation NG - Maryland, Lagos</p>
                                    <div className="row justify-content-left">
                                        <div className="col-8 basic">
                                            <ul className="mb-0">
                                                <li data-toggle="tooltip" data-placement="top" title="High Speed Wifi"><img src={Wifi} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="Free Coffee"><img src={Coffee} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="Printer"><img src={printer} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="High Speed Wifi"><img src={Wifi} alt='' /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="container align-items-lg-center">
                                    <div className="row mr-2 card-footer justify-content-md-between">
                                        <div className="col-sm-6 text-sm-right p-0"><a href="single-space.html" className="btn btn-fill btn-sm">View details</a></div>
                                        <div className="col-sm-2 d-flex mt-2 mr-2">
                                            <ul>
                                                <li> <i data-feather="user" />
                                                </li></ul>
                                            <p className="mb-0" data-toggle="tooltip" data-placement="top" title="Space Capacity">20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-0 h-40">
                                <div className="img-hold">
                                    <img src={BlogHero1} alt='' />
                                </div>
                                <div className="card-img-overlay">
                                    <div className="container">
                                        <ul className="d-flex">
                                            <li><span className="space-rating"><strong>Prime</strong>/Mid </span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Meeting Room</h5>
                                    <p className="card-text">Workstation NG - Maryland, Lagos</p>
                                    <div className="row justify-content-left">
                                        <div className="col-8 basic">
                                            <ul className="mb-0">
                                                <li data-toggle="tooltip" data-placement="top" title="High Speed Wifi"><img src={Wifi} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="Free Coffee"><img src={Coffee} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="Printer"><img src={printer} alt='' /></li>
                                                <li data-toggle="tooltip" data-placement="top" title="High Speed Wifi"><img src={Wifi} alt='' /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="container align-items-lg-center">
                                    <div className="row mr-2 card-footer justify-content-md-between">
                                        <div className="col-sm-6 text-sm-right p-0"><a href="single-space.html" className="btn btn-fill btn-sm">View details</a></div>
                                        <div className="col-sm-2 d-flex mt-2 mr-2">
                                            <ul>
                                                <li> <i data-feather="user" />
                                                </li></ul>
                                            <p className="mb-0" data-toggle="tooltip" data-placement="top" title="Space Capacity">20</p>
                                        </div>
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

export default SpaceBoard