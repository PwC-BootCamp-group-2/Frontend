import React from 'react'
import { Container } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Booking.css'


const SpaceSuccessful = () => {
  return (
      <>
          <Container fluid className="p-0 booking-container">
              <div className='booking'>
                  <FaCheckCircle size={100} color='green' />
                  <h1>Space Successfully Created</h1>
                  <p>Hi James Tayo, your space has been successfully created!</p>
                  <div>
                      <Link to='/dashboard' className='mybtn btn-dash'>Proceed to Dashboard</Link>
                  </div>
              </div>

          </Container>
      </> 
  )
}

export default SpaceSuccessful