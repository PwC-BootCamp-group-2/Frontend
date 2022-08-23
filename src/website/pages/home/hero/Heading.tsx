import React from 'react'
import { HeadingType } from '../../../../types/props'

const Heading = ({title, subtitle}: HeadingType) => {
  return (
    <>
        <div className='heading'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    </>
  )
}

export default Heading