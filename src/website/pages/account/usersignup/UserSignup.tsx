import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaPhone, FaShareSquare, FaKey } from 'react-icons/fa'
import SignupBg from '../../../assets/img/user-signup.png'

const UserSignup = () => {
    return (
        <main>
            <section>
                <div className="bg-primary position-absolute h-100 top-0 left-0 zindex-100 col-lg-6 col-xl-6 zindex-100 d-none d-lg-flex flex-column justify-content-end" data-bg-size="cover" data-bg-position="center">
                    <img src={SignupBg} alt="Image" className="img-as-bg" />
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
                                                <p className="text-muted mb-0">Complete your information in the form below.</p>
                                            </div>
                                        </div><span className="clearfix" />
                                        <form>
                                            <div className="form-group">
                                                <label className="form-control-label">Full Name:</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="e.g: Bosun Jones" />
                                                    <div className="input-group-prepend"><span className="input-group-text"><FaUser data-feather="user" /></span></div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-control-label">Email Address:</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="bosunjones@email.coms" />
                                                    <div className="input-group-prepend"><span className="input-group-text"><FaEnvelope data-feather="mail" /></span></div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-control-label">Phone Number:</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="e.g: +2348098765432" />
                                                    <div className="input-group-prepend"><span className="input-group-text"><FaPhone data-feather="phone" /></span></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label">Password:</label>
                                                        <div className="input-group input-group-merge">
                                                            <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="******" />
                                                            <div className="input-group-prepend"><span className="input-group-text"><FaKey data-feather="******" /></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="form-control-label">Confirm Password:</label>
                                                        <div className="input-group input-group-merge">
                                                            <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="******" />
                                                            <div className="input-group-prepend"><span className="input-group-text"><FaKey data-feather="key" /></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <a href="user-created.html" className="btn btn-block btn-primary">Continue</a>
                                            </div>
                                        </form>
                                        <div className="mt-4 text-center"><small>Already a User?</small> <Link to="/login" className="small font-weight-bold">Continue to Login</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    )
}

export default UserSignup