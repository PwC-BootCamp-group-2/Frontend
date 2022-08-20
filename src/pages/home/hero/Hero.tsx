import bgHome from '../../../assets/img/bg-home.png'
import './Hero.css'
const Hero = () => {
    return (
        <>
            <section className="hero-section slice damier-light-bugundy damier-hero">
                <div className="container">
                    <div className="row row-grid align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2 text-right">
                            <figure className="w-100"><img alt="Image placeholder" src={bgHome} className="img-fluid mw-md-120" /></figure>
                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                            <div className="caption-left">
                            </div>
                            <h2 className=" text-center text-md-left mb-3 hero-text">Enjoy frictionless daily access to the best
                                workspaces near you!</h2>
                            <p className="text-center text-md-left">The ultimate workspace experience, with ultimate flexibility.
                                Access more than 50 coworking spaces across 20 cities, with a single membership.</p>
                            <form className="mt-5">
                                <div className="input-group input-group-lg mb-3" id="hero-signup">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend"><span className="input-group-text border-0 pr-2"><i data-feather="mail" /></span></div>
                                        <input type="text" className="form-control border-0 px-1" aria-label="Find something" placeholder="Enter your email address" />
                                        <div className="input-group-append"><span className="input-group-text border-0 py-0 pl-2 pr-1"><button type="button" className="btn btn-sm btn-primary">Get Started</button></span></div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-4"><a href="#" className="btn btn-white btn-icon-only rounded-circle shadow-sm hover-scale-110" data-fancybox><span className="btn-inner--icon text-sm"><i data-feather="play" className="text-primary" /></span></a> <small className="text-dark ml-2">See how it
                                works</small></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="lh-180 mt-4 mb-6"><img src="../../assets/img/spaces-logo.png" className="img-fluid" />
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row pb-6">
                    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                        <h3 className="mb-4 text-center">Damier helps you connect with co-working space around you!</h3>
                        <p className="text-center">The ultimate workspace experience, with ultimate flexibility. Access more than 50
                            coworking spaces across 20 cities.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero