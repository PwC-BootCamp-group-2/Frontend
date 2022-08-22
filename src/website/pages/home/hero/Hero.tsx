import { FaEnvelope, FaMailBulk } from 'react-icons/fa'
import bgHome from '../../../assets/img/bg-home.png'
import Pwc from '../../../assets/img/pwc.png'
import Xerde from '../../../assets/img/xerdelogo.png'
import './Hero.css'
const Hero = () => {
    return (
        <>
            <section className="hero-section damier-light-bugundy damier-hero">
                <div className="container">
                    <div className="row row-grid align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2 text-right img-home">
                            <figure className="w-100"><img alt="Image placeholder" src={bgHome} className="img-fluid mw-md-120" /></figure>
                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5 home-details">
                            <div className="caption-left">
                            </div>
                            <h2 className="text-center text-md-left mb-3 hero-text">Enjoy frictionless daily access to the best
                                workspaces near you!</h2>
                            <p className="text-center text-md-left">The ultimate workspace experience, with ultimate flexibility.
                                Access more than 50 coworking spaces across 20 cities, with a single membership.</p>
                            <form className="mt-5">
                                <div className="input-group input-group-lg mb-3" id="hero-signup">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend left"><span className="input-group-text border-0 px-4 bg-white text-grey"><FaEnvelope /></span></div>
                                        <input type="text" className="form-control border-0 px-1 center" aria-label="Find something" placeholder="Enter your email address" />
                                        <div className="input-group-append right"><span className="input-group-text border-0 py-0 pl-2 pr-1 bg-white"><button type="button" className="btn btn-sm btn-color">Get Started</button></span></div>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-4"><a href="#" className="btn btn-white btn-icon-only rounded-circle shadow-sm hover-scale-110" data-fancybox><span className="btn-inner--icon text-sm"><i data-feather="play" className="text-primary" /></span></a> <small className="text-dark ml-2">See how it
                                works</small></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="lh-180 pt-4 mt-4 mb-6">
                                We are trusted by clients like:
                            </h5>
                            <div className='home-card flex'>
                                <div className='card-img'><img src={Pwc} className='pwc-img'/></div>
                                <div className='card-img'><img src={Xerde} className='xerde-img'/></div>
                            </div>
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