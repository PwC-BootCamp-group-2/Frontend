import React from 'react'
import { Container } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Booking.css'

const BookingSuccessful = () => {
    return (
        <>
            <Container fluid className="p-0 booking-container">
                <div className='booking'>
                    <FaCheckCircle size={100} color='green' />
                    <h1>Booking Successful</h1>
                    <p>Hi James Tayo, your booking has been made successfully!</p>
                    <div>
                        <Link to='/dashboard' className='mybtn btn-dash'>Proceed to Dashboard</Link>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default BookingSuccessful