import { FaEnvelope, FaMailBulk, FaSearch } from 'react-icons/fa'
import bgHome from '../../../assets/img/bg-home.png'
import Pwc from '../../../assets/img/pwc.png'
import Xerde from '../../../assets/img/xerdelogo.png'
import './Hero.css'
import Heading from './Heading'

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <Heading
                        title='Find Your Office Space' subtitle='The ultimate workspace experience, with ultimate flexibility. Access more than 50 coworking spaces across 20 cities, with a single membership.'
                    />
                    <form className='flex'>
                        <div className='box'>
                            <span>City/Street</span>
                            <input type='text'
                                name='location'
                                // value='location'
                                // id='location'
                                placeholder='Location' />
                        </div>
                        <div className='box'>
                            <span>Space Type</span>
                            <input type='text'
                                name='spacetype'
                                // value='spacetype'
                                // id='spacetype'
                                placeholder='Space Type' />
                        </div>
                        <div className='box'>
                            <span>Price Range</span>
                            <input type='text'
                                name='price'
                                // value='price'
                                // id='price'
                                placeholder='Price Range' />
                        </div>
                        <div className='box'>
                            <h4 className='text-secondary'>Search</h4>
                        </div>
                        <button className='btn btn-success'>
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Hero 