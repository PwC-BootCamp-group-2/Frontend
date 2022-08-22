import React from 'react'
import { FaKey, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import LoginBg from '../../../assets/img/login-bg.png';

const Login = () => {
    return (
        <section>
            <div className="bg-primary position-absolute h-100 top-0 left-0 zindex-100 col-lg-6 col-xl-6 zindex-100 d-none d-lg-flex flex-column justify-content-end" data-bg-size="cover" data-bg-position="center"><img src={LoginBg} alt="Image" className="img-as-bg" />
            </div>
            <div className="container-fluid d-flex flex-column">
                <div className="row align-items-center justify-content-center justify-content-lg-end min-vh-100">
                    <div className="col-sm-7 col-lg-6 col-xl-6 py-6 py-md-0">
                        <div className="row justify-content-center">
                            <div className="col-11 col-lg-10 col-xl-6">
                                <div>
                                    <div className="mb-5">
                                        <h6 className="h3 mb-1">Welcome back!</h6>
                                        <p className="text-muted mb-0">Sign in to your account to continue.</p>
                                    </div><span className="clearfix" />
                                    <form>
                                        <div className="form-group">
                                            <label className="form-control-label">Email address</label>
                                            <div className="input-group input-group-merge">
                                                <input type="email" className="form-control form-control-prepend" id="input-email" placeholder="Example: bosunjones@mail.com" />
                                                <div className="input-group-prepend"><span className="input-group-text"><FaUserAlt data-feather="user" /></span></div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <label className="form-control-label">Password</label>
                                                </div>
                                                <div className="mb-2"><a href="#" className="small text-muted text-underline--dashed border-primary" data-toggle="modal" data-target="#forgot-password">Forgot Password?</a></div>
                                            </div>
                                            <div className="input-group input-group-merge">
                                                <input type="password" className="form-control form-control-prepend" id="input-password" placeholder="Password" />
                                                <div className="input-group-prepend"><span className="input-group-text"><FaKey data-feather="key" /></span></div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button type="button" className="btn btn-block btn-primary" data-toggle="modal" data-target="#select-dashboard">Sign in</button>
                                        </div>
                                    </form>
                                    <div className="mt-4"><small>Not registered?</small>
                                        <Link to='/account' className="small font-weight-bold">Create account</Link>
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

export default Login