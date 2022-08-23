import React from 'react'
import Heading from '../hero/Heading'
import './featured.css'
import FeaturedCard from './FeaturedCard'


const Featured = () => {
  return (
    <>
    <section className='featured background'>
        <div className='container'>
            <Heading title='Featured Office Types' subtitle='Find all types of office spaces.'/>
            <FeaturedCard />
        </div>
       </section>
    </>
  )
}

export default Featured