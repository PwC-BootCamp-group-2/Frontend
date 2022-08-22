import React from 'react'
import { FaBoxes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RegisterBg from '../../../assets/img/register-bg.png';

const Account = () => {
    return (
        <section>
            <div className="bg-primary position-absolute h-100 top-0 left-0 zindex-100 col-lg-6 col-xl-6 zindex-100 d-none d-lg-flex flex-column justify-content-end" data-bg-size="cover" data-bg-position="center">
                <img src={RegisterBg} alt="Image" className="img-as-bg" />
            </div>
            <div className="container-fluid d-flex flex-column">
                <div className="row align-items-center justify-content-center justify-content-lg-end min-vh-100">
                    <div className="col-sm-7 col-lg-6 col-xl-6 py-6 py-md-0">
                        <div className="row justify-content-center">
                            <div className="col-11 col-lg-10 col-xl-6">
                                <div>
                                    <div className="mb-5">
                                        <div className="text-center">
                                            <h6 className="h3 mb-1">Create an account</h6>
                                            <p className="text-muted mb-0">Hello, let’s know who you are.</p>
                                        </div>
                                    </div><span className="clearfix" />
                                    <form>
                                        <div className="row">
                                            <div className="account-selection">
                                                <ul>
                                                    <li data-toggle="tooltip" data-placement="top" title="Single account for Individuals, Freelancers and Solopreneurs.">
                                                        
                                                        {/* Personal Account */}
                                                        <Link to='/usersignup'>
                                                            <div className="account-choose user">
                                                                <div className="action">
                                                                    <FaUser data-feather="user" /> Personal Account
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    </li>
                                                    <li data-toggle="tooltip" data-placement="top" title="Group/Corporate account for Companies or Team with multiple user accounts.">
                                                        <div className="account-choose host">

                                                           {/* Team Account */}
                                                            <Link to='/teamsignup'>
                                                                <div className="account-choose">
                                                                    <div className="action">
                                                                        <FaBoxes data-feather="grid" /> Team Account
                                                                    </div>
                                                                </div>
                                                            </Link>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mt-4 text-center">
                                        <small>Already a User?</small> 
                                        <Link to='/login' className="small font-weight-bold">Continue to Login</Link>
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

export default Account