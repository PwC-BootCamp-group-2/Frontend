import React from 'react'
import { Container } from 'react-bootstrap'
import { FaTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Booking.css'

const NotVerified = () => {
  return (
      <>
          <Container fluid className="p-0 booking-container">
              <div className='booking'>
                  <FaTimesCircle size={100} color='red' />
                  <h1>Account Not Verified</h1>
                  <p>Hi James Tayo, your account is not verified!</p>
                  <div>
                      <Link to='/dashboard' className='mybtn btn-dash'>Proceed to Dashboard</Link>
                  </div>
              </div>

          </Container>
      </>
  )
}

export default NotVerified