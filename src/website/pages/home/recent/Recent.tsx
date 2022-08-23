import React from 'react'
import Heading from '../hero/Heading';
import RecentCard from './RecentCard';
import './Recent.css';
const Recent = () => {
  return (
    <>
        <section className='recent padding'>
            <div className='container'>
                  <Heading title='Recent Office Spaces' subtitle='Explore some of our top featured workspaces.' />

                  <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Recent