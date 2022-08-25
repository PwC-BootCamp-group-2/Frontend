import React from 'react'
import { Container } from 'react-bootstrap'
import { FaTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Booking.css'

const BookingUnsuccessful = () => {
  return (
      <main>
          <Container>
              <div className='booking'>
                  <FaTimesCircle size={100} color='red' />
                  <h1>Booking Unsuccessful</h1>
                  <p>Hi James Tayo, your booking was not successfully!</p>
                  <div>
                      <Link to='/dashboard' className='mybtn btn-dash'>Proceed to Dashboard</Link>
                  </div>
              </div>

          </Container>
      </main>
  )
}

export default BookingUnsuccessful